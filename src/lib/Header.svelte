<script lang="ts">
	import NavToggle from '$lib/NavToggle.svelte';
	import NavList from '$lib/NavList.svelte';
	import { page } from '$app/stores';

	let expanded = false;

	// Make svelte react to page changes.
	page.subscribe(() => {
		expanded = false;
	});

</script>

<header class="header" class:header--expanded="{expanded}" class:header--home="{$page.path === '/'}">
	<div class="header__item header-pagetitle">
		<h2>
			{#if $page.path === '/loft'}Loft 16{/if}
			{#if $page.path === '/event'}Event locatie{/if}
			{#if $page.path === '/toekomst'}Toekomst{/if}
			{#if $page.path === '/info'}Info{/if}
		</h2>
	</div>
	<div class="header__item header-title">
		<h1>
			<a href="/">K16</a>
		</h1>
	</div>
	<div class="header__item">
		<nav role="navigation" class="nav-main" class:nav-main--expanded="{expanded}">
			<NavToggle
				on:click="{() => expanded = !expanded}"
				expanded={expanded}>
			</NavToggle>
			<NavList expanded={expanded}></NavList>
		</nav>
	</div>
</header>

<style>
	:global(:root) {
		--nav-height: 40px;
		--nav-color: var(--primary-color)
	}

	a {
		color: inherit;
	}

	a:hover {
		text-decoration: none;
		color: var(--text-color);
	}

	h1, h2 {
		font-size: inherit;
		margin: 0;
	}

	@media (max-width: 1023px) {
		h1 {
			display: none;
		}
	}

	.header {
		display: flex;
		justify-content: space-between;
		padding: 10px 5vw;
		gap: 10px;
		font-size: 20px;
		text-transform: uppercase;
		position: absolute;
		z-index: 100;
		top: 0;
		left: 0;
		right: 0;
		color: var(--primary-color);
		position: fixed;
	}

	.header__item {
		flex: 1 0 0;
	}

	@media(min-width: 1024px) {
		.header {
			background-color: rgba(255, 255, 255, 1);
			font-size: 30px;
		}

		.header.header--home {
			background-color: transparent;
			--nav-color: white;
		}
	}




	.header-title {
		display: none;
	}

	@media(min-width: 1024px) {
		.header-title {
			display: block;
		}

		.header.header--home .header-title {
			display: none;
		}
	}





	@media(max-width: 1023px) {
		.header-pagetitle {
			display: none;
		}
	}




	.nav-main {
		text-align: right;
		position: relative;
	}

	@media (min-width: 1024px) {
		.nav-main {
			overflow: hidden;
			max-height: var(--nav-height);
			transition: max-height 300ms ease-in-out;
		}

		.nav-main.nav-main--expanded {
			max-height: 100vh;
		}


		/* .nav-main:focus-within,
		.nav-main:hover {
			max-height: 100vh;
		}

		.nav-main:focus-within .nav-toggle,
		.nav-main:hover .nav-toggle {
			opacity: 0;
		}

		.nav-main:focus-within .nav-item,
		.nav-main:hover .nav-item {
			opacity: 1;
		} */
	}
</style>
