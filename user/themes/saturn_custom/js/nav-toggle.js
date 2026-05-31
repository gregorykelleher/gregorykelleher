// Mobile navigation toggle. Replaces kube.min.js + jQuery (both removed
// from the asset pipeline) for the only interactive widget on the site.
// Behaviour mirrors the original kube navigation-toggle plugin so the CSS
// classes (.navigation-toggle-show, .navigation-target-show) keep working.
(function () {
    'use strict';

    var MOBILE_QUERY = '(max-width: 767px)';

    function init() {
        var toggle = document.querySelector('[data-tools="navigation-toggle"]');
        if (!toggle) return;

        var targetSelector = toggle.getAttribute('data-target') || '#navbar-1';
        var target = document.querySelector(targetSelector);
        if (!target) return;

        var mq = window.matchMedia(MOBILE_QUERY);

        function applyViewportState() {
            if (mq.matches) {
                toggle.style.display = 'block';
                toggle.classList.add('navigation-toggle-show');
                if (!target.classList.contains('navigation-target-show')) {
                    target.style.display = 'none';
                }
            } else {
                toggle.style.display = 'none';
                toggle.classList.remove('navigation-toggle-show');
                target.classList.remove('navigation-target-show');
                target.style.display = '';
            }
        }

        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (target.style.display === 'none') {
                target.style.display = '';
                target.classList.add('navigation-target-show');
            } else {
                target.style.display = 'none';
                target.classList.remove('navigation-target-show');
            }
        });

        if (mq.addEventListener) {
            mq.addEventListener('change', applyViewportState);
        } else if (mq.addListener) {
            mq.addListener(applyViewportState);
        }

        applyViewportState();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
