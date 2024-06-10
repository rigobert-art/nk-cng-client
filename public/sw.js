
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js', { scope: '/' })
//         .then(function (registration) {
//             console.log('Service Worker Registered')
//         })
//     navigator.serviceWorker.ready.then(function (registration) {
//         console.log('Service Worker Ready')
//     })
// }


// const CACHE_NAME = "gas-cache";
// self.addEventListener('install', e => {
//     console.log('installing service worker!!!')
//     e.waitUntil(
//         caches.open(CACHE_NAME).then(cache => {
//             return cache.addAll([
//                 `/`,
//                 `/index.html`,
//                 `static/js/bundle.js`
//             ])
//             .then(() => self.skipWaiting());
//         })
//     )
// })

// self.addEventListener('activate', event => {
//     console.log('activating service worker');
//     event.waitUntil(self.clients.claim)
// })

// self.addEventListener('fetch', function(event){
//     console.log(`fetching' ${event.request.url}`);
//     if (navigator.onLine){
//         var fetchRequest = event.request.clone();
//         return fetch(fetchRequest).then(
//             function(response){
//                 if(!response || response.status !== 200 || response.type !== 'basic'){
//                     return response;
//                 }

//                 var responseToCache = response.clone();

//                 caches.open(CACHE_NAME).then(function(cache){
//                     cache.put(event.request, responseToCache);
//                 });

//                 return response;
//             }
//         );
//     } else {
//         event.responseWith(
//             cache.match(event.request).then(function (response){
//                 if (response){
//                     return response;
//                 }
//             })
//         )
//     }
// })