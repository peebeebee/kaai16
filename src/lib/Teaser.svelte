<script lang="ts">
    import {scrollY} from '../stores';
    export let title: string = undefined;

    let el: HTMLElement;
    let y: Number = 0;

    $: y = ($scrollY && el) ? el.getBoundingClientRect().top / -2 : 0;
</script>

<div class="teaser" bind:this={el}>
    <div class="teaser__img" style="transform: translateZ(0) translate(0,{y}px">
        <slot />
    </div>

    {#if title}
    <div class="teaser__content">
        <div class="teaser-content">
            <div class="teaser-content__title">
                <h1>{title}</h1>
            </div>
        </div>
    </div>
    {/if}
</div>

<style>
    .teaser {
        position: relative;
        align-items: center;
        color: #fff;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: relative;
        text-align: left;
        width: 100%;
        height: 100%;
    }

    .teaser .teaser__img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        perspective: 1000;
        backface-visibility: hidden;
        /* transition: 100ms transform linear; */
    }

    .teaser .teaser__img :global(img) {
        width: 100%;
        height: 100%;

        object-fit: cover;
        -o-object-position: 50% 100%;
        object-position: 50% 100%;
    }

    .teaser .teaser__content {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        margin: 0 auto;
        /* max-width: 70rem; */
        /* opacity: 0; */
        /* padding: 0 3rem; */
        position: relative;
        transition: opacity 1.2s cubic-bezier(.65,0,.28,1),transform 1.2s cubic-bezier(.65,0,.28,1);
        width: 100%;
        z-index: 1;
        text-transform: uppercase;
        flex: 1;
        align-items: center;
    }

    @media(max-width: 1023px) {
        .teaser {
            height: 100vh;
        }
    }

    @media(min-width: 1024px) {
        .teaser .teaser__content {
            align-items:center;
            /* padding: 0 6rem; */
            transform: translate3d(0,3rem,0);
            width: auto;
        }
    }


    .teaser-content .teaser-content__title {
        position: relative;
        grid-area: c;
    }

    /* .teaser-content .teaser-content__subtitle {
        grid-area: d;
    } */

    .teaser-content h1 {
        font-size: 150px;
        font-size: clamp(50px, 7vw, 150px);
    }

    @media(min-width: 1024px) {
        .teaser-content {
            display: grid;
            grid-template:
                "a a a" 1fr
                "b b b" 1fr
                "c c c" 1fr
                "d d d" 1fr
                "e e e" 1fr / 1fr 1fr 1fr;
            width: 100%;
        }
    }
</style>