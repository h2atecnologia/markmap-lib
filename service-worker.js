!function(){"use strict";const e=["client/client.c913a25e.js","client/index.332c35fa.js","client/about.f0826a4d.js","client/usage.b8b2eac7.js","client/repl.6e22da0b.js","client/codemirror.3056140e.js","client/markdown.71184ec3.js","client/client.d8e6af4e.js"].concat(["service-worker-index.html","donate/alipay.svg","donate/paypal.svg","donate/qr_alipay.png","donate/qr_wechat.png","donate/wechat.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","markmap.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586223603172").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586223603172"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&t.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586223603172").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const n=await t.match(e.request);if(n)return n;throw a}}))))})}();
