var pause=!1;window.onscroll=function(){if(!pause){pause=!0,setTimeout(function(){pause=!1},200);for(var t=document.querySelectorAll("img[data-src]:not([src])"),e=0;e<t.length;e++)t[e].getBoundingClientRect().top<window.innerHeight+300&&(t[e].src=t[e].getAttribute("data-src"))}};