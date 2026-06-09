const CACHE = "alexis-portfolio-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(["/", "/icon.png"]),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache Google Maps embed for offline use
  if (url.hostname === "maps.google.com") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.origin !== location.origin) return;

  const isImage =
    /\.(png|jpg|jpeg|webp|svg|ico|avif|woff2?)$/i.test(url.pathname) ||
    url.pathname.startsWith("/_next/image");

  if (isImage) {
    event.respondWith(cacheFirstImage(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
    ),
  );
});

async function cacheFirstImage(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response("", { status: 204 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response("Offline", { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) {
    fetch(request)
      .then((response) => {
        if (response.ok) cache.put(request, response.clone());
      })
      .catch(() => {});
    return cached;
  }
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response("", { status: 204 });
  }
}
