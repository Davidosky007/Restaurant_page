(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(645),a=t.n(r),i=t(667),o=t.n(i),l=t(518),s=a()((function(n){return n[1]})),c=o()(l.Z);s.push([n.id,"\r\n\r\nbody {\r\n  background: linear-gradient(180deg, rgba(61, 61, 61, 0.4) 0%, rgba(61, 61, 61, 0.4) 96%),  url("+c+");\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  background-position: center;\r\n  object-fit: contain;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.nav_item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: -303px;\r\n}\r\n\r\n/* a:hover {\r\n  border-bottom: 3px solid #09f;\r\n  cursor: pointer;\r\n} */\r\n\r\n.menu_card {\r\n  display: none;\r\n}\r\n\r\n.initail_div {\r\n display: inline-block;\r\n justify-content: center;\r\n align-items: center;\r\n margin:0 auto;\r\n}\r\n\r\n.contact_page {\r\n  display: none;\r\n}\r\n\r\n.conz {\r\n  margin-top: ;\r\n}",""]);const d=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},518:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"33ffb69363115c3321f50023c64fc21c.jpg"},379:(n,e,t)=>{var r,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function o(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],a=0;a<n.length;a++){var l=n[a],s=e.base?l[0]+e.base:l[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var u=o(d),v={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(i[u].references++,i[u].updater(v)):i.push({identifier:d,updater:f(v,e),references:1}),r.push(d)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function u(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function v(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,m=0;function f(n,e){var t,r,a;if(e.singleton){var i=m++;t=p||(p=s(e)),r=u.bind(null,t,i,!1),a=u.bind(null,t,i,!0)}else t=s(e),r=v.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=o(t[r]);i[a].references--}for(var s=l(n,e),c=0;c<t.length;c++){var d=o(t[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=s}}}}},e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(426);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const a=document.getElementById("content");a.appendChild((()=>{const n=document.createElement("nav");return n.classList.add("navbar"),n.innerHTML='\n<nav class="navbar navbar-expand-lg navbar-dark nav_item container-fluid  ">\n  <a class="navbar-brand mr-6 " href="#"><h1 class="display-3">Foodiez</h1></a>\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n\n  <div class="collapse navbar-collapse" id="navbarColor03 d-flex">\n    <ul class="navbar-nav mr-auto d-flex">\n      <li class="nav-item active ml-5">\n        <a class="nav-link btn btn-outline-info" href="#home"><h4 id="home">Home</h4>\n          <span class="sr-only">(current)</span>\n        </a>\n      </li>\n      <li class="nav-item ml-5">\n      <a class="nav-link text-white btn btn-outline-info" href="menu"><h4 class="menu">Menu</h4></a>\n      </li>\n      <li class="nav-item ml-5">\n        <a class="nav-link text-white btn btn-outline-info" href="#"><h4 id="contact">Contact</h4></a>\n      </li>\n    </ul>\n    <form class="form-inline my-2 my-lg-0">\n      <input class="form-control mr-sm-2" type="text" placeholder="Search">\n      <button class="btn btn-info my-2 my-sm-0" type="submit">Search</button>\n    </form>\n  </div>\n</nav>\n\n',n})()),a.appendChild((()=>{const n=document.createElement("div");return n.classList.add("initail_div"),n.setAttribute("id","div_initial"),n.innerHTML='\n  <h1 class="display-4">Welcome to <span class="text-info">Foodiez</span></h1>\n  <h1 class="lead disply-5">Where you get the best of Nigerian local cuisines</h1>\n  <p class="lead">\n    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n  </p>\n',n})()),a.appendChild((()=>{const n=document.createElement("div");return n.setAttribute("id","menu"),n.classList.add("menu_card"),n.innerHTML='\n<div class="d-flex mx-auto">\n\n<div class="card text-white bg-primary mb-3 mr-5" style="max-width: 20rem;">\n  <div class="card-header">Breakfast</div>\n  <div class="card-body">\n  <div>Omelette</div>\n  <div>Coffee</div>\n  <div>Tea</div>\n  <div>Bread</div>\n  </div>\n</div>\n\n<div class="card text-white bg-primary mb-3 mr-5" style="max-width: 20rem;">\n  <div class="card-header">Lunch</div>\n  <div class="card-body">\n  <div>Burger</div>\n  <div>Pizza</div>\n  <div>Steak</div>\n  <div>Chicken panini</div> \n  </div>\n</div>\n\n<div class="card text-white bg-primary mb-3 mr-5" style="max-width: 20rem;">\n  <div class="card-header">Dinner</div>\n  <div class="card-body">\n  <div>Salad</div>\n  <div>Brown bread</div>\n  <div>Soup</div>\n  <div>White bread</div>\n  <div>Fried rice and chicken</div>\n  </div>\n</div>\n\n\n</div>\n\n\n',n})()),a.appendChild((()=>{const n=document.createElement("div");return n.setAttribute("id","form-div"),n.classList.add("contact_page"),n.innerHTML='\n  <form action="" id="myForm" class="mx-auto">\n   <h1>Contact Us</h1>\n      <div class="form-group">\n        <label for="name">Name</label>\n        <input type="text" class="form-control text-field" id="name" required/>\n      </div>\n      <div class="form-group">\n        <label for="author">Email</label>\n        <input type="email" class="form-control" id="author" required/>\n      </div>\n      <div class="form-group">\n      <label for="exampleTextarea">Example textarea</label>\n      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>\n    </div>\n      <input type="submit" value="submit" class="btn btn-info btn-lg btn-block" />\n    </form>\n  ',n})()),document.querySelector("#content").addEventListener("click",(n=>{n.preventDefault(),console.log(n.target);const e=n.target,t=document.querySelector(".navbar"),r=document.querySelector("#div_initial"),a=document.querySelector("#menu"),i=document.querySelector("#form-div");"home"===e.id?(r.style.display="inherit",a.style.display="none",i.style.display="none"):"menu"===e.className?(r.style.display="none",a.style.display="flex",i.style.display="none"):"contact"===e.id&&(r.style.display="none",a.style.display="none",t.style.display="flex",i.style.display="flex")}))})()})();