if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),d={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts("fallback-kF1p9aA_fj_1IlK9xIwsq.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/chunks/172-b4e7b552273dd6d2.js",revision:"b4e7b552273dd6d2"},{url:"/_next/static/chunks/229-944fcab848bbee33.js",revision:"944fcab848bbee33"},{url:"/_next/static/chunks/277-2c4e51c685068799.js",revision:"2c4e51c685068799"},{url:"/_next/static/chunks/289-ad0198dc0f3b510f.js",revision:"ad0198dc0f3b510f"},{url:"/_next/static/chunks/31664189-59987f087d567f41.js",revision:"59987f087d567f41"},{url:"/_next/static/chunks/372-56310d186dd93e6b.js",revision:"56310d186dd93e6b"},{url:"/_next/static/chunks/38-1cb934a96ad728fe.js",revision:"1cb934a96ad728fe"},{url:"/_next/static/chunks/41-18fa69a294d035e0.js",revision:"18fa69a294d035e0"},{url:"/_next/static/chunks/502-076b86964defb78a.js",revision:"076b86964defb78a"},{url:"/_next/static/chunks/544-e391a2f586c1d8b9.js",revision:"e391a2f586c1d8b9"},{url:"/_next/static/chunks/61-fa8f8a3ee44865aa.js",revision:"fa8f8a3ee44865aa"},{url:"/_next/static/chunks/654-344a751ec132626c.js",revision:"344a751ec132626c"},{url:"/_next/static/chunks/737-a5a23ea0d45f1a9c.js",revision:"a5a23ea0d45f1a9c"},{url:"/_next/static/chunks/75fc9c18-9881522b69bd8a4f.js",revision:"9881522b69bd8a4f"},{url:"/_next/static/chunks/779-f063c6c43372798c.js",revision:"f063c6c43372798c"},{url:"/_next/static/chunks/908-a56444bb5aaa6d8c.js",revision:"a56444bb5aaa6d8c"},{url:"/_next/static/chunks/ae51ba48-9207c7ae54ff4554.js",revision:"9207c7ae54ff4554"},{url:"/_next/static/chunks/d64684d8-bca2504790d31676.js",revision:"bca2504790d31676"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-f506b768337b37eb.js",revision:"f506b768337b37eb"},{url:"/_next/static/chunks/pages/404-0761365b197f56a7.js",revision:"0761365b197f56a7"},{url:"/_next/static/chunks/pages/_app-b3732636a426c0cc.js",revision:"b3732636a426c0cc"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/_offline-0ca3e0d90d7f8792.js",revision:"0ca3e0d90d7f8792"},{url:"/_next/static/chunks/pages/about-us-87ee5ea25a89934d.js",revision:"87ee5ea25a89934d"},{url:"/_next/static/chunks/pages/checkout-26e4d19e8d00559a.js",revision:"26e4d19e8d00559a"},{url:"/_next/static/chunks/pages/contact-us-fad735dbe82844d5.js",revision:"fad735dbe82844d5"},{url:"/_next/static/chunks/pages/faq-d812b6d8acfe4cc8.js",revision:"d812b6d8acfe4cc8"},{url:"/_next/static/chunks/pages/index-695f9206185aed0c.js",revision:"695f9206185aed0c"},{url:"/_next/static/chunks/pages/offer-2bb07029f922f2c5.js",revision:"2bb07029f922f2c5"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-7168c8b8cb2e57e3.js",revision:"7168c8b8cb2e57e3"},{url:"/_next/static/chunks/pages/order/details/%5Bid%5D-678706fe0b776893.js",revision:"678706fe0b776893"},{url:"/_next/static/chunks/pages/privacy-policy-214207e717b82280.js",revision:"214207e717b82280"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-a4093c0a6ed2929e.js",revision:"a4093c0a6ed2929e"},{url:"/_next/static/chunks/pages/search-2c5bacf34e0b43ac.js",revision:"2c5bacf34e0b43ac"},{url:"/_next/static/chunks/pages/terms-and-conditions-dcc807633997cbc2.js",revision:"dcc807633997cbc2"},{url:"/_next/static/chunks/pages/user/change-password-d5b5de89de98cfa7.js",revision:"d5b5de89de98cfa7"},{url:"/_next/static/chunks/pages/user/dashboard-8d83625ae4edbccc.js",revision:"8d83625ae4edbccc"},{url:"/_next/static/chunks/pages/user/my-orders-53ea20fee7251df1.js",revision:"53ea20fee7251df1"},{url:"/_next/static/chunks/pages/user/recent-order-3dde0d122e1af632.js",revision:"3dde0d122e1af632"},{url:"/_next/static/chunks/pages/user/resetpassword/%5Bid%5D-f3e0a4225dcf57b3.js",revision:"f3e0a4225dcf57b3"},{url:"/_next/static/chunks/pages/user/update-profile-7e2f96fc16de23eb.js",revision:"7e2f96fc16de23eb"},{url:"/_next/static/chunks/pages/user/verifyotp-7e47084a374ffa65.js",revision:"7e47084a374ffa65"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-42cdea76c8170223.js",revision:"42cdea76c8170223"},{url:"/_next/static/css/59d33e975c19145c.css",revision:"59d33e975c19145c"},{url:"/_next/static/css/6c7987e2821e600c.css",revision:"6c7987e2821e600c"},{url:"/_next/static/kF1p9aA_fj_1IlK9xIwsq/_buildManifest.js",revision:"16718da6671acf58b4183e2afdd789e8"},{url:"/_next/static/kF1p9aA_fj_1IlK9xIwsq/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/kF1p9aA_fj_1IlK9xIwsq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/revicons.652e7269.eot",revision:"652e7269"},{url:"/_next/static/media/revicons.b96bdb22.ttf",revision:"b96bdb22"},{url:"/_next/static/media/revicons.ff59b316.woff",revision:"ff59b316"},{url:"/_offline",revision:"kF1p9aA_fj_1IlK9xIwsq"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img.png",revision:"d21e1731c21448fc66743643130dbeba"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"4411088729812660a8f233b57a99e8ef"},{url:"/cta/cta-bg-2.jpg",revision:"c53fc622fae56dddae52a273c2e706c9"},{url:"/cta/cta-bg-3.jpg",revision:"2cfcd49bd9471c3da3056d672eaae0ef"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.svg",revision:"9cdfd2a1723ebe5d6fbfeb2a3a07765d"},{url:"/logo/logo-dark-2.svg",revision:"990e13afb1b79734e26b71f2fcc062d9"},{url:"/logo/logo-dark.svg",revision:"3d5619a9dd2312d20ee908259e95a635"},{url:"/logo/logo-light-2.svg",revision:"8e9e97fd3acd9a7aa3525e2c5eb93811"},{url:"/logo/logo-light.svg",revision:"a295f016c697789c084b023006b33ac5"},{url:"/logo/logo1.jpg",revision:"4be4375493f5a44e422ca22105730700"},{url:"/logo/logo1.png",revision:"8ad5218c6256738b6f4869523aae27cd"},{url:"/logo/logo2.jpg",revision:"e02fbef0ba809aabbf4072ce081a0293"},{url:"/logo/logo3.jpg",revision:"5e6e3115212f4281eb67cc34ec0d4d1e"},{url:"/logo/logo3.png",revision:"532fd4e13736f6f0cba1222316668b61"},{url:"/logo/logo4.jpg",revision:"0a23e03fe7ce44f554b15ee0e721a16d"},{url:"/manifest.json",revision:"5c5881f01420776d9b49aec187ca02e9"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"e0eda078a9bacaeef62e658bf4ef7778"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
