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
	<title>K16: Loft16</title>
</svelte:head>

<div class="fullscreen-scroll scroll-snap" use:setScroll>
	<section class="fullscreen-scroll__section scroll-snap__desktop scroll-snap__mobile">
        <Teaser title="Loft16">
            <Image src="/img/img_loft16_01.png" alt="Loft16"
                   lazy="false" threshold="0" offset="100" />
        </Teaser>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item scroll-snap__mobile">
                <Content>
                    <p>Exclusieve uitkijk</p>
                    <p>Living van 200 m2 met onbelemmerde uitkijk op het water</p>
                </Content>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_02.png"
                           lazy="false" threshold="0" offset="100"/>
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_03.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
            <div class="layout-split__item layout-split__item--small scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_04.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item layout-split__item--small scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_05.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_06.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_07.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Content>
                    <p>Het meest adembenemende penthouse</p>
                    <p>Geschikt voor exclusieve events</p>
                </Content>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split ">
            <div class="layout-split__item layout-split__item--small scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_08.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_09.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop">
        <div class="layout-split">
            <div class="layout-split__item scroll-snap__mobile">
                <Teaser>
                    <Image src="/img/img_loft16_10.png"
                           lazy="false" threshold="0" offset="100" />
                </Teaser>
            </div>
            <div class="layout-split__item scroll-snap__mobile">
                <Content>
                    <p>Rooftop terras met zwembad</p>
                </Content>
            </div>
        </div>
    </section>
    <section class="fullscreen-scroll__section scroll-snap__desktop scroll-snap__mobile">
        <Teaser>
            <Image src="/img/img_kaai16_02.png"
                   lazy="false" threshold="0" offset="100" />
        </Teaser>
    </section>
</div>
