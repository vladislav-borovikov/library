!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire04be;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire04be=n),n.register("b1xHZ",(function(e,t){var r,n,o,a;r=e.exports,n="nanoid",o=function(){return u},Object.defineProperty(r,n,{get:o,set:a,enumerable:!0,configurable:!0});var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}));var o=n("b1xHZ"),a=n("6c0jC"),u=n("3sd2r"),i=document.getElementById("authorsCreationForm"),d=document.getElementById("tableOfAuthor");i.addEventListener("submit",(function(e){if(e.preventDefault(),!i.dataset.id_author){var t=e.currentTarget.elements,r=t.formLastNameInput,n=t.formNameInput,f=t.formSurnameInput,l=t.formDateOfBirthInput,s={id:(0,o.nanoid)(5),author_last_name:r.value,author_name:n.value,author_surname:f.value,date_of_birth:l.value,books:[]},p=(0,u.getLibrary)();if(p)p.push(s),(0,u.postLibrary)(p);else{var c=[];c.push(s),(0,u.postLibrary)(c)}var m=new(0,a.default)(s);d.insertAdjacentHTML("beforeend",m.getAuthor()),i.reset()}}))}();
//# sourceMappingURL=index.df0017cb.js.map