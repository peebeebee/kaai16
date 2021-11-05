import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import image from "svelte-image";
import { preprocess as compilerPreprocess } from "svelte/compiler";
// import path from "path";

const imagePreprocessor = image({
	// processFolders: ["img"],
	processFoldersRecursively: true,
	// @ts-expect-error bad type inference
	processFoldersSizes: [600, 1200, 2400],
	processFoldersExtensions: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"],
	placeholder: "blur",
	outputDir: "../g/",
});

imagePreprocessor.markup({ content: "<html/>" })

function runImagesAfterOthers(otherProcessors) {
	return {
		markup: async ({ content, filename }) => {
			const otherProcessorsReturn = await compilerPreprocess(content, otherProcessors, { filename })
			content = otherProcessorsReturn.code

			const { code } = await imagePreprocessor.markup({ content })
			return {
				...otherProcessorsReturn,
				code,
			}
		},
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: runImagesAfterOthers(
		preprocess({})
	),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte',
		trailingSlash: "never"
	}
};

export default config;
