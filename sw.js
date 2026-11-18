// ACİL İNGİLİZCE !! - Service Worker (Offline Support & PWA - v4.0.0)
const CACHE_NAME = 'ielts-master-v4.0.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=4.0.0',
  './app.js?v=4.0.0',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  './data/curriculum.js?v=4.0.0',
  './data/roots-affixes.js?v=4.0.0',
  './data/irregular-verbs.js?v=4.0.0',
  './data/study-guide.js?v=4.0.0'
];

// Install Event: Immediately skip waiting to take over
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('Pre-cache partial note, continuing:', err);
      });
    })
  );
});

// Activate Event: Clear ALL older caches immediately and claim clients
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) {
            console.log('Purging old service worker cache:', k);
            return caches.delete(k);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-first with no-store to guarantee latest unique reading texts
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(e.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
