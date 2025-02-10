'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "4f3143359045aa406e314c2a6e242ba9",
"assets/AssetManifest.bin": "4e5c1ef4d3ac45f9dae7d816826dd29e",
"assets/AssetManifest.bin.json": "94429f9daaa96255e05e774b646aadb0",
"assets/AssetManifest.json": "ab5c86c461068363a314ff1daf76efdc",
"assets/assets/images/about/me.webp": "e00d2ee207728068cc7d48016342b681",
"assets/assets/images/books/ai_cookbook.webp": "2fb22321044981bb0f5e9d4a153763fa",
"assets/assets/images/books/genai_book.webp": "5e3f81b760112dcf0f61fc343593c071",
"assets/assets/images/books/timeseries_book.webp": "8de6fe3230f0fc5d46bbe02d5750cbdd",
"assets/assets/images/logo/logo.webp": "4d158db164d5276418a3cbe4550fdd29",
"assets/FontManifest.json": "65a8d9ab86eb869fa8997753ca5f52ca",
"assets/NOTICES": "7c618853d844f007fb35d4121471eaee",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "45f9f5ca48840bb0ac91b215536aa2b5",
"icons/android-icon-192x192.png": "c37511353ab5715d9221e47712d66d78",
"icons/apple-icon-114x114.png": "a84263ad866a10d8e05562425b791181",
"icons/apple-icon-57x57.png": "98bc952356ca87a192a626923268c152",
"icons/browserconfig.xml": "7aae2027fb8bbab4b51a6c1c817d9dc1",
"icons/favicon-32x32.png": "144330aae1549d21de2009c10e9a6757",
"icons/favicon-96x96.png": "5c0285fcb5328736b180cdfb8d5558aa",
"icons/favicon.ico": "811ae832574d8bf53de138a6e571f8d6",
"icons/ms-icon-96x96.png": "3ce61e7274bcc0f41b70d8798c74c4fd",
"index.html": "8013c2ad1f43a0830250621237914dfa",
"/": "8013c2ad1f43a0830250621237914dfa",
"main.dart.js": "120f1ecf96641edaae8813a118e58e0a",
"main.dart.js_1.part.js": "b27a4cbbdd664e0367ff4a8ed72217f0",
"main.dart.js_10.part.js": "ef984c9721f66fb4d5ecfbdbae1cfb93",
"main.dart.js_11.part.js": "7f45bb6af200e5b4a0090e1456784831",
"main.dart.js_2.part.js": "ab277819a6a3b9c8e67c984b16736e48",
"main.dart.js_3.part.js": "0db7cade300a43929da64a2de1ad1e59",
"main.dart.js_4.part.js": "7dd6d47a2fd0e9b3d8ce0e6466f793ff",
"main.dart.js_5.part.js": "d6a13f8279f243a347feb9371a43d436",
"main.dart.js_7.part.js": "8cb5f58c2323bc89b8a9696a3105cca5",
"main.dart.js_8.part.js": "7d212dbc1c98c7b0a70eeb2fed3bc483",
"main.dart.js_9.part.js": "dbb65d540ad024cf50ed745ae81cdc72",
"manifest.json": "fb023fe1be9c27aef412dfb9538bf18c",
"robots.txt": "e279352f5a3fc555adfeeab08b98c32c",
"sitemap.xml": "2cfb15179edfe790cb0b4e6d62347ba5",
"spinkit.css": "269188a881226fa2950bf905fedccb05",
"version.json": "2e5718ddc601847d341ce2c7a7f54a49"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
