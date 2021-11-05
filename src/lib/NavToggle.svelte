<script lang="ts">
    export let expanded: Boolean;
</script>

<!--
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 45">
    <path d="M60 31.007V36H0v-4.993h60zm0-11.004v4.993H0v-4.993h60zM60 9v4.993H0V9h60z"/>
</svg>
-->

<button on:click
        type="button"
        aria-label="Toggle Navigatie"
        class="nav-toggle"
        class:nav-toggle--active={expanded}>
    <span class="nav-toggle__line nav-toggle__line--1"></span>
    <span class="nav-toggle__line nav-toggle__line--2"></span>
    <span class="nav-toggle__line nav-toggle__line--3"></span>

</button>

<style>
.nav-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 200ms opacity ease-out,
                200ms transform ease-out,
                200ms fill ease-out;
    opacity: 1;
    background: none;
    padding: 0;
    border: 0;
    margin-left: auto;
}

.nav-toggle .nav-toggle__line {
    width: 100%;
    background: var(--primary-color);
    transition: 100ms transform ease-in-out;
}



/*
.expanded .nav-main .nav-toggle {
    opacity: 0;
}

.nav-toggle path {
    fill: var(--primary-color);
}

.nav-toggle:hover path {
    fill: #000;
}
*/

@media(max-width: 1023px) {
    .nav-toggle {
        width: 60px;
    }

    .nav-toggle .nav-toggle__line {
        height: 5px;
        margin: 4px 0;
    }

    .nav-toggle.nav-toggle--active .nav-toggle__line--1 {
        transform: translate(4px, 12px) rotate(-45deg);
    }

    .nav-toggle.nav-toggle--active .nav-toggle__line--2 {
        transform: scale(0);
    }

    .nav-toggle.nav-toggle--active .nav-toggle__line--3 {
        transform: translate(4px, -12px) rotate(45deg);
    }
}

@media(min-width: 1024px) {
    .nav-toggle {
        width: 45px;
        height: var(--nav-height);
    }

    .nav-toggle .nav-toggle__line {
        height: 4px;
        margin: 2px 0;
    }

    .nav-toggle.nav-toggle--active .nav-toggle__line--1 {
        transform: translate(4px, 4px) rotate(-40deg);
    }

    .nav-toggle.nav-toggle--active .nav-toggle__line--2 {
        transform: scale(0);
    }

    .nav-toggle.nav-toggle--active .nav-toggle__line--3 {
        transform: translate(4px, -11px) rotate(40deg);
    }
}
</style>