'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d74793e65ce105b5f1510a943ae866a8",
"assets/AssetManifest.bin.json": "c48c511df6364d154dc1b70d364bd6e2",
"assets/AssetManifest.json": "b6e1fd2396c757576cad1ebbd1bc3f49",
"assets/assets/fonts/ArefRuqaa-Regular.ttf": "bc2d83338c0de499ffae3c553a11156f",
"assets/assets/fonts/ExpoArabic-Book.ttf": "fe9a0ad452cd1c07da91ff905ba0d191",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/images/appStore_icon.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/images/banner.jpg": "b6c12f935bfc4a0a8d534007b4cdc45b",
"assets/assets/images/banner2.jpg": "ada6b8f23eae6a72ef1be6194c6a883d",
"assets/assets/images/cart.png": "ef022801f3da4aff29b1be19a7480d83",
"assets/assets/images/cart_icon.png": "120e973c890abfa868a540e6627ee0b5",
"assets/assets/images/clock.png": "fb68f38c2ea8f9219b2a3195e47050c0",
"assets/assets/images/clock_icon.png": "22339e00928f149259933b2d30e3b5b4",
"assets/assets/images/company.png": "fca5177861bed2cdc44855f1ea033d3a",
"assets/assets/images/company_logo.png": "67d373fd70ac787c953892d0bb98a0a2",
"assets/assets/images/discount_icon.png": "5e82a21b9db27563bbfdf04872f5bf3c",
"assets/assets/images/door.png": "abb40dbf8736b13bf4c6041455d5af7f",
"assets/assets/images/first_body.png": "c1ea754091aca83453580d5250f65288",
"assets/assets/images/googlePlay_icon.png": "5c5b0373b8ffd4be1176312f36d4be4c",
"assets/assets/images/hoodie.jpg": "c0ade59c7cdf9c5e8f93bf07a5c69b6a",
"assets/assets/images/hook.png": "bda132930b92dccb42125670672b452b",
"assets/assets/images/hussein_banner.jpg": "465345bc1cbae293454424216918ea53",
"assets/assets/images/instagram_icon.png": "3111bba993527d51a712c92190faed3e",
"assets/assets/images/list_icon.png": "805c5c6ff07a8a07723b21930173203f",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/logo.png": "2ff8a187cc8ddf5863a17450d47cb6f8",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/managment.png": "5b6143ec22da60cf01bfa8048c4f727d",
"assets/assets/images/money_icon.png": "fbbf634faff032ab8f84c234a5cf1570",
"assets/assets/images/nofal_banner.jpg": "6357013e45f57fe2285203f1dab6c66d",
"assets/assets/images/page.jpg": "7b1f90e313dc46905ffe8d9990fece0f",
"assets/assets/images/privecy.png": "28d95c065f826a65b4b6aed363e748af",
"assets/assets/images/second_body.png": "7701eb91e858a3860f43a595dcdd5c22",
"assets/assets/images/shake.png": "168c44c5975149e6ecafe34e6aa45183",
"assets/assets/images/shaker.png": "53b1a25c3d89a413ca002c4f8b917cdb",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/third_body.png": "9edddb092c0109cc31199b504940fcce",
"assets/assets/images/user.png": "d21b25e512a781715a5420ddc2988222",
"assets/assets/images/video_icon.png": "d10d7062b19aeea936d44ba7974f98c5",
"assets/assets/images/whatsapp_icon.png": "ad8405bc8e1a0508bd1c2c32c386e4f8",
"assets/FontManifest.json": "ad78b76369a3e323019b1e539f6b6d1b",
"assets/fonts/MaterialIcons-Regular.otf": "225a1488244b685231917c05be880564",
"assets/NOTICES": "35e10e3a151d6e6297f828fd3aca5638",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6fbddab90f84991ccc0c7a9e830484f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "694acef8aba09a4391616f238d0880c1",
"/": "694acef8aba09a4391616f238d0880c1",
"main.dart.js": "2166c5340079e82df074a226cd7bbdf1",
"manifest.json": "1410dd877c89e1cb87b4b52af9805d3c",
"version.json": "25a6dcba6d2286fb1f12afcb28858f64"};
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
