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
	import img01 from '/img_loft16_01.png';
	import img02 from '/img_loft16_02.png';
	import img03 from '/img_loft16_03.png';
	import img04 from '/img_loft16_04.png';
	import img05 from '/img_loft16_05.png';
	import img06 from '/img_loft16_06.png';
	import img07 from '/img_loft16_07.png';
	import img08 from '/img_loft16_08.png';
	import img09 from '/img_loft16_09.png';
	import img10 from '/img_loft16_10.png';
	import img11 from '/img_kaai16_02.png';

    let count = 0;
    let s = [];
    let st = [];

    function onScroll() {
        count = Math.random();
    }

    $: {
        if(count) {}
        st = s.map((s) => s.getBoundingClientRect().top / -4);
    }
</script>

<svelte:head>
	<title>K16: Loft16</title>
</svelte:head>

<div class="fullscreen-scroll" on:scroll={onScroll}>
	<section class="fullscreen-scroll__section" bind:this={s[1]}>
        <div class="parallax" style="transform: translate(0,{st[1]}px)">
            <div class="image-teaser isVisible">
                <div class="image-teaser__img">
                    <img src="{img01}" alt="Zicht op Kaai 16" />
                </div>
                <div class="image-teaser__content">
                    <div class="image-teaser-content">
                        <div class="image-teaser-content__title">
                            <h1>Loft 16</h1>
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
                        <p>Exclusieve uitkijk</p>
                        <p>Living van 200 m2 met onbelemmerde uitkijk op het water</p>
                    </div>
                </div>
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="{img02}" alt="Zicht op Kaai 16" />
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
                            <img src="{img03}" alt="Zicht op Kaai 16" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item layout-split__item--small">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="{img04}" alt="Zicht op Kaai 16" />
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
                            <img src="{img05}" alt="Zicht op Kaai 16" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="{img06}" alt="Zicht op Kaai 16" />
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
                            <img src="{img07}" alt="Zicht op Kaai 16" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item layout-split__item">
                    <div class="content">
                        <p>Het meest adembenemende penthouse</p>
                        <p>Geschikt voor exclusieve events</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[6]}>
        <div class="parallax" style="transform: translate(0,{st[6]}px)">
            <div class="layout-split">
                <div class="layout-split__item layout-split__item--small">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="{img08}" alt="Zicht op Kaai 16" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="{img09}" alt="Zicht op Kaai 16" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[7]}>
        <div class="parallax" style="transform: translate(0,{st[7]}px)">
            <div class="layout-split">
                <div class="layout-split__item">
                    <div class="image-teaser isVisible">
                        <div class="image-teaser__img">
                            <img src="{img10}" alt="Zicht op Kaai 16" />
                        </div>
                    </div>
                </div>
                <div class="layout-split__item layout-split__item">
                    <div class="content">
                        <p>Rooftop terras met zwembad</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section" bind:this={s[8]}>
        <div class="image-teaser isVisible" style="transform: translate(0,{st[8]}px)">
            <div class="image-teaser__img">
                <img src="{img11}" alt="Zicht op Kaai 16" />
            </div>
        </div>
    </section>
</div>
