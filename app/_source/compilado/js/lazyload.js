function lazyload(){for(var t=document.querySelectorAll("img[data-src]:not([src])"),e=0;e<t.length;e++)t[e].getBoundingClientRect().top<window.innerHeight+300&&(t[e].src=t[e].getAttribute("data-src"))}