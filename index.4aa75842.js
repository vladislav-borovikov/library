function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire04be;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire04be=r),r.register("2te9C",(function(t,n){e(t.exports,"default",(function(){return r}));const o=document.getElementById("bookCreationForm");function r(e){let t=o.children;for(let n of t)switch(n.name){case"bookNameInput":n.setAttribute("value",e.name);break;case"selectGanre":let t=n.children;for(let n of t)n.value==e.ganre&&n.setAttribute("selected","selected");break;case"numberOfPages":n.setAttribute("value",e.number_of_pages)}}})),r.register("44GL0",(function(t,n){e(t.exports,"default",(function(){return i}));var o=r("9jqFG");function i(e){return(0,o.default)(e).books.find((t=>t.id==e))}})),r.register("9jqFG",(function(t,n){e(t.exports,"default",(function(){return i}));let o=(0,r("8JP4i").getLibrary)();function i(e){return o.find((t=>t.books.find((t=>t.id==e))))}}));let i=(0,r("8JP4i").getGanre)();var a=function(){if(i){return i.map((e=>`<option value="${e}">${e}</option>`))}},l=r("2te9C"),d=r("44GL0");let u=document.getElementById("modal"),c=document.getElementById("infoSection"),s=document.getElementById("closrModalBtn");const f=document.getElementById("bookCreationForm");let b=document.getElementById("selectGanre"),m=document.getElementById("nameModal");c.addEventListener("click",(e=>{let t=e.target;switch(t.id){case"createBookBtn":f.setAttribute("data-id_author",t.parentElement.id),u.style.display="block",m.textContent="Додати книгу";break;case"changeBookBtn":f.setAttribute("data-id_book",t.parentElement.id),u.style.display="block",m.textContent="Редагувати книгу";let e=(0,d.default)(t.parentElement.id);(0,l.default)(e)}})),s.addEventListener("click",(e=>{u.style.display="none",f.removeAttribute("data-id_book"),f.removeAttribute("data-id_author")})),b&&b.insertAdjacentHTML("beforeend",a());
//# sourceMappingURL=index.4aa75842.js.map