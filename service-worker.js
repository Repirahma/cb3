self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("absensi-v1").then((cache) => {
      return cache.addAll(["./", "./index.html", "./manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
