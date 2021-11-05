<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import Teaser from '$lib/Teaser.svelte';
    import Content from '$lib/Content.svelte';
	import setScroll from '../actions/setScroll';
	import Image from 'svelte-image';
</script>

<svelte:head>
	<title>K16: Info</title>
</svelte:head>

<div class="fullscreen-scroll scroll-snap" use:setScroll>
	<section class="fullscreen-scroll__section">
		<div class="layout-split">
			<div class="layout-split__item">
				<Content>
                    <p>
                        KAAI 16<br>
                        SCHEEPVAARTSKAAI 16<br>
                        3500 HASSELT
                    </p>
                    <p>
                        LOFT 16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0032 000 000<br>
                        EVENT LOCATIE&nbsp;&nbsp;&nbsp;&nbsp;0032 000 000
                    </p>
                    <p>
                        <small>BENT U GEÏNTERESSEERD IN HET TOTALE PROJECT, CONTACTEER ONS VRIJBLIJVEND</small>
                    </p>
				</Content>
			</div>
			<div class="layout-split__item">
				<Teaser>
					<Image src="/img/img_info_01.png"
					       lazy="false" threshold="0" offset="1500" />
				</Teaser>
			</div>
		</div>
	</section>
</div>

<style>
    p {
        font-size: 24px;
    }

    p small {
        font-size: 18px;
    }
</style>