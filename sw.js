const CACHE_NAME = 'studydesk-cache-v6';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // Precache individually so one failed CDN fetch doesn't abort install.
      Promise.allSettled(urlsToCache.map(url => cache.add(url)))
    )
  );
});

// Network-first with cache write-back: fresh when online, full app offline.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.pathname.startsWith('/api/')) return;
  const cacheable = url.origin === self.location.origin || url.hostname === 'cdnjs.cloudflare.com';

  event.respondWith(
    fetch(req)
      .then(resp => {
        if (cacheable && resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        }
        return resp;
      })
      .catch(() =>
        caches.match(req).then(hit =>
          // Offline navigations fall back to the app shell.
          hit || (req.mode === 'navigate' ? caches.match('/index.html') : Response.error())
        )
      )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(names =>
        Promise.all(names.map(n => (n === CACHE_NAME ? null : caches.delete(n))))
      )
    ])
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      if (clients.length) return clients[0].focus();
      return self.clients.openWindow('/');
    })
  );
});
