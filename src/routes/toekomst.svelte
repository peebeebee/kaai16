<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import img01 from '/img_toekomst_01.png';
</script>

<svelte:head>
	<title>K16</title>
</svelte:head>

<div class="fullscreen-scroll">
	<section class="fullscreen-scroll__section">
		<div class="image-teaser isVisible">
			<div class="image-teaser__img">
				<img src="{img01}" alt="Zicht op Kaai 16" />
			</div>
			<div class="image-teaser__content">
				<div class="image-teaser-content">
					<div class="image-teaser-content__title">
						<h1>Toekomst</h1>
					</div>
					<div class="image-teaser-content__subtitle">
						<h2>In the making</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
