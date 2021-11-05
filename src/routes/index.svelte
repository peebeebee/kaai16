<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
    import Teaser from '$lib/Teaser.svelte';
    import Image from 'svelte-image';
</script>

<svelte:head>
	<title>K16</title>
</svelte:head>

<div class="fullscreen-scroll scroll-snap">
	<section class="fullscreen-scroll__section">
        <Teaser title="Loft 16">
            <Image src="/img/img_home_01.png"
                   lazy="false" threshold="0" offset="100" />
        </Teaser>
    </section>
</div>
