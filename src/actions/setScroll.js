import { scrollY } from '../stores.js';

export default function setScroll(node, params = {}) {
    let lastKnownScrollPosition = 0;
    let isScrolling = false;

    function handleScroll() {
        if(!isScrolling) {
            isScrolling = true;
            window.requestAnimationFrame(updateScrollPosition)
        }
    }

    function updateScrollPosition() {
        if(lastKnownScrollPosition == node.scrollTop) {
            isScrolling = false;
        } else {
            lastKnownScrollPosition = node.scrollTop;
            scrollY.update(y => lastKnownScrollPosition);
            window.requestAnimationFrame(updateScrollPosition);
        }
    }

    node.addEventListener('scroll', handleScroll, {passive: true});

    return {
        destroy() {
            node.removeEventListener('scroll', handleScroll, {passive: true});
        }
    };
}