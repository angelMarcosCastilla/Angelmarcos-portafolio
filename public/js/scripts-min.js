"use strict";var menuToggle=function(t,e){var c=document.getElementById(t),n=document.getElementById(e);c&&n&&c.addEventListener("click",(function(){n.classList.toggle("menu--active"),c.classList.toggle("menu__icon--active")}))},$swtichtoggle=document.getElementById("switch");menuToggle("menu-icon","menu"),addEventListener("click",(function(t){t.target.closest(".switch")&&($swtichtoggle.classList.toggle("toggle-switch--active"),document.body.classList.toggle("dark"))}));