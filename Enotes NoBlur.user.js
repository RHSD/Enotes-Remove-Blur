// ==UserScript==
// @name         Enotes No Paywall
// @version 1.0
// @description  Removes enotes blur on paywalled content.
// @author       RHSD
// @match https://www.enotes.com/*
// ==/UserScript==

[].forEach.call(document.querySelectorAll('div'), function(el) {
    el.style.color = '#282828';
    el.style.textShadow = 'none'; // removes pseudo blur
    el.style.filter = 'none'; //removes blur filter
    el.style['user-select'] = 'auto';
    el.style['-moz-user-select'] = 'auto';
    el.style['-webkit-user-select'] = 'auto'; //removes selection block
    el.style['-ms-user-select'] = 'auto';
    el.style['pointer-events'] = 'visiblePainted'; //allows pointer events
    el.style.cursor = 'auto'; //sets cursor from default to auto
});