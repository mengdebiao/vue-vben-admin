function n(n,o){if("undefined"==typeof window)return 0;var e=o?"scrollTop":"scrollLeft",t=n===window,i=t?n[o?"pageYOffset":"pageXOffset"]:n[e];return t&&"number"!=typeof i&&(i=window.document.documentElement[e]),i}function o(n,o,e,t){var i=e-o;return(n/=t/2)<1?i/2*n*n*n+o:i/2*((n-=2)*n*n+2)+o}function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.getContainer,r=void 0===i?function(){return window}:i,a=t.callback,f=t.duration,u=void 0===f?450:f,w=r(),d=n(w,!0),c=Date.now(),l=function n(){var t=Date.now()-c,i=o(t>u?u:t,d,e,u);w===window?window.scrollTo(window.pageXOffset,i):w.scrollTop=i,t<u?requestAnimationFrame(n):"function"==typeof a&&a()};requestAnimationFrame(l)}export{n as g,e as s};