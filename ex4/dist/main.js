!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){document.getElementById("drop_menu");var e="show",t=document.getElementById("drop_menu");document.getElementById("drop-arrow").addEventListener("click",function(n){t.classList.toggle(e)}),window.onclick=function(n){n.target.matches(".menu_drop_button_holder")||n.target.matches(".menu_drop_button")||t.classList.remove(e)};var n={slider_images:[{img:"./images/highway.jpg",title:"Christian Highway"},{img:"./images/paramount_ranch.jpg",title:"SoCal Mk7 at Paramount Ranch"},{img:"./images/gti_frontend.jpg",title:"GTI Frontend"},{img:"./images/roccos.jpg",title:"Roccos Rollout"},{img:"./images/bp_ach.jpg",title:"Brandon GTI on ACH"},{img:"./images/cb_night.jpg",title:"Christian Night Shot"},{img:"./images/bp_interior.jpg",title:"Brandon Driver View"}]},r=document.getElementsByClassName("img_preview"),i=document.getElementById("main_image"),o=document.getElementById("play_pause_btn"),a=0,c=!0,l=Array.from(document.getElementsByClassName("side_img")),s=setInterval(g,5e3);function g(){a>n.slider_images.length-1&&(a=0),u(a),a++}function u(e){for(var t=0;t<r.length;t++)e=m(t,e=d(e));i.style.backgroundImage="url("+r[2].src+")"}function m(e,t){return r[e].src=n.slider_images[t].img,++t}function d(e){return e>=n.slider_images.length?e%=n.slider_images.length:e<0&&(e=n.slider_images.length-Math.abs(e)),e}!function(){count=0;for(var e=0;e<r.length;e++)count=m(e,count);i.style.backgroundImage="url("+r[2].src+")"}(),o.addEventListener("click",function(){console.log(c),1==c?(clearInterval(s),c=!1):(c=!0,u(a++),a=d(a),s=setInterval(g,5e3))}),l.forEach(function(e){e.addEventListener("click",function(){clearInterval(s);var t=l.indexOf(e);u(a+=0==t||1==t?t-2:t-1),a=d(a),s=setInterval(g,5e3)})})}()}]);