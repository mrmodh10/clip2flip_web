/* Placeholder service worker to prevent 404 during local development.
   Replace with Firebase messaging implementation when push notifications are added. */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
