const CACHE_NAME = 'v-1';
const urlsToCache = ['index.html', 'ofline.html'];

// install sw
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('opened cache');

        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error(error);
      })
  );
});

// listen for requersts
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        return caches.match('ofline.html');
      });
    })
  );
});

// activate sw
self.addEventListener('activate', (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
