document.addEventListener('DOMContentLoaded', function() {
    if (typeof hljs.highlightAll === 'function') {
        hljs.highlightAll();
    } else {
        hljs.initHighlightingOnLoad();
    }
    if (typeof hljs.initLineNumbersOnLoad === 'function') {
        hljs.initLineNumbersOnLoad();
    }
});
