var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire04be;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire04be=r);var a=r("8JP4i");let d=document.getElementById("searchingBooks"),o=document.getElementById("modalSearch"),l=document.getElementById("closrSearchModalBtn"),i=document.getElementById("tableSearch"),s=(0,a.getLibrary)();l.addEventListener("click",(()=>{o.style.display="none",i.innerHTML=""})),d.addEventListener("submit",(function(e){e.preventDefault();const{elements:{search:t}}=e.currentTarget;let n=t.value.trim().toLowerCase();if(n||s){let e=[];s.forEach((t=>t.books.forEach((r=>{if(r.name.toLowerCase().includes(n)){let n={id:r.id,name:r.name,number_of_pages:r.number_of_pages,ganre:r.ganre,author:`${t.author_last_name} ${t.author_name} ${t.author_surname} `};e.push(n)}})))),o.style.display="block",e.length?(i.innerHTML="<tr>\n            <td>Назва</td>\n            <td>Жанр</td>\n            <td>К-ть сторінок</td>\n            <td>Автор</td>\n            </tr>",e.forEach((e=>i.insertAdjacentHTML("beforeend",`<tr id="${e.id}">\n            <td>${e.name}</td>\n            <td>${e.ganre}</td>\n            <td>${e.number_of_pages} </td>\n            <td>${e.author}</td>\n          </tr>`)))):i.innerHTML="<p>Нічого не знайдено </>"}}));
//# sourceMappingURL=index.4acbf8b3.js.map
