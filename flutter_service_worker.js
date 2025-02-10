'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "4f3143359045aa406e314c2a6e242ba9",
"assets/AssetManifest.bin": "ac5fdb9a5198b00631354ea6770d99e7",
"assets/AssetManifest.bin.json": "fb6a20516224e3500f06f57aff6a1e7c",
"assets/AssetManifest.json": "34aec5f14d00d8a1b28335644a082665",
"assets/assets/icons/book.svg": "9c043a8f31a3f668497d367060497f9f",
"assets/assets/icons/brain.svg": "a3739c53a15941a0a823d59c30c3ad99",
"assets/assets/icons/chevron-down.svg": "401cb93b87962ef28fc973f14c62cedf",
"assets/assets/icons/circle.svg": "1b0b64fab20c54068783a49105d207ce",
"assets/assets/icons/cog.svg": "c640e92617a161ae98ff1be4a7d3466f",
"assets/assets/icons/download.svg": "b2ca6ec147efb2cb8dc8a66016a9b620",
"assets/assets/icons/facebook.svg": "61aef0e0b6684477259329a45d576e0a",
"assets/assets/icons/gem.svg": "742c361e91aa8d1e4bc8d33cb4991365",
"assets/assets/icons/github.svg": "a054fff77254adff04c2a63e8add8fda",
"assets/assets/icons/graduation-cap.svg": "e6b5fbd3bb7ec46775ac76cdde0cf846",
"assets/assets/icons/instagram.svg": "8ea47704ca1e588d4bef034dc138b337",
"assets/assets/icons/layers.svg": "22e3e947dd17d3c10adef202e2ac0718",
"assets/assets/icons/lightbulb.svg": "a9bf81a4f17805f3b76fb486778b73d1",
"assets/assets/icons/linkedin.svg": "ff1a49f2349e696a720e76a057cb8d98",
"assets/assets/icons/mail.svg": "86f32aee6b109dac51ea1ad8d004e196",
"assets/assets/icons/menu.svg": "7defc75c609f81404cde961db4e166a7",
"assets/assets/icons/message-circle.svg": "9264163c07a09aea62889d2b7035a055",
"assets/assets/icons/mic-vocal.svg": "57c1dfbd9ed595f71e69e9ae819b9927",
"assets/assets/icons/search.svg": "1b3c285b56721b24d6d051e920ddf96c",
"assets/assets/icons/server.svg": "221b3968387a60d1f0b5649c1370eaf3",
"assets/assets/icons/star.svg": "d392a5d44d8763778d4d183d0b314f22",
"assets/assets/icons/trending-up.svg": "ed27986d1439821c599c7b1aad8c6a57",
"assets/assets/icons/twitter.svg": "fe24e412bf7518ddbc8d6ae4eedec826",
"assets/assets/icons/users.svg": "9d3721ae1a591ab81d11445a94a407b7",
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
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/NOTICES": "6d4d23c21ea864a13ae467bd62839b8b",
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
"flutter_bootstrap.js": "87fec02a9e8798d52a861234274208c2",
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
"main.dart.js": "8e0c4f383f8f0936df2b4f3999f35f4c",
"main.dart.js_1.part.js": "899ab34646549d391a909d1268785b48",
"main.dart.js_10.part.js": "ced36beee89f26068e098174a6c27932",
"main.dart.js_11.part.js": "ddb83a27bef5a921a1ce967160c2c9c7",
"main.dart.js_2.part.js": "d88fdefe0c0119c9098abad5c504310f",
"main.dart.js_3.part.js": "7e0076dbbddf6b87ff1fc69230064cff",
"main.dart.js_4.part.js": "e2ba2f6ca9565a2dd4f314d37791b9c8",
"main.dart.js_7.part.js": "69f7cf90ec5cb89dc47017b383eb9ea6",
"main.dart.js_8.part.js": "f6cdc9ce711f8f4a740e00d889704691",
"main.dart.js_9.part.js": "24788cd5ff963a4e4abd09258b18bcde",
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
