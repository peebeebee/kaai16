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
</script>

<svelte:head>
	<title>K16: Loft16</title>
</svelte:head>

<div class="fullscreen-scroll">
	<section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax scroll-snap--mobile">
            <Teaser title="Loft16">
                <img src="/img_loft16_01.png" alt="Zicht op Kaai 16" />
            </Teaser>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax">
            <div class="layout-split">
                <div class="layout-split__item scroll-snap--mobile">
                    <Content>
                        <p>Exclusieve uitkijk</p>
                        <p>Living van 200 m2 met onbelemmerde uitkijk op het water</p>
                    </Content>
                </div>
                <div class="layout-split__item scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_02.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax">
            <div class="layout-split">
                <div class="layout-split__item scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_03.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
                <div class="layout-split__item layout-split__item--small scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_04.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax">
            <div class="layout-split">
                <div class="layout-split__item layout-split__item--small scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_05.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
                <div class="layout-split__item scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_06.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax">
            <div class="layout-split">
                <div class="layout-split__item scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_07.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
                <div class="layout-split__item scroll-snap--mobile">
                    <Content>
                        <p>Het meest adembenemende penthouse</p>
                        <p>Geschikt voor exclusieve events</p>
                    </Content>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax">
            <div class="layout-split ">
                <div class="layout-split__item layout-split__item--small scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_08.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
                <div class="layout-split__item scroll-snap--mobile">
                    <Teaser>
                        <img class="teaser-img" src="/img_loft16_09.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax">
            <div class="layout-split">
                <div class="layout-split__item scroll-snap--mobile">
                    <Teaser>
                        <img src="/img_loft16_10.png" alt="Zicht op Kaai 16" />
                    </Teaser>
                </div>
                <div class="layout-split__item scroll-snap--mobile">
                    <Content>
                        <p>Rooftop terras met zwembad</p>
                    </Content>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap--desktop">
        <div class="parallax scroll-snap--mobile">
            <Teaser>
                <img src="/img_kaai16_02.png" alt="Zicht op Kaai 16" />
            </Teaser>
        </div>
    </section>
</div>
