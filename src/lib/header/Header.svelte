<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="header">
	<div class="header__item">
		<h2>
		{#if $page.path === '/loft'}Loft 16{/if}
		{#if $page.path === '/event'}Event locatie{/if}
		{#if $page.path === '/toekomst'}Toekomst{/if}
		{#if $page.path === '/info'}Info{/if}
		</h2>
	</div>
	<div class="header__item">
		<h1>
			<a href="/">K16</a>
		</h1>
	</div>
	<div class="header__item">
		<nav role="navigation" class="nav-main">
			<svg class="nav-toggle" xmlns="http://www.w3.org/2000/svg" width="60" height="45">
				<path d="M60 31.007V36H0v-4.993h60zm0-11.004v4.993H0v-4.993h60zM60 9v4.993H0V9h60z"/>
			</svg>
			<ul class="nav-list">
				<li class="nav-list__item">
					<a sveltekit:prefetch
					   class="nav-item"
					   class:active={$page.path === '/loft'}
					   href="/loft">
						Loft 16
					</a>
				</li>
				<li class="nav-list__item">
					<a sveltekit:prefetch
					   class="nav-item"
					   class:active={$page.path === '/event'}
					   href="/event">
						Event Locatie
					</a>
				</li>
				<li class="nav-list__item">
					<a sveltekit:prefetch
					   class="nav-item"
					   class:active={$page.path === '/toekomst'}
					   href="/toekomst">
						Toekomst
					</a>
				</li>
				<li class="nav-list__item nav-list__item--spacer">
					<a sveltekit:prefetch
					   class="nav-item"
					   class:active={$page.path === '/info'}
					   href="/info">
					   Info
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
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

	.header {
		display: flex;
		justify-content: space-between;
		padding: 20px 5vw;
		gap: 20px;
		font-size: 46px;
		text-transform: uppercase;
		position: absolute;
		z-index: 100;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgba(255, 255, 255, 0.3);
		background-color: rgba(255, 255, 255, 1);
		color: var(--primary-color);
	}

	.header__item {
		flex: 1 0 0;
	}

	.nav-main {
		text-align: right;
		position: relative;
		overflow: hidden;
		max-height: 60px;
		transition: max-height 300ms ease-in-out;
	}

	.nav-list {
		margin: 0;
		padding: 0;
		text-align: right;
	}

	.nav-list__item {
		display: block;
	}

	.nav-item {
		opacity: 0;
		transition: 200ms opacity 100ms ease-out;
	}

	.nav-toggle {
		display: inline-block;
		position: absolute;
		right: 0;
		top: 0;
		transition: 200ms opacity ease-out,
                    200ms transform ease-out,
					200ms fill ease-out;
        opacity: 1;
		margin: 5px;
		pointer-events: none;

	}

	.nav-toggle path {
		fill: var(--primary-color);
	}

	.nav-toggle:hover path {
		fill: #000;
	}


	.nav-main:focus-within,
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
	}
</style>
