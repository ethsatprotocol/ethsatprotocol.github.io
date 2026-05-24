(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,675819,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return i}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});function a(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,s(e));else t.set(r,s(o));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}},497104,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={DecodeError:function(){return w},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return g},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return a},execOnce:function(){return s},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return p},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return _}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,r=!1;return(...o)=>(r||(r=!0,t=e(...o)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>i.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function p(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&d(r))return o;if(!o)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return o}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class w extends Error{}class b extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},800921,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},973008,e=>{"use strict";let t=e.i(439508).base;e.s(["CHAIN",0,t,"CHAIN_NAME",0,"Base","DEXSCREENER_CHAIN",0,"base","EXPLORER_URL",0,"https://basescan.org","PROTOCOL_NAME",0,"Sat Protocol","RPC_URLS",0,["https://mainnet-preconf.base.org","https://mainnet.base.org"],"WETH_ADDRESS",0,"0x4200000000000000000000000000000000000006"])},959050,e=>{"use strict";var t=function(e,r){return(t=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,r)};function r(e,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function n(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r}function a(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}function s(e,t){return function(r,o){t(r,o,e)}}function i(e,t,r,o,n,a){function s(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var i,l=o.kind,c="getter"===l?"get":"setter"===l?"set":"value",p=!t&&e?o.static?e:e.prototype:null,u=t||(p?Object.getOwnPropertyDescriptor(p,o.name):{}),d=!1,h=r.length-1;h>=0;h--){var f={};for(var m in o)f[m]="access"===m?{}:o[m];for(var m in o.access)f.access[m]=o.access[m];f.addInitializer=function(e){if(d)throw TypeError("Cannot add initializers after decoration has completed");a.push(s(e||null))};var y=(0,r[h])("accessor"===l?{get:u.get,set:u.set}:u[c],f);if("accessor"===l){if(void 0===y)continue;if(null===y||"object"!=typeof y)throw TypeError("Object expected");(i=s(y.get))&&(u.get=i),(i=s(y.set))&&(u.set=i),(i=s(y.init))&&n.unshift(i)}else(i=s(y))&&("field"===l?n.unshift(i):u[c]=i)}p&&Object.defineProperty(p,o.name,u),d=!0}function l(e,t,r){for(var o=arguments.length>2,n=0;n<t.length;n++)r=o?t[n].call(e,r):t[n].call(e);return o?r:void 0}function c(e){return"symbol"==typeof e?e:"".concat(e)}function p(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function d(e,t,r,o){return new(r||(r=Promise))(function(n,a){function s(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,i)}l((o=o.apply(e,t||[])).next())})}function h(e,t){var r,o,n,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){var c=[i,l];if(r)throw TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(a=0)),a;)try{if(r=1,o&&(n=2&c[0]?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){a.label=c[1];break}if(6===c[0]&&a.label<n[1]){a.label=n[1],n=c;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(c);break}n[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{r=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}}var f=Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]};function m(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||f(t,e,r)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],o=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,a=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)s.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return s}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}function g(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var o=Array(e),n=0,t=0;t<r;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,n++)o[n]=a[s];return o}function v(e,t,r){if(r||2==arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function k(e){return this instanceof k?(this.v=e,this):new k(e)}function _(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,n=r.apply(e,t||[]),a=[];return o=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",function(e){return function(t){return Promise.resolve(t).then(e,c)}}),o[Symbol.asyncIterator]=function(){return this},o;function s(e,t){n[e]&&(o[e]=function(t){return new Promise(function(r,o){a.push([e,t,r,o])>1||i(e,t)})},t&&(o[e]=t(o[e])))}function i(e,t){try{var r;(r=n[e](t)).value instanceof k?Promise.resolve(r.value.v).then(l,c):p(a[0][2],r)}catch(e){p(a[0][3],e)}}function l(e){i("next",e)}function c(e){i("throw",e)}function p(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function x(e){var t,r;return t={},o("next"),o("throw",function(e){throw e}),o("return"),t[Symbol.iterator]=function(){return this},t;function o(o,n){t[o]=e[o]?function(t){return(r=!r)?{value:k(e[o](t)),done:!1}:n?n(t):t}:n}}function C(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=y(e),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(r){t[r]=e[r]&&function(t){return new Promise(function(o,n){var a,s,i;a=o,s=n,i=(t=e[r](t)).done,Promise.resolve(t.value).then(function(e){a({value:e,done:i})},s)})}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var W=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},j=function(e){return(j=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t})(e)};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r=j(e),o=0;o<r.length;o++)"default"!==r[o]&&f(t,e,r[o]);return W(t,e),t}function I(e){return e&&e.__esModule?e:{default:e}}function R(e,t,r,o){if("a"===r&&!o)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?o:"a"===r?o.call(e):o?o.value:t.get(e)}function S(e,t,r,o,n){if("m"===o)throw TypeError("Private method is not writable");if("a"===o&&!n)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?n.call(e,r):n?n.value=r:t.set(e,r),r}function E(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function T(e,t,r){if(null!=t){var o,n;if("object"!=typeof t&&"function"!=typeof t)throw TypeError("Object expected.");if(r){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");o=t[Symbol.asyncDispose]}if(void 0===o){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");o=t[Symbol.dispose],r&&(n=o)}if("function"!=typeof o)throw TypeError("Object not disposable.");n&&(o=function(){try{n.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:o,async:r})}else r&&e.stack.push({async:!0});return t}var q="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var o=Error(r);return o.name="SuppressedError",o.error=e,o.suppressed=t,o};function A(e){function t(t){e.error=e.hasError?new q(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,o=0;return function n(){for(;r=e.stack.pop();)try{if(!r.async&&1===o)return o=0,e.stack.push(r),Promise.resolve().then(n);if(r.dispose){var a=r.dispose.call(r.value);if(r.async)return o|=2,Promise.resolve(a).then(n,function(e){return t(e),n()})}else o|=1}catch(e){t(e)}if(1===o)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()}function N(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(e,r,o,n,a){return r?t?".jsx":".js":!o||n&&a?o+n+"."+a.toLowerCase()+"js":e}):e}let B={__extends:r,__assign:o,__rest:n,__decorate:a,__param:s,__esDecorate:i,__runInitializers:l,__propKey:c,__setFunctionName:p,__metadata:u,__awaiter:d,__generator:h,__createBinding:f,__exportStar:m,__values:y,__read:w,__spread:b,__spreadArrays:g,__spreadArray:v,__await:k,__asyncGenerator:_,__asyncDelegator:x,__asyncValues:C,__makeTemplateObject:P,__importStar:O,__importDefault:I,__classPrivateFieldGet:R,__classPrivateFieldSet:S,__classPrivateFieldIn:E,__addDisposableResource:T,__disposeResources:A,__rewriteRelativeImportExtension:N};e.s(["__addDisposableResource",0,T,"__assign",()=>o,"__asyncDelegator",0,x,"__asyncGenerator",0,_,"__asyncValues",0,C,"__await",0,k,"__awaiter",0,d,"__classPrivateFieldGet",0,R,"__classPrivateFieldIn",0,E,"__classPrivateFieldSet",0,S,"__createBinding",0,f,"__decorate",0,a,"__disposeResources",0,A,"__esDecorate",0,i,"__exportStar",0,m,"__extends",0,r,"__generator",0,h,"__importDefault",0,I,"__importStar",0,O,"__makeTemplateObject",0,P,"__metadata",0,u,"__param",0,s,"__propKey",0,c,"__read",0,w,"__rest",0,n,"__rewriteRelativeImportExtension",0,N,"__runInitializers",0,l,"__setFunctionName",0,p,"__spread",0,b,"__spreadArray",0,v,"__spreadArrays",0,g,"__values",0,y,"default",0,B])},838889,e=>{"use strict";var t=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "ready": {
      "qr_code": {
        "step1": {
          "description": "Add Ready to your home screen for faster access to your wallet.",
          "title": "Open the Ready app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ctrl": {
      "extension": {
        "step1": {
          "title": "Install the CTRL Wallet extension",
          "description": "We recommend pinning CTRL Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "meco": {
      "qr_code": {
        "step1": {
          "title": "Open the MeCo Wallet app",
          "description": "Put MeCo Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "anchorage_digital": {
      "extension": {
        "step1": {
          "title": "Install the Anchorage Digital extension",
          "description": "We recommend pinning Anchorage Digital to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Scan the QR code to login",
          "description": "Securely connect your organization's wallets to dApps with institutional-grade security."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you log in, click below to refresh the browser and load up the extension."
        }
      }
    }
  }
}
`;e.s(["en_US_default",0,t])},527420,e=>{"use strict";var t=e.i(266822),r=e.i(5007),o=e.i(987082),n=e.i(548915);function a(e){return!!("code"in e&&"number"==typeof e.code&&(e.code===r.TransactionRejectedRpcError.code||e.code===r.UserRejectedRequestError.code||e.code===r.WalletConnectSessionSettlementError.code||t.ExecutionRevertedError.nodeMessage.test(e.message)||5e3===e.code))}e.s(["fallback",0,function(e,t={}){let{key:r="fallback",name:s="Fallback",rank:i=!1,shouldThrow:l=a,retryCount:c,retryDelay:p}=t;return({chain:t,pollingInterval:a=4e3,timeout:u,...d})=>{let h=e,f=()=>{},m=(0,n.createTransport)({key:r,name:s,async request({method:e,params:r}){let o,n=async(a=0)=>{let s=h[a]({...d,chain:t,retryCount:0,timeout:u});try{let t=await s.request({method:e,params:r});return f({method:e,params:r,response:t,transport:s,status:"success"}),t}catch(i){if(f({error:i,method:e,params:r,transport:s,status:"error"}),l(i)||a===h.length-1||!(o??=h.slice(a+1).some(r=>{let{include:o,exclude:n}=r({chain:t}).config.methods||{};return o?o.includes(e):!n||!n.includes(e)})))throw i;return n(a+1)}};return n()},retryCount:c,retryDelay:p,type:"fallback"},{onResponse:e=>f=e,transports:h.map(e=>e({chain:t,retryCount:0}))});if(i){let e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,ping:n,sampleCount:a=10,timeout:s=1e3,transports:i,weights:l={}}){let{stability:c=.7,latency:p=.3}=l,u=[],d=async()=>{let l=await Promise.all(i.map(async t=>{let r,o,a=t({chain:e,retryCount:0,timeout:s}),i=Date.now();try{await (n?n({transport:a}):a.request({method:"net_listening"})),o=1}catch{o=0}finally{r=Date.now()}return{latency:r-i,success:o}}));u.push(l),u.length>a&&u.shift();let h=Math.max(...u.map(e=>Math.max(...e.map(({latency:e})=>e))));r(i.map((e,t)=>{let r=u.map(e=>e[t].latency),o=r.reduce((e,t)=>e+t,0)/r.length,n=u.map(e=>e[t].success),a=n.reduce((e,t)=>e+t,0)/n.length;return 0===a?[0,t]:[p*(1-o/h)+c*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>i[e])),await (0,o.wait)(t),d()};d()}({chain:t,interval:e.interval??a,onTransports:e=>h=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:h,weights:e.weights})}return m}}])},949664,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(934211)._(e.r(675819)),s=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,o=e.protocol||"",n=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let p=e.search||l&&`?${l}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||s.test(o))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),p&&"?"!==p[0]&&(p="?"+p),n=n.replace(/[?#]/g,encodeURIComponent),p=p.replace("#","%23"),`${o}${c}${n}${p}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},550906,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(154015);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,o)),t&&(n.current=a(t,o))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},895724,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let o=e.r(497104),n=e.r(381512);function a(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},88655,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},981218,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return w},useLinkStatus:function(){return g}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(934211),s=e.r(183480),i=a._(e.r(154015)),l=e.r(949664),c=e.r(518918),p=e.r(550906),u=e.r(497104),d=e.r(868387);e.r(800921);let h=e.r(411630),f=e.r(540004),m=e.r(895724),y=e.r(188176);function w(t){var r,o;let n,a,w,[g,v]=(0,i.useOptimistic)(f.IDLE_LINK_STATUS),k=(0,i.useRef)(null),{href:_,as:x,children:C,prefetch:P=null,passHref:W,replace:j,shallow:O,scroll:I,onClick:R,onMouseEnter:S,onTouchStart:E,legacyBehavior:T=!1,onNavigate:q,transitionTypes:A,ref:N,unstable_dynamicOnHover:B,...M}=t;n=C,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let z=i.default.useContext(c.AppRouterContext),L=!1!==P,D=!1!==P?null===(o=P)||"auto"===o?y.FetchStrategy.PPR:y.FetchStrategy.Full:y.FetchStrategy.PPR,$="string"==typeof(r=x||_)?r:(0,l.formatUrl)(r);if(T){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=i.default.Children.only(n)}let U=T?a&&"object"==typeof a&&a.ref:N,F=i.default.useCallback(e=>(null!==z&&(k.current=(0,f.mountLinkInstance)(e,$,z,D,L,v)),()=>{k.current&&((0,f.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,f.unmountPrefetchableInstance)(e)}),[L,$,z,D,v]),Q={ref:(0,p.useMergedRef)(F,U),onClick(t){T||"function"!=typeof R||R(t),T&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!z||t.defaultPrevented||function(t,r,o,n,a,s,l){if("u">typeof window){let c,{nodeName:p}=t.currentTarget;if("A"===p.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(320322);i.default.startTransition(()=>{u(r,n?"replace":"push",!1===a?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,o.current,l)})}}(t,$,k,j,I,q,A)},onMouseEnter(e){T||"function"!=typeof S||S(e),T&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),z&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){T||"function"!=typeof E||E(e),T&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),z&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,u.isAbsoluteUrl)($)?Q.href=$:T&&!W&&("a"!==a.type||"href"in a.props)||(Q.href=(0,d.addBasePath)($)),w=T?i.default.cloneElement(a,Q):(0,s.jsx)("a",{...M,...Q,children:n}),(0,s.jsx)(b.Provider,{value:g,children:w})}e.r(88655);let b=(0,i.createContext)(f.IDLE_LINK_STATUS),g=()=>(0,i.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},123746,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let o=e.r(154015),n="u"<typeof window,a=n?()=>{}:o.useLayoutEffect,s=n?()=>{}:o.useEffect;function i(e){let{headManager:t,reduceComponentsToState:r}=e;function i(){if(t&&t.mountedInstances){let e=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),i()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},361638,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return m},defaultHead:function(){return u}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(442576),s=e.r(934211),i=e.r(183480),l=s._(e.r(154015)),c=a._(e.r(123746)),p=e.r(634404);function u(){return[(0,i.jsx)("meta",{charSet:"utf-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(800921);let h=["name","httpEquiv","charSet","itemProp"];function f(e){let t,r,o,n;return e.reduce(d,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,o=new Set,n={},e=>{let a=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)o.has(r)?a=!1:o.add(r);else{let t=e.props[r],o=n[r]||new Set;("name"!==r||!s)&&o.has(t)?a=!1:(o.add(t),n[r]=o)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,l.useContext)(p.HeadManagerContext);return(0,i.jsx)(c.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},520147,(e,t,r)=>{"use strict";function o({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:a,objectFit:s}){let i=r?40*r:e,l=n?40*n:t,c=i&&l?`viewBox='0 0 ${i} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return o}})},535168,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return s}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},668804,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(800921);let o=e.r(310609),n=e.r(520147),a=e.r(535168),s=["-moz-initial","fill","none","scale-down",void 0];function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:p=!1,preload:u=!1,loading:d,className:h,quality:f,width:m,height:y,fill:w=!1,style:b,overrideSrc:g,onLoad:v,onLoadingComplete:k,placeholder:_="empty",blurDataURL:x,fetchPriority:C,decoding:P="async",layout:W,objectFit:j,objectPosition:O,lazyBoundary:I,lazyRoot:R,...S},E){var T;let q,A,N,{imgConf:B,showAltText:M,blurComplete:z,defaultLoader:L}=E,D=B||a.imageConfigDefault;if("allSizes"in D)q=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),r=D.qualities?.sort((e,t)=>e-t);q={...D,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let $=S.loader||L;delete S.loader,delete S.srcSet;let U="__next_img_default"in $;if(U){if("custom"===q.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=$;$=t=>{let{config:r,...o}=t;return e(o)}}if(W){"fill"===W&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[W];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[W];r&&!t&&(t=r)}let F="",Q=l(m),K=l(y);if((T=e)&&"object"==typeof T&&(i(T)||void 0!==T.src)){let t=i(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(A=t.blurWidth,N=t.blurHeight,x=x||t.blurDataURL,F=t.src,!w)if(Q||K){if(Q&&!K){let e=Q/t.width;K=Math.round(t.height*e)}else if(!Q&&K){let e=K/t.height;Q=Math.round(t.width*e)}}else Q=t.width,K=t.height}let G=!p&&!u&&("lazy"===d||void 0===d);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,G=!1),q.unoptimized&&(r=!0),U&&!q.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let V=l(f),Y=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:O}:{},M?{}:{color:"transparent"},b),X=z||"empty"===_?null:"blur"===_?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:Q,heightInt:K,blurWidth:A,blurHeight:N,blurDataURL:x||"",objectFit:Y.objectFit})}")`:`url("${_}")`,Z=s.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,H=X?{backgroundSize:Z,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},J=function({config:e,src:t,unoptimized:r,width:n,quality:a,sizes:s,loader:i}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,o.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let o=new URLSearchParams(t.slice(r+1));o.get("dpl")||(o.append("dpl",e),t=t.slice(0,r)+"?"+o.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},r,o){if(o){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(o);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,s),p=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((r,o)=>`${i({config:e,src:t,quality:a,width:r})} ${"w"===c?r:o+1}${c}`).join(", "),src:i({config:e,src:t,quality:a,width:l[p]})}}({config:q,src:e,unoptimized:r,width:Q,quality:V,sizes:t,loader:$}),ee=G?"lazy":d;return{props:{...S,loading:ee,fetchPriority:C,width:Q,height:K,decoding:P,className:h,style:{...Y,...H},sizes:J.sizes,srcSet:J.srcSet,src:g||J.src},meta:{unoptimized:r,preload:u||p,placeholder:_,fill:w}}}},590422,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let o=e.r(442576)._(e.r(154015)),n=e.r(535168),a=o.default.createContext(n.imageConfigDefault)},791309,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return o}});let o=e.r(442576)._(e.r(154015)).default.createContext(null)},355219,(e,t,r)=>{"use strict";function o(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return o}})},917771,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let o=e.r(355219),n=e.r(310609);function a({config:e,src:t,width:r,quality:s}){let i=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),o=r.get("dpl");if(o){i=o,r.delete("dpl");let n=r.toString();t=t.slice(0,e)+(n?"?"+n:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,o.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&i?`&dpl=${i}`:""}`}a.__next_img_default=!0;let s=a},757919,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let o=e.r(442576),n=e.r(934211),a=e.r(183480),s=n._(e.r(154015)),i=o._(e.r(108183)),l=o._(e.r(361638)),c=e.r(668804),p=e.r(535168),u=e.r(590422);e.r(800921);let d=e.r(791309),h=o._(e.r(917771)),f=e.r(550906),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function y(e,t,r,o,n,a,s){let i=e?.src;e&&e["data-loaded-src"]!==i&&(e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}o?.current&&o.current(e)}}))}function w(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,s.forwardRef)(({src:e,srcSet:t,sizes:r,height:o,width:n,decoding:i,className:l,style:c,fetchPriority:p,placeholder:u,loading:d,unoptimized:h,fill:m,onLoadRef:b,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:k,sizesInput:_,onLoad:x,onError:C,...P},W)=>{let j=(0,s.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&y(e,u,b,g,v,h,_))},[e,u,b,g,v,C,h,_]),O=(0,f.useMergedRef)(W,j);return(0,a.jsx)("img",{...P,...w(p),loading:d,width:n,height:o,decoding:i,"data-nimg":m?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:O,onLoad:e=>{y(e.currentTarget,u,b,g,v,h,_)},onError:e=>{k(!0),"empty"!==u&&v(!0),C&&C(e)}})});function g({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...w(t.fetchPriority)};return e&&i.default.preload?(i.default.preload(t.src,r),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(d.RouterContext),o=(0,s.useContext)(u.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=m||o||p.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"u"<typeof window?o?.localPatterns:e.localPatterns}},[o]),{onLoad:i,onLoadingComplete:l}=e,f=(0,s.useRef)(i);(0,s.useEffect)(()=>{f.current=i},[i]);let y=(0,s.useRef)(l);(0,s.useEffect)(()=>{y.current=l},[l]);let[w,v]=(0,s.useState)(!1),[k,_]=(0,s.useState)(!1),{props:x,meta:C}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:n,blurComplete:w,showAltText:k});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{...x,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:f,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:_,sizesInput:e.sizes,ref:t}),C.preload?(0,a.jsx)(g,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},382910,e=>{e.v(t=>Promise.all(["static/chunks/0riq3z8r-gt_a.js"].map(t=>e.l(t))).then(()=>t(561563)))},627278,e=>{e.v(e=>Promise.resolve().then(()=>e(48254)))},887342,e=>{e.v(t=>Promise.all(["static/chunks/0gcn~lcmgsqut.js","static/chunks/0_ahtcfti5nxp.js","static/chunks/001pj2_uxviaw.js"].map(t=>e.l(t))).then(()=>t(66065)))},212719,e=>{e.v(t=>Promise.all(["static/chunks/0g_.hnwkm8le-.js","static/chunks/0-7z.3wpi5a8p.js","static/chunks/0upr4rdg664bv.js"].map(t=>e.l(t))).then(()=>t(531440)))},658459,e=>{e.v(t=>Promise.all(["static/chunks/0si-qf~1b8ssm.js"].map(t=>e.l(t))).then(()=>t(301439)))},530757,e=>{e.v(t=>Promise.all(["static/chunks/0-fptfh3hgzee.js"].map(t=>e.l(t))).then(()=>t(135314)))},898309,e=>{e.v(t=>Promise.all(["static/chunks/0bo1g6xudzl~4.js","static/chunks/03mwt2optippf.js"].map(t=>e.l(t))).then(()=>t(786126)))},902541,e=>{e.v(t=>Promise.all(["static/chunks/0cxgax_83mwy~.js"].map(t=>e.l(t))).then(()=>t(294411)))},119775,e=>{e.v(t=>Promise.all(["static/chunks/0z1t2ascu2fh0.js"].map(t=>e.l(t))).then(()=>t(263336)))},38689,e=>{e.v(t=>Promise.all(["static/chunks/126l6m4gfjx8i.js"].map(t=>e.l(t))).then(()=>t(200569)))},684485,e=>{e.v(t=>Promise.all(["static/chunks/039o7h2fua-pr.js"].map(t=>e.l(t))).then(()=>t(200820)))},517365,e=>{e.v(t=>Promise.all(["static/chunks/0ip2qxsm_9ehe.js"].map(t=>e.l(t))).then(()=>t(89286)))},562761,e=>{e.v(t=>Promise.all(["static/chunks/0iaz3e-2lijt8.js"].map(t=>e.l(t))).then(()=>t(989027)))},250763,e=>{e.v(t=>Promise.all(["static/chunks/06_-qbgf_e~qj.js"].map(t=>e.l(t))).then(()=>t(836340)))},374138,e=>{e.v(t=>Promise.all(["static/chunks/0dtp5qyb1sbfp.js"].map(t=>e.l(t))).then(()=>t(960921)))},206484,e=>{e.v(t=>Promise.all(["static/chunks/0k4r16oufw2iy.js"].map(t=>e.l(t))).then(()=>t(278112)))},918942,e=>{e.v(t=>Promise.all(["static/chunks/0rxpnf9d_208k.js"].map(t=>e.l(t))).then(()=>t(125830)))},218266,e=>{e.v(t=>Promise.all(["static/chunks/0moqxqa8a8hey.js"].map(t=>e.l(t))).then(()=>t(702299)))},143083,e=>{e.v(t=>Promise.all(["static/chunks/0vrdp5osmeu1~.js"].map(t=>e.l(t))).then(()=>t(988765)))},939893,e=>{e.v(t=>Promise.all(["static/chunks/0-u3-m0ogh0-t.js"].map(t=>e.l(t))).then(()=>t(743692)))},169088,e=>{e.v(t=>Promise.all(["static/chunks/0y3s.yq4oxab6.js"].map(t=>e.l(t))).then(()=>t(283445)))},733234,e=>{e.v(t=>Promise.all(["static/chunks/0on9_ziu7o84k.js"].map(t=>e.l(t))).then(()=>t(6262)))},351310,e=>{e.v(t=>Promise.all(["static/chunks/0zat18qgs2y~-.js"].map(t=>e.l(t))).then(()=>t(467780)))},92190,e=>{e.v(t=>Promise.all(["static/chunks/0~s5rcn4bz81~.js"].map(t=>e.l(t))).then(()=>t(589758)))},683947,e=>{e.v(t=>Promise.all(["static/chunks/0tnvsqcy5iwdy.js"].map(t=>e.l(t))).then(()=>t(513250)))},688202,e=>{e.v(t=>Promise.all(["static/chunks/14.pvrj~fov2-.js"].map(t=>e.l(t))).then(()=>t(364646)))},161066,e=>{e.v(t=>Promise.all(["static/chunks/0cfkm-wvrin_2.js"].map(t=>e.l(t))).then(()=>t(188649)))},266364,e=>{e.v(t=>Promise.all(["static/chunks/15w-kfqbyqx-4.js"].map(t=>e.l(t))).then(()=>t(283556)))},246160,e=>{e.v(t=>Promise.all(["static/chunks/0dqp7yz2va~1z.js"].map(t=>e.l(t))).then(()=>t(106638)))},433666,e=>{e.v(t=>Promise.all(["static/chunks/07zt0th~x1-cn.js"].map(t=>e.l(t))).then(()=>t(794966)))},133738,e=>{e.v(t=>Promise.all(["static/chunks/0bsvfkk-ik1xc.js"].map(t=>e.l(t))).then(()=>t(115999)))},748659,e=>{e.v(t=>Promise.all(["static/chunks/0r74ukx9vm~lu.js"].map(t=>e.l(t))).then(()=>t(257215)))},839419,e=>{e.v(t=>Promise.all(["static/chunks/0v9o0hp8-u.1-.js"].map(t=>e.l(t))).then(()=>t(776458)))},274091,e=>{e.v(t=>Promise.all(["static/chunks/0vla-u15gcaht.js"].map(t=>e.l(t))).then(()=>t(477022)))},471056,e=>{e.v(t=>Promise.all(["static/chunks/0~ci0ua63u~75.js"].map(t=>e.l(t))).then(()=>t(255983)))},779157,e=>{e.v(t=>Promise.all(["static/chunks/0t6l9skv_0h6y.js"].map(t=>e.l(t))).then(()=>t(707967)))},192078,e=>{e.v(t=>Promise.all(["static/chunks/0de4s~c190-aw.js"].map(t=>e.l(t))).then(()=>t(898375)))},982436,e=>{e.v(t=>Promise.all(["static/chunks/1203yhin37y43.js"].map(t=>e.l(t))).then(()=>t(785895)))},44654,e=>{e.v(t=>Promise.all(["static/chunks/09ce4xet24vyl.js"].map(t=>e.l(t))).then(()=>t(377529)))},198708,e=>{e.v(t=>Promise.all(["static/chunks/0br8hyvz5ihk0.js"].map(t=>e.l(t))).then(()=>t(4756)))},638016,e=>{e.v(t=>Promise.all(["static/chunks/1352e9hw_tqn2.js"].map(t=>e.l(t))).then(()=>t(913906)))},507983,e=>{e.v(t=>Promise.all(["static/chunks/0gr~~1i40qrsf.js"].map(t=>e.l(t))).then(()=>t(862871)))},191865,e=>{e.v(t=>Promise.all(["static/chunks/0j0zc80zfieop.js"].map(t=>e.l(t))).then(()=>t(859207)))},483817,e=>{e.v(t=>Promise.all(["static/chunks/05xn--x3use0t.js"].map(t=>e.l(t))).then(()=>t(445868)))},162205,e=>{e.v(t=>Promise.all(["static/chunks/0j6vci.nv9tp3.js"].map(t=>e.l(t))).then(()=>t(888166)))},224101,e=>{e.v(t=>Promise.all(["static/chunks/0k4fknktmjwqo.js"].map(t=>e.l(t))).then(()=>t(123398)))},695757,e=>{e.v(t=>Promise.all(["static/chunks/047glav2u~t02.js"].map(t=>e.l(t))).then(()=>t(359052)))},550116,e=>{e.v(t=>Promise.all(["static/chunks/071k4dedsgvoy.js"].map(t=>e.l(t))).then(()=>t(725539)))},771952,e=>{e.v(t=>Promise.all(["static/chunks/0_4lste5g_o_f.js"].map(t=>e.l(t))).then(()=>t(570226)))},558981,e=>{e.v(t=>Promise.all(["static/chunks/0k5ia0sk0ty6n.js"].map(t=>e.l(t))).then(()=>t(628654)))},228731,e=>{e.v(t=>Promise.all(["static/chunks/17xggx-fn6q6a.js"].map(t=>e.l(t))).then(()=>t(953108)))},601938,e=>{e.v(t=>Promise.all(["static/chunks/0__7ijz-pqmpp.js"].map(t=>e.l(t))).then(()=>t(927993)))},458639,e=>{e.v(t=>Promise.all(["static/chunks/0xc_7l0v~4lek.js"].map(t=>e.l(t))).then(()=>t(403053)))},265043,e=>{e.v(t=>Promise.all(["static/chunks/0rnxwbj914_64.js"].map(t=>e.l(t))).then(()=>t(30809)))},272773,e=>{e.v(t=>Promise.all(["static/chunks/0w481l7w8qby_.js"].map(t=>e.l(t))).then(()=>t(407053)))},897069,e=>{e.v(t=>Promise.all(["static/chunks/00q8.3p1ogg_l.js"].map(t=>e.l(t))).then(()=>t(138128)))},681494,e=>{e.v(t=>Promise.all(["static/chunks/01.ik.__myrpz.js"].map(t=>e.l(t))).then(()=>t(251890)))},423535,e=>{e.v(t=>Promise.all(["static/chunks/05_qp0951i9i2.js"].map(t=>e.l(t))).then(()=>t(501273)))},514277,e=>{e.v(t=>Promise.all(["static/chunks/0-wh_c.el71pn.js"].map(t=>e.l(t))).then(()=>t(195445)))},710795,e=>{e.v(t=>Promise.all(["static/chunks/0bw8jvte28zvp.js"].map(t=>e.l(t))).then(()=>t(603426)))},210836,e=>{e.v(t=>Promise.all(["static/chunks/05ajod8sl5in..js"].map(t=>e.l(t))).then(()=>t(517177)))},861723,e=>{e.v(t=>Promise.all(["static/chunks/0bo3ft8j7e8o3.js"].map(t=>e.l(t))).then(()=>t(640706)))},223675,e=>{e.v(t=>Promise.all(["static/chunks/0ysuv81n8~xfh.js"].map(t=>e.l(t))).then(()=>t(34330)))},11722,e=>{e.v(t=>Promise.all(["static/chunks/02hqyfs0g8qit.js"].map(t=>e.l(t))).then(()=>t(553992)))},906123,e=>{e.v(t=>Promise.all(["static/chunks/0e754nh1qc82h.js"].map(t=>e.l(t))).then(()=>t(936948)))},379564,e=>{e.v(t=>Promise.all(["static/chunks/02g08m~insp.b.js"].map(t=>e.l(t))).then(()=>t(209624)))},895107,e=>{e.v(t=>Promise.all(["static/chunks/0.uvue0e5sizd.js"].map(t=>e.l(t))).then(()=>t(456100)))},897866,e=>{e.v(t=>Promise.all(["static/chunks/0.2mm.pf6nvw-.js"].map(t=>e.l(t))).then(()=>t(187462)))},886829,e=>{e.v(t=>Promise.all(["static/chunks/0y16gykh4n_lh.js"].map(t=>e.l(t))).then(()=>t(683468)))},594758,e=>{e.v(t=>Promise.all(["static/chunks/0ca2lmzylw59u.js"].map(t=>e.l(t))).then(()=>t(149346)))},754477,e=>{e.v(t=>Promise.all(["static/chunks/13ocb2p2k24ff.js"].map(t=>e.l(t))).then(()=>t(467288)))},764792,e=>{e.v(t=>Promise.all(["static/chunks/0k07i7v_2q9t7.js"].map(t=>e.l(t))).then(()=>t(44054)))},583916,e=>{e.v(t=>Promise.all(["static/chunks/0fpdw_.1tdmbl.js"].map(t=>e.l(t))).then(()=>t(453931)))},471890,e=>{e.v(t=>Promise.all(["static/chunks/11pwnem.v33vo.js"].map(t=>e.l(t))).then(()=>t(705550)))},614088,e=>{e.v(t=>Promise.all(["static/chunks/0g1uypehztx68.js"].map(t=>e.l(t))).then(()=>t(316972)))},973527,e=>{e.v(t=>Promise.all(["static/chunks/0nc0rw9ixu_zc.js"].map(t=>e.l(t))).then(()=>t(465344)))},862146,e=>{e.v(t=>Promise.all(["static/chunks/04sb~5bec7hn8.js"].map(t=>e.l(t))).then(()=>t(16592)))},806860,e=>{e.v(t=>Promise.all(["static/chunks/0sm5e88a9noo9.js"].map(t=>e.l(t))).then(()=>t(306528)))},393021,e=>{e.v(t=>Promise.all(["static/chunks/09~725tgmltlm.js"].map(t=>e.l(t))).then(()=>t(60701)))},933703,e=>{e.v(t=>Promise.all(["static/chunks/0nmi~ib3l_o~..js"].map(t=>e.l(t))).then(()=>t(369897)))},494973,e=>{e.v(t=>Promise.all(["static/chunks/0scnk1g93gfa4.js"].map(t=>e.l(t))).then(()=>t(236431)))},622347,e=>{e.v(t=>Promise.all(["static/chunks/10qzec7umn3db.js"].map(t=>e.l(t))).then(()=>t(736156)))},19905,e=>{e.v(t=>Promise.all(["static/chunks/0wj4c7m5gvpmy.js","static/chunks/0puw5n.3-epw3.js","static/chunks/0upr4rdg664bv.js"].map(t=>e.l(t))).then(()=>t(751026)))},962270,e=>{e.v(t=>Promise.all(["static/chunks/0zs9g0wqgc5.6.js","static/chunks/05m_~r4f-zd2u.js"].map(t=>e.l(t))).then(()=>t(801120)))},591958,e=>{e.v(t=>Promise.all(["static/chunks/03khb-j7ib0e0.js"].map(t=>e.l(t))).then(()=>t(567796)))},455853,e=>{e.v(t=>Promise.all(["static/chunks/10s5vj_qtdpx-.js"].map(t=>e.l(t))).then(()=>t(638807)))},705505,e=>{e.v(t=>Promise.all(["static/chunks/0k2k20n8u6x.w.js"].map(t=>e.l(t))).then(()=>t(914729)))},162640,e=>{e.v(t=>Promise.all(["static/chunks/108jg7vi8~dia.js"].map(t=>e.l(t))).then(()=>t(311322)))},498339,e=>{e.v(t=>Promise.all(["static/chunks/053kjh.b0l2r6.js"].map(t=>e.l(t))).then(()=>t(980094)))},226789,e=>{e.v(t=>Promise.all(["static/chunks/17r-t3itbgzvp.js"].map(t=>e.l(t))).then(()=>t(790236)))},133487,e=>{e.v(t=>Promise.all(["static/chunks/0~6xf-jggbaec.js"].map(t=>e.l(t))).then(()=>t(172795)))},327224,e=>{e.v(t=>Promise.all(["static/chunks/0z1.h17i~y1m2.js"].map(t=>e.l(t))).then(()=>t(379752)))},36658,e=>{e.v(t=>Promise.all(["static/chunks/151qk93u85eq9.js"].map(t=>e.l(t))).then(()=>t(469771)))}]);