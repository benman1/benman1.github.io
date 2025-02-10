'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "4f3143359045aa406e314c2a6e242ba9",
"assets/AssetManifest.bin": "15b1ed81a74783d5c2a004a39f0f425e",
"assets/AssetManifest.bin.json": "fe3263c1d9971b9a3c366cbcb77faab0",
"assets/AssetManifest.json": "73826b7b613c550a11a90152a20926ad",
"assets/assets/fonts/Ubuntu-Bold.woff2": "a61a83e06d68acb257eda8521ac0fe39",
"assets/assets/fonts/Ubuntu-Medium.woff2": "84eb9ff65c6d2bde1d83734051894c20",
"assets/assets/fonts/Ubuntu-Regular.woff2": "594c82bf7dd87a789475b807b3583903",
"assets/assets/icons/book.svg": "789b6362f87d309e95e293a9d3cadf96",
"assets/assets/icons/brain.svg": "155507888a38ad261f907a82b219f467",
"assets/assets/icons/chevron-down.svg": "6a3ca2fed730cf4413c0d92e56cea922",
"assets/assets/icons/circle.svg": "f89fbc3c093210de1a97d1671afba0a1",
"assets/assets/icons/cog.svg": "37da8b02b7e46fb398ad7a19195f7b09",
"assets/assets/icons/download.svg": "1b6f7e2c428fc464786cee60ce16a4d8",
"assets/assets/icons/facebook.svg": "83e52fb16afe8adf0137ee4b3d8c5c30",
"assets/assets/icons/gem.svg": "2e64c8555f8c5bade7ea3a03e7e73139",
"assets/assets/icons/github.svg": "8cb1a6fa5a7f155aedf277b9d4dd2ba4",
"assets/assets/icons/graduation-cap.svg": "44d996ec8f5d82eae3c2d45cc7135257",
"assets/assets/icons/instagram.svg": "db97dc81e232b4a8e43774af0c6ca199",
"assets/assets/icons/layers.svg": "fa9bb2368d02be487c602a6add16870e",
"assets/assets/icons/lightbulb.svg": "51c9a77a782e23988ded6af79601fa04",
"assets/assets/icons/linkedin.svg": "8a437f3cb1e3abb5d4e11d523ca9b3c4",
"assets/assets/icons/mail.svg": "6d3274699d36ab5410f8c1122f27bbaa",
"assets/assets/icons/menu.svg": "80f2ef8f8984160a8f60bd250a7a87d3",
"assets/assets/icons/message-circle.svg": "78cd35691fd593750d52c9a0436d0fab",
"assets/assets/icons/mic-vocal.svg": "f024be2ed272629cdfdddb53db779350",
"assets/assets/icons/search.svg": "ae1d4a5e4b7e00501ec7fbc158692950",
"assets/assets/icons/server.svg": "792fadedb58c4f0341f8716df271d4bb",
"assets/assets/icons/star.svg": "32edd8927d1c959cec74840db810c176",
"assets/assets/icons/trending-up.svg": "53b94fb59d8155c736d1cfad237e9973",
"assets/assets/icons/twitter.svg": "1536f64056a73ef0c69fe10fbee53c39",
"assets/assets/icons/users.svg": "767591b1b764cc1f5a3abadddb64960c",
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
"assets/FontManifest.json": "c8aa895c8a4fffea93eb1cb9bb47aac7",
"assets/fonts/MaterialIcons-Regular.otf": "30054bb01fdd67bd7faee92a7d01973f",
"assets/NOTICES": "b5aee124a50216717837de6554114edf",
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
"flutter_bootstrap.js": "609ea94edfbcb0fa7a67ba6ae098c552",
"icons/android-icon-192x192.png": "c37511353ab5715d9221e47712d66d78",
"icons/apple-icon-114x114.png": "a84263ad866a10d8e05562425b791181",
"icons/apple-icon-57x57.png": "98bc952356ca87a192a626923268c152",
"icons/browserconfig.xml": "7aae2027fb8bbab4b51a6c1c817d9dc1",
"icons/favicon-32x32.png": "144330aae1549d21de2009c10e9a6757",
"icons/favicon-96x96.png": "5c0285fcb5328736b180cdfb8d5558aa",
"icons/favicon.ico": "811ae832574d8bf53de138a6e571f8d6",
"icons/ms-icon-96x96.png": "3ce61e7274bcc0f41b70d8798c74c4fd",
"index.html": "9f5b0345b5226dd7617ca85162490b02",
"/": "9f5b0345b5226dd7617ca85162490b02",
"main.dart.js": "a35252829a59c417f19e0f35d763c692",
"main.dart.js_1.part.js": "41c0d5b153a5fa30a7e5d6096c21a7c3",
"main.dart.js_10.part.js": "5c9d5c2f6b5cefe7cb9afd109cdda7de",
"main.dart.js_11.part.js": "60f5d0eb9f30b84f4a08543ed0c4729a",
"main.dart.js_2.part.js": "0cc48d8c252d5ec12a1e6316dc1b6541",
"main.dart.js_3.part.js": "1b5250a56b7ee2049ce71eef234d0189",
"main.dart.js_4.part.js": "c767e058f9ff05157e3e1d07f1d26276",
"main.dart.js_5.part.js": "9a1b308c46f73c037473bdf4c4e07472",
"main.dart.js_7.part.js": "841e670779bc4c9924fe36b11b782bc7",
"main.dart.js_8.part.js": "3f0ee77c3445204698bed423ca01599c",
"main.dart.js_9.part.js": "b57d78c83e004fbf0af991c556ba8fc9",
"manifest.json": "fb023fe1be9c27aef412dfb9538bf18c",
"robots.txt": "e279352f5a3fc555adfeeab08b98c32c",
"sitemap.xml": "2cfb15179edfe790cb0b4e6d62347ba5",
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
