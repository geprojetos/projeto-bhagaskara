function openMenuMobile(){var e=document.documentElement;document.querySelector(".submenu__open").onclick=function(){e.classList.add("menu__active")},document.querySelector(".submenu__close").onclick=function(){e.classList.remove("menu__active")},e.onclick=function(n){n.target===e&&e.classList.remove("menu__active")}}function menuFixed(){var e=document.querySelector(".info"),n=document.querySelector(".submenu__nav");e.getBoundingClientRect().top<-50?n.classList.add("menu__fixed--top"):n.classList.remove("menu__fixed--top")}function activeMenuFixed(){var e=window.innerWidth,n=document.querySelector(".submenu__nav");e>768?menuFixed():n.classList.remove("menu__fixed--top")}openMenuMobile();