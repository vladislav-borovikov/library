!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire04be;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire04be=r);var a=r("3sd2r"),o=document.getElementById("searchingBooks"),d=document.getElementById("modalSearch"),c=document.getElementById("closrSearchModalBtn"),i=document.getElementById("tableSearch"),u=(0,a.getLibrary)();c.addEventListener("click",(function(){d.style.display="none",i.innerHTML=""})),o.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements.search.value.trim().toLowerCase();if(n||u){var t=[];u.forEach((function(e){return e.books.forEach((function(r){if(r.name.toLowerCase().includes(n)){var a={id:r.id,name:r.name,number_of_pages:r.number_of_pages,ganre:r.ganre,author:"".concat(e.author_last_name," ").concat(e.author_name," ").concat(e.author_surname," ")};t.push(a)}}))})),d.style.display="block",t.length?(i.innerHTML="<tr>\n            <td>Назва</td>\n            <td>Жанр</td>\n            <td>К-ть сторінок</td>\n            <td>Автор</td>\n            </tr>",t.forEach((function(e){return i.insertAdjacentHTML("beforeend",'<tr id="'.concat(e.id,'">\n            <td>').concat(e.name,"</td>\n            <td>").concat(e.ganre,"</td>\n            <td>").concat(e.number_of_pages," </td>\n            <td>").concat(e.author,"</td>\n          </tr>"))}))):i.innerHTML="<p>Нічого не знайдено </>"}}))}();
//# sourceMappingURL=index.90ecf34a.js.map
