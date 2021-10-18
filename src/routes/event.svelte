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

<script lang="ts">
    let count = 0;
    let s = [];
    let st = [];

    function onScroll() {
        count = Math.random();
    }

    $: {
        if(count) {}
        st = s.map((s) => s.getBoundingClientRect().top / -3);
    }
</script>

<svelte:head>
	<title>K16: Event Locatie</title>
</svelte:head>

<div class="fullscreen-scroll" on:scroll={onScroll}>
	<section class="fullscreen-scroll__section" bind:this={s[1]}>
        <div class="parallax" style="transform: translate(0,{st[1]}px)">
            <div class="image-teaser isVisible">
                <div class="image-teaser__img">
                    <img src="/img_event_01.png" alt="" />
                </div>
                <div class="image-teaser__content">
                    <div class="image-teaser-content">
                        <div class="image-teaser-content__title">
                            <h1>Event Locatie</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[2]}>
        <div class="parallax" style="transform: translate(0,{st[2]}px)">
            <div class="layout-split">
                <div class="layout-split__item layout-split__item">
                    <div class="content">
                        <p>Authentieke graansilo’s als hart van een multifunctionele ruimte</p>
                    </div>
                </div>
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="/img_event_02.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[3]}>
        <div class="parallax" style="transform: translate(0,{st[3]}px)">
            <div class="layout-split">
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="/img_event_03.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item layout-split__item--small">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="/img_event_04.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[4]}>
        <div class="parallax" style="transform: translate(0,{st[4]}px)">
            <div class="layout-split">
                <div class="layout-split__item layout-split__item--small">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="/img_event_05.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="/img_event_06.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[5]}>
        <div class="parallax" style="transform: translate(0,{st[5]}px)">
            <div class="layout-split">
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="/img_event_07.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item layout-split__item">
                    <div class="content">
                        <p>Dynamisch ruimtelijk concept met 80 m<sup>2</sup> openlucht terras</p>
                        <p>520 m<sup>2</sup> verdeeld over twee niveaus</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[6]}>
        <div class="parallax" style="transform: translate(0,{st[6]}px)">
            <div class="layout-split">
                <div class="layout-split__item layout-split__item">
                    <div class="content">
                        <p>
                            Droomlocatie voor huwelijken, personeelsfeesten, recepties,
                            seminaries, congressen, beurzen, TV-opnames, &hellip;
                        </p>
                    </div>
                </div>
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="/img_event_08.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[7]}>
        <div class="image-teaser isVisible" style="transform: translate(0,{st[7]}px)">
            <div class="image-teaser__img">
                <img src="/img_event_09.png" alt="" />
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[8]}>
        <div class="image-teaser isVisible" style="transform: translate(0,{st[8]}px)">
            <div class="image-teaser__img">
                <img src="/img_event_10.png" alt="" />
            </div>
        </div>
    </section>
</div>
