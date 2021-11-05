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
import setScroll from '$actions/setScroll';
</script>

<svelte:head>
	<title>K16: Event Locatie</title>
</svelte:head>

<div class="fullscreen-scroll scroll-snap" use:setScroll>
	<section class="fullscreen-scroll__section scroll-snap__desktop scroll-snap__mobile">
        <Teaser title="Event Locatie">
            <img src="/img_event_01.png" alt="Event Locatie" />
        </Teaser>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item scroll-snap__mobile">
                <Content>
                    <p>Authentieke graansilo’s als hart van een multifunctionele ruimte</p>
                </Content>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <img src="/img_event_02.png" alt="" />
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <img src="/img_event_03.png" alt="" />
                </Teaser>
            </div>
            <div class="layout-split__item layout-split__item--small scroll-snap__mobile">
                <Teaser>
                    <img src="/img_event_04.png" alt="" />
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item layout-split__item--small scroll-snap__mobile">
                <Teaser>
                    <img src="/img_event_05.png" alt="" />
                </Teaser>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <img src="/img_event_06.png" alt="" />
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <img src="/img_event_07.png" alt="" />
                </Teaser>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Content>
                    <p>Dynamisch ruimtelijk concept met 80 m<sup>2</sup> openlucht terras</p>
                    <p>520 m<sup>2</sup> verdeeld over twee niveaus</p>
                </Content>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item layout-split__item scroll-snap__mobile">
                <Content>
                    <p>
                        Droomlocatie voor huwelijken, personeelsfeesten, recepties,
                        seminaries, congressen, beurzen, TV-opnames, &hellip;
                    </p>
                </Content>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <img src="/img_event_08.png" alt="" />
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop scroll-snap__mobile">
        <Teaser>
            <img src="/img_event_09.png" alt="" />
        </Teaser>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop scroll-snap__mobile">
        <Teaser>
            <img src="/img_event_10.png" alt="" />
        </Teaser>
    </section>
</div>
