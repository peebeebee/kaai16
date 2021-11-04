<script lang="ts">
    import inView from '../actions/inView';
    let isInView;
</script>

<div class="content" class:content--in-view={isInView}
     use:inView={{ top: 50, bottom: 50 }}
     on:enter={() => isInView = true}
     on:exit={() => isInView = false}>
     <slot></slot>
</div>


<style>
.content {
	font-size: clamp(30px, 3vw, 60px);
    letter-spacing: 2.5px;
	color: var(--primary-color-contrast);
    /* height: calc(100% - 95px); */
    height: 100%;
    margin: 0 10vw 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 500ms ease-in-out,
                opacity 1000ms ease-in-out 250ms;
    transform: translateY(25%);
    opacity: 0;
}

.content :global(p) {
	line-height: 1.1;
}

.content.content--in-view {
    transform: translateY(0);
    opacity: 1;
}

@media (max-width: 1024px) {
    .content {
        transition: none;
    }
}
</style>