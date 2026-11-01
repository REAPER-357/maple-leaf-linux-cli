const CACHE_NAME = 'mapleleaf-cli-v2';

// Lucide icon names used by the app (copied into assets/icons/ by copy-icons.sh)
const ICONS = [
  'terminal', 'star', 'sliders-horizontal', 'bookmark', 'plus', 'settings', 'search', 'copy',
  'trash-2', 'x', 'pencil', 'download', 'upload', 'history', 'triangle-alert', 'check',
  'book-open', 'file-code', 'arrow-up', 'arrow-down', 'chevron-down', 'list-plus', 'leaf', 'zap'
];

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './small-icon.png',
  'https://cdn.tailwindcss.com',
  ...ICONS.map((n) => `./assets/icons/${n}.svg`)
];

// Install: cache what we can; a missing file never blocks installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.allSettled(ASSETS_TO_CACHE.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

// Activate: remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null))))
      .then(() => self.clients.claim())
  );
});

// Fetch: network-first for pages (so updates arrive), cache-first for everything else
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        return res;
      });
    })
  );
});
