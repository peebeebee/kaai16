<script lang="ts">
	import { page } from '$app/stores';
    export let expanded: Boolean;
</script>

<ul class="nav-list" class:nav-list--expanded={expanded}>
    <li class="nav-list__item">
        <a sveltekit:prefetch
           class="nav-item"
           class:active={$page.path === '/loft'}
           on:click={() => expanded = false}
           href="/loft">
            Loft 16
        </a>
    </li>
    <li class="nav-list__item">
        <a sveltekit:prefetch
           class="nav-item"
           class:active={$page.path === '/event'}
           on:click={() => expanded = false}
           href="/event">
            Event Locatie
        </a>
    </li>
    <li class="nav-list__item">
        <a sveltekit:prefetch
           class="nav-item"
           class:active={$page.path === '/toekomst'}
           on:click={() => expanded = false}
           href="/toekomst">
            Toekomst
        </a>
    </li>
    <li class="nav-list__item nav-list__item--spacer">
        <a sveltekit:prefetch
           class="nav-item"
           class:active={$page.path === '/info'}
           on:click={() => expanded = false}
           href="/info">
           Info
        </a>
    </li>
</ul>

<style>
.nav-list {
    margin: 0;
    padding: 0;
    text-align: right;
}

.nav-list__item {
    display: block;
}

@media(max-width: 1023px) {
    .nav-list {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: calc(var(--nav-height) + 20px) 5vw 20px;
        z-index: -1;
        pointer-events: none;
        opacity: 1;
        background: white;
        transition: all 500ms cubic-bezier(0.47, 0, 0.75, 0.72);
        transform-origin: 100% 0%;
        clip-path: circle(0% at 95% 5%);
    }

    .nav-list.nav-list--expanded {
        pointer-events: all;
        opacity: 1;
        transform: translateX(0);
        clip-path: circle(200% at 95% 5%);
        transition: all 1052.433ms cubic-bezier(0.5, 1.28, 0.73, 0.31) 0ms;
    }
}

@media(min-width: 1024px) {
    .nav-list {
        pointer-events: none;
    }

    .nav-list.nav-list--expanded {
        pointer-events: all;
    }
}

.nav-item {
    color: inherit;
}

.nav-item:hover {
    text-decoration: none;
    color: var(--text-color);
}

@media(max-width: 1023px) {
    .nav-item {
        font-size: 30px;
        line-height: 1.5;
    }
}
</style>