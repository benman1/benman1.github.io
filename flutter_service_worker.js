'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "4f3143359045aa406e314c2a6e242ba9",
"assets/AssetManifest.bin": "f546b934e07ecbb63fa8a2fd13d1f43f",
"assets/AssetManifest.bin.json": "3c472de92d339bc02c98419c4f3c6801",
"assets/AssetManifest.json": "1ecfe2a3229c8131f66c4d95fc594ef7",
"assets/assets/fonts/CustomIcons.woff": "d7118e10bf6ccc713b907768112b0050",
"assets/assets/fonts/Ubuntu-Bold.woff": "b222dc7f7ab7555ee2ac72c6d85186f6",
"assets/assets/fonts/Ubuntu-Medium.woff": "b51856d45204d22a7efa87eabd335f43",
"assets/assets/fonts/Ubuntu-Regular.woff": "3d77c1349d1ffa5f4a44781d4cea42c0",
"assets/assets/images/about/me.png": "1db40d74d043c17305947c5d43b50c07",
"assets/assets/images/about/me.webp": "e00d2ee207728068cc7d48016342b681",
"assets/assets/images/books/ai_cookbook.png": "5b83b229a90cf20092d1050c3b17d54f",
"assets/assets/images/books/ai_cookbook.webp": "2fb22321044981bb0f5e9d4a153763fa",
"assets/assets/images/books/genai_book.png": "12fc957ab6c872c341d17e484bf0ff13",
"assets/assets/images/books/genai_book.webp": "5e3f81b760112dcf0f61fc343593c071",
"assets/assets/images/books/timeseries_book.png": "8905a7ec2cf023b7f466559b6dff410b",
"assets/assets/images/books/timeseries_book.webp": "8de6fe3230f0fc5d46bbe02d5750cbdd",
"assets/assets/images/logo/logo.png": "530a7ce24b9078114d537814159f5e37",
"assets/assets/images/logo/logo.webp": "4d158db164d5276418a3cbe4550fdd29",
"assets/FontManifest.json": "0a39d297d6c888876301a245f32f813d",
"assets/fonts/MaterialIcons-Regular.otf": "30054bb01fdd67bd7faee92a7d01973f",
"assets/NOTICES": "0331be233039424a9a9f4cd5d820f8df",
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
"flutter_bootstrap.js": "40385a3d66d12d0aa5fed6fdd1c55dea",
"icons/android-icon-192x192.png": "c37511353ab5715d9221e47712d66d78",
"icons/apple-icon-114x114.png": "a84263ad866a10d8e05562425b791181",
"icons/apple-icon-57x57.png": "98bc952356ca87a192a626923268c152",
"icons/browserconfig.xml": "7aae2027fb8bbab4b51a6c1c817d9dc1",
"icons/favicon-32x32.png": "144330aae1549d21de2009c10e9a6757",
"icons/favicon-96x96.png": "5c0285fcb5328736b180cdfb8d5558aa",
"icons/favicon.ico": "811ae832574d8bf53de138a6e571f8d6",
"icons/ms-icon-96x96.png": "3ce61e7274bcc0f41b70d8798c74c4fd",
"index.html": "abcf7d369abfb67686a5df73ac0bd5fa",
"/": "abcf7d369abfb67686a5df73ac0bd5fa",
"main.dart.js": "42a8f7c2c1ee76f9064f11c8eeded94c",
"main.dart.js_1.part.js": "e40e5712d865099c42784c6e27dd79aa",
"main.dart.js_10.part.js": "d395e77553d0310eb28ef989505279f7",
"main.dart.js_2.part.js": "dbafb5e71162e42c7170bc8b0bb7df38",
"main.dart.js_3.part.js": "1e124b0f86bee3dd074263709468310b",
"main.dart.js_4.part.js": "282f69ef9ad560d7330fc103dc97b82f",
"main.dart.js_5.part.js": "b9b498667e2182f5b41e438eb671d7f9",
"main.dart.js_6.part.js": "8aeeb6ba52ee9a8bee103b23d6f75035",
"main.dart.js_7.part.js": "683d9d5ac293f841b94f6ca5c93bd0e3",
"main.dart.js_8.part.js": "17b7c07c673713306ec2914d0ea649f5",
"main.dart.js_9.part.js": "eef31c62670fe92c982c52ec12c676a9",
"manifest.json": "fb023fe1be9c27aef412dfb9538bf18c",
"robots.txt": "e279352f5a3fc555adfeeab08b98c32c",
"sitemap.xml": "45f2f3924359fa2bdbc662fa82a9ca48",
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
