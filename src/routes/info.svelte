<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>K16: Info</title>
</svelte:head>

<div class="fullscreen-scroll">
	<section class="fullscreen-scroll__section">
		<div class="layout-split">
			<div class="layout-split__item">
				<div class="content">
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
				</div>
			</div>
			<div class="layout-split__item">
				<div class="image-teaser isVisible">
					<div class="image-teaser__img">
						<img src="/img_info_01.png" alt="Zicht op Kaai 16" />
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
    .content {
        font-size: 35px;
    }

    .content small {
        font-size: 27px;
    }
</style>