<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Teaser from '$lib/Teaser.svelte';
	import Image from 'svelte-image';
</script>

<svelte:head>
	<title>K16: Toekomst</title>
</svelte:head>

<div class="fullscreen-scroll scroll-snap">
	<section class="fullscreen-scroll__section">
		<Teaser title="Toekomst">
			<Image src="/img/img_toekomst_01.png" alt="Toekomst"
			       lazy="false" threshold="0" />
		</Teaser>
	</section>
</div>
