'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "f6fe46b5a92ddf3b110a572ea1d40072",
"index.html": "63458c333dfb30d709810e7c6b027749",
"/": "63458c333dfb30d709810e7c6b027749",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"manifest.json": "8162bf60ccd77a5cda37c232ad331524",
"version.json": "bc3ad94332db69b9dbf81b22d96124e4",
"assets/shaders/ink_sparkle.frag": "83cd201f3acbb27c5aa45f490dbf7728",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/NOTICES": "49b01aa2b4549eb50bd3e1abae37f06e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/tblogo_launch.png": "8be111732d22a93e7fe34153f199ee9c",
"assets/assets/revamped.png": "3f1c50e9e3cb0f4fadf44730029d89ec",
"assets/assets/z_logo_new.png": "d5b6ee0aeaffcca469bb200c86037392",
"assets/assets/tblogo.png": "9619375aaaf496a1b733d1a770d3495e",
"assets/assets/z_logo.png": "7cc892029210a04abcbcd7cc3a5dce76",
"assets/assets/icons/consulting.png": "f0a9add5a23ed770353c99aed86391ef",
"assets/assets/icons/wallet.png": "a5af58ccff7741c6e9d5e88f4bcd1fab",
"assets/assets/icons/money.png": "8232f82a7558034c0528eecd1ee25359",
"assets/assets/icons/document.png": "bd321b816cbc4e7ac02f425a23bc9177",
"assets/assets/icons/payment-method.png": "1785fc934c477392dbb25a32cb12a50d",
"assets/assets/icons/left-arrow.png": "9c445775a4c1c3629a3fb20a5c50c9ce",
"assets/assets/icons/complete.png": "1786b4fb7006d8a417300853b9d3c035",
"assets/assets/icons/safety-box.png": "32a6f3edc3dd958b050b777da6f68a11",
"assets/assets/icons/pending.png": "89fca48081afc4b170caadf762ba3eef",
"assets/assets/icons/phonecall.png": "db16acdb63c4236e8b76c2099c7ffe7e",
"assets/assets/icons/money-payment.png": "fe793cfeacd9107481d4e7134dcca624",
"assets/assets/icons/upload.png": "33571be558b617f56eb08b627b369236",
"assets/assets/icons/voice.png": "3e8954114dad506b363625a9c96a7761",
"assets/assets/icons/qr_code.png": "f837658019ecb85214277409d9637aaf",
"assets/assets/icons/gift.png": "2b715762f993b6163c65ed6f15f14eb5",
"assets/assets/icons/signature-with-a-pen.png": "3456ab36dd2100e768a085a0692710d9",
"assets/assets/icons/funeral_icon.png": "f49e910c2d90ec04b11ec721e4fb0100",
"assets/assets/icons/info_btn.png": "f865bc006e228e02f5090c84bc892029",
"assets/assets/icons/send.png": "a0322805e1c74e6d00f6d9fe73b5a459",
"assets/assets/icons/wallet_icon.png": "c89b132d3c6320061b3b605c34ac69c6",
"assets/assets/icons/claim.png": "f7c0ac06cfcc3da47249382c8c3aabfd",
"assets/assets/icons/chat.png": "679b57980df8339cca28be674977d53c",
"assets/assets/icons/menu_circle.png": "4f7465ff3a7e1b1b5377420c2e561a68",
"assets/assets/icons/contract.png": "d3dd22232e921196b5eac4d3d3cf4fbc",
"assets/assets/icons/online-banking.png": "debd293f5daa4436df05a699ceec3818",
"assets/assets/icons/bank.png": "02cfc0f7d4b02de2274c5845d21bd78c",
"assets/assets/icons/fined.png": "64da08919da52e2a0e775561c0d1665e",
"assets/assets/icons/timeline.png": "5906138815f46b20f582a61c37909d6c",
"assets/assets/icons/funeral.png": "f49e910c2d90ec04b11ec721e4fb0100",
"assets/assets/icons/zesa.png": "70730de6256da5be18a8d064410fc70c",
"assets/assets/icons/live_chat.png": "c4158b64297f39523a5a9b6494ba3842",
"assets/assets/icons/briefcase.png": "5dfaf31d412a465c40934e6325f35d89",
"assets/assets/icons/tower.png": "4821d1aba9fe7f0ea540c7135717fa3f",
"assets/assets/icons/credit_card_icon.png": "ab1d9a6256d0160e7a4533ca551c3941",
"assets/assets/icons/promotion.png": "5a9f3ae5173072fce3ec0679d0ddbc17",
"assets/assets/icons/setting.png": "b06645d217f95d707c09431bb83feb72",
"assets/assets/icons/graph.png": "fdcd9ebfbbf104f43388a2ec2f56675d",
"assets/assets/icons/calendar.png": "13b045fe087fd3abce49362265010723",
"assets/assets/icons/loan_icon.png": "d5ad497471a06aea7f7798d1827d6406",
"assets/assets/icons/electric-pole.png": "1ee6ae7a8a9e93a64c4cc7b890f7808c",
"assets/assets/icons/solutions.png": "e27c8735da98ec6ccdcf12e258b26475",
"assets/assets/icons/pay_icon.png": "caa7af835069079295245d4432b0960a",
"assets/assets/icons/hand.png": "f0a223780e8210d8125f573f59514f25",
"assets/assets/icons/services.png": "5ac5b5820c6220c26e4fb74112c11235",
"assets/assets/icons/umbrella.png": "ea5cfd6133c1f88e95c9dea7c52066e3",
"assets/assets/icons/credit-card.png": "e3291eb89fe7ddb8aa3b8bd450605e9e",
"assets/assets/icons/customer_service.png": "7ab0951dcaafb797a772a8cf522ce48b",
"assets/assets/icons/rewards.png": "ea43f92e19dd19a7228cde78cbf4a07b",
"assets/assets/icons/people.png": "b6b8047cbee464c380c880851a1c2681",
"assets/assets/icons/branch.png": "9a52d1bb0fd1ffe689a6c005ae9bf4b7",
"assets/assets/icons/signing.png": "8f475ee45bfa4e586d436283d26589cc",
"assets/assets/icons/medal.png": "e791373ea2d0295812a9797dcd73dcf9",
"assets/assets/icons/phone-calls.png": "71b0510059ad4f3cc7e2bff83df5eed1",
"assets/assets/icons/insurance.png": "e377f666dfc443169c3d36ac84fee68f",
"assets/assets/icons/flying-money.png": "7048eb4560080ac0a2186e05d318c0df",
"assets/assets/icons/laptop-banking.png": "c5601e38dea0bba786d5e4436be6b566",
"assets/assets/icons/money-transfer.png": "41c496ece2ff93cf5dd3277695762742",
"assets/assets/icons/save.png": "93ab7dd071facc2dbbd24164e0610088",
"assets/assets/icons/banking.png": "1b76784f686c3027ed5972bcca546aa3",
"assets/assets/icons/menu.png": "433ff10aac49f09a5dbe1693db1d36db",
"assets/assets/icons/loans.png": "728b829ac158ba6556161d50cbc49a21",
"assets/assets/icons/reinsurance.png": "6a261c99a98cd3f7f63a4e7e3064546c",
"assets/assets/icons/qr.png": "491bb9dd63e7b49ace5b201cec95b910",
"assets/assets/icons/accounts.png": "6de55ce4e6b3cf315adca2ea4fcdc40b",
"assets/assets/icons/portfolio.png": "505d8cb04b4d7147c0c86f86559dca2f",
"assets/assets/icons/resume.png": "56b24a6b046533fa9bd169679baa3685",
"assets/assets/icons/salary.png": "b734381f36503ee2cb82b9871be5f1ea",
"assets/assets/icons/money-bag.png": "5dc570522b35a9f8ca3136860238235c",
"assets/assets/icons/refund.png": "93ce342570fc0b49bc8b9959df74dd9b",
"assets/assets/icons/loan.png": "af7e5ebd650b3802f4e7ec3a85cc568b",
"assets/assets/icons/dollar-symbol.png": "017ba9995c92fe01a19b5a3baa4a522b",
"assets/assets/icons/lock.png": "86896b4d139c3c2b87c786c76aef2cb3",
"assets/assets/icons/assets.png": "fee120efb75ba7785f444bbf4fcd8b07",
"assets/assets/icons/airtime.png": "b602a9225f719e2feea83c28094b9213",
"assets/assets/icons/certificate.png": "b4ddfc3184bf937324a8c3b4e5d62fa3",
"assets/assets/icons/company.png": "ef5cc4af41209450d56e8ce96e548b47",
"assets/assets/icons/discard.png": "9f10cf38cb3cc7fae4e867d8ff61d2e3",
"assets/assets/icons/credit_cards_icon.png": "f89e21225bb551382ecc5ffa0b0b6e9e",
"assets/assets/icons/piggy-bank.png": "e4b9ab4cfec57dfff579a2a3c7807f0c",
"assets/assets/icons/money-growth.png": "a4d2b7a2148be23c4b197901d856db41",
"assets/assets/icons/loans_icon.png": "55054603426c2636f1e75e7c39e810c0",
"assets/assets/icons/withdraw-money.png": "a9d06437222f99d5050cbcd66b0f9591",
"assets/assets/icons/qr_code_two.png": "b296103037f529e22e7e46aa3729ca9c",
"assets/assets/icons/investment.png": "2fb669a21a29a7789b1b07bbc253fd14",
"assets/assets/icons/pay.png": "2f444868720fb7e9c2e863f22b891748",
"assets/assets/icons/payments.png": "f1cb7c6376ad065b77cfc7b05569addb",
"assets/assets/icons/scheduled.png": "1c405429b8b3094dc07117702c8ea932",
"assets/assets/icons/education.png": "af8bf11b46e0b6fc9b24034ab9a5353f",
"assets/assets/icons/call_center.png": "a596ddf42367456176291b988dea7a0a",
"assets/assets/tlogo.png": "0d2f3e308a470628bdf12e70c59e1a92",
"assets/assets/zb_logo_rev.png": "dd354fdbe136512cc7000fb17c44e613",
"assets/assets/images/picfour.png": "251830724f05dc9bed539ade66ee7e69",
"assets/assets/images/padlock.png": "60ed67aa9555b82640dbc9918d66ba73",
"assets/assets/images/family.jpg": "42b3a1406e82bec86809b173d58c8ca0",
"assets/assets/images/more_dot.png": "039d7131fed5e69f534ea64dc15b9078",
"assets/assets/images/pic_4.png": "251830724f05dc9bed539ade66ee7e69",
"assets/assets/images/pic_1.png": "3ba773ef467e92b6b5b7c53ee411018b",
"assets/assets/images/Insure.png": "d6ecf4da013c72d0808479042d80bcd2",
"assets/assets/images/loan_dot.png": "c915b432e8d27dd55e58866711bd81a0",
"assets/assets/images/zb_white_logo.png": "bd1d0f497de38423cb41d6393a8cf23c",
"assets/assets/images/picthree.png": "5a6435fd79b4831a0abb6a54f279f9f0",
"assets/assets/images/color_logo.png": "5a0c2c65b4e5dd5726d550d43cdbdf20",
"assets/assets/images/chat_dot.png": "3e1e270a099a20e9e1591f889e791aff",
"assets/assets/images/family.png": "ae85fd75c2353cd788b90135391b6f92",
"assets/assets/images/bank.png": "b12bb1124995e81bdb835bb79a3e3447",
"assets/assets/images/pic_2.png": "1b6787783e45ad6681375d8567386d15",
"assets/assets/images/familyy.png": "ee7a60e295d452fef631b0284532fb99",
"assets/assets/images/Umbrella.png": "d6435a5d7507f59bc8d743064847dfce",
"assets/assets/images/tlogo.png": "0d2f3e308a470628bdf12e70c59e1a92",
"assets/assets/images/pictwo.png": "1b6787783e45ad6681375d8567386d15",
"assets/assets/images/bg.jpeg": "ed686c8fa6fd7fb0e20d63afc95fe7fa",
"assets/assets/images/pic_3.png": "5a6435fd79b4831a0abb6a54f279f9f0",
"assets/assets/images/people.png": "078e133e707878cfad33db73d803ab17",
"assets/assets/images/BankCard.png": "64c8d3dee6824986b406fa9c865fd56f",
"assets/assets/images/insure_dot.png": "48131c75f4c97be6e3a64b079fda2e4d",
"assets/assets/images/payment_dot.png": "a9e120dd9fa30941927060f26d9977cc",
"assets/assets/images/Card.png": "64c8d3dee6824986b406fa9c865fd56f",
"assets/assets/images/woman.png": "2fa94ae79884ec90db2c81c0d4351959",
"assets/assets/images/faded_card.png": "dfae2fe5b73a51fed5907623d640221e",
"assets/assets/images/loans.png": "cfb9e03dd8707c2af3f342b702f7562c",
"assets/assets/images/SplashZero.png": "9c0f2703794753553e07e20462b65426",
"assets/assets/images/Lending.png": "332571250509a59efb3dd958febc6525",
"assets/assets/images/banktile.png": "c448fc9344578206f35fde3568fcef12",
"assets/assets/images/SplashOne.png": "36753c2fc89bfbc526f95bf9c2a2c8ff",
"assets/assets/images/picone.png": "3ba773ef467e92b6b5b7c53ee411018b",
"assets/assets/images/loan_box.png": "6c0780a7ce73b8debdb51b741cb44f95",
"assets/assets/images/SplashTwo.png": "c094db0e05b66170372a6cec415f2b02",
"assets/assets/images/money_dot.png": "e20cc1da2948fa71ec50ff6b1a57c785",
"assets/assets/images/BankCardHalf.png": "9c8f9821a1b46fb9062f815acf8c147a",
"assets/assets/images/qr_dot.png": "ac5a5081858108b349913d37fa19c20a",
"assets/assets/images/man.png": "8ca9f903af3e1f354f16ea2fe4f330d2",
"assets/AssetManifest.json": "094f34a4b140fa0fd586e3864911cebb",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
