function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(t,e,n){var i,o,r,f,u,a,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,r=o;return i=o=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(w,e),l?g(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function w(){var t=v();if(h(t))return T(t);u=setTimeout(w,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function T(t){return u=void 0,m&&i?g(t):(i=o=void 0,f)}function x(){var t=v(),n=h(t);if(i=arguments,o=this,a=t,n){if(void 0===u)return j(a);if(s)return u=setTimeout(w,e),g(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=b(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},x.flush=function(){return void 0===u?f:T(v())},x}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(t,e,{leading:i,maxWait:e,trailing:o})};const g=document.querySelector(".feedback-form");g.addEventListener("input",t(e)((function(t){localStorage.setItem("feedback-form-state",t.target.name)}),500)),g.addEventListener("submit",(function(t){t.preventDefault(),function(t){const{elements:e}=t,n=Array.from(e).filter((t=>!!t.name)).map((t=>{const{name:e,value:n}=t;return{name:e,value:n}}));console.log(n)}(g)}));
//# sourceMappingURL=03-feedback.2fabf0ee.js.map