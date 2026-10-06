// Minimal service worker: makes the app installable. Always uses the network (live trading data).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
