/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7e2dd691eb26072e40adaf9de2b1dd8f"
  },
  {
    "url": "all/index.html",
    "revision": "50ddcfd56c7acc74e2b66056594b0883"
  },
  {
    "url": "assets/css/0.styles.3ade41d3.css",
    "revision": "37f6ee27ce76ac36347cd2ef830ce550"
  },
  {
    "url": "assets/custom.css",
    "revision": "d65a2af859c58cd61a3ee3f64c8ca21d"
  },
  {
    "url": "assets/eina-700.woff2",
    "revision": "36b55fefa94a4001f0a29baef41f530f"
  },
  {
    "url": "assets/fonts/eina-700.36b55fef.woff2",
    "revision": "36b55fefa94a4001f0a29baef41f530f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/ionic-prism.css",
    "revision": "ed663d0a081d7e111f61d5c5a5f046cf"
  },
  {
    "url": "assets/ionic.css",
    "revision": "4f6092d9848a6502ff6cf57ee570c4c5"
  },
  {
    "url": "assets/js/10.cdaa3763.js",
    "revision": "864289b7a77ed37da9038ba5fbbed7e3"
  },
  {
    "url": "assets/js/11.6a7d0ab8.js",
    "revision": "7e5458a2b553509581aa624ffeeac26e"
  },
  {
    "url": "assets/js/12.90fc5fe4.js",
    "revision": "35ed128320b6615aca9a5e7f9c3b9ec5"
  },
  {
    "url": "assets/js/13.e8a0d2c3.js",
    "revision": "87eedfd81271144064aa8d0164ad2bca"
  },
  {
    "url": "assets/js/14.113ad40a.js",
    "revision": "42b5622fb06c3fbcc594edf999f1d0cb"
  },
  {
    "url": "assets/js/15.81eb7186.js",
    "revision": "bd32e33c57e23ebc4dbb57d13055939e"
  },
  {
    "url": "assets/js/16.2e6b7c73.js",
    "revision": "ab5f5adcf495aa6be08d692a96348b3e"
  },
  {
    "url": "assets/js/17.11c576fa.js",
    "revision": "a93432a4e214dc562d0e6cf7c0db350a"
  },
  {
    "url": "assets/js/18.ee1ad12e.js",
    "revision": "c261512601b50bb741a13aae54e54503"
  },
  {
    "url": "assets/js/19.4ebab5cd.js",
    "revision": "97debec14f1a043f977f8f2e93340f20"
  },
  {
    "url": "assets/js/2.76897b11.js",
    "revision": "841e24db6a2f219bbcffe7fd8ceb9709"
  },
  {
    "url": "assets/js/20.7b44d779.js",
    "revision": "58e9ae65366e492d4524b39080bd8a00"
  },
  {
    "url": "assets/js/21.79dafb7b.js",
    "revision": "500e6ab0d94a7f27a996623b7d5890d8"
  },
  {
    "url": "assets/js/22.1bd93cd2.js",
    "revision": "5d23300525fb4f3b995dea8122ce0f81"
  },
  {
    "url": "assets/js/23.c4ab5f2f.js",
    "revision": "44913a9c43c12f2c85d813ccb89c4e2a"
  },
  {
    "url": "assets/js/24.44c7b940.js",
    "revision": "b748eab3351040a27ed3b44c4ea3f2f1"
  },
  {
    "url": "assets/js/25.3c974318.js",
    "revision": "902eab60a753bbbb8a3836eb65442957"
  },
  {
    "url": "assets/js/26.005f9ce2.js",
    "revision": "c1ca437575673e6647995b73bf4118e8"
  },
  {
    "url": "assets/js/27.1de0ea8d.js",
    "revision": "6a374f4b8fd105da72f4411838bd022c"
  },
  {
    "url": "assets/js/28.837f3fea.js",
    "revision": "74559fb2f91a3fe3360260340eee8810"
  },
  {
    "url": "assets/js/29.cf3c9f48.js",
    "revision": "d380e18110848cdee3c4e5d0c187bb29"
  },
  {
    "url": "assets/js/3.f2daa839.js",
    "revision": "19d3d9254fda41b4fc8e721d6d100bb7"
  },
  {
    "url": "assets/js/30.431cb797.js",
    "revision": "c5bde18fdd946ef2309ce8acc18edde7"
  },
  {
    "url": "assets/js/31.173ec7e8.js",
    "revision": "fda62821e555cd52629036ad75229dae"
  },
  {
    "url": "assets/js/32.32f3caf4.js",
    "revision": "7c5a09b2c95e4bf7df80e5ab18b99486"
  },
  {
    "url": "assets/js/33.ba821e36.js",
    "revision": "138b33e4b0f4b2ac199ad55882eef5cd"
  },
  {
    "url": "assets/js/34.dc482901.js",
    "revision": "d16a5409cd5672d37c36c82338dc2589"
  },
  {
    "url": "assets/js/35.43510dae.js",
    "revision": "12439f74a1f99b7cf657c403e51d1701"
  },
  {
    "url": "assets/js/36.d5f1753b.js",
    "revision": "408f3fdec9201f9ce71af6fabce36aae"
  },
  {
    "url": "assets/js/37.20a4cc42.js",
    "revision": "87e22415736f0cf497540c8daccdd726"
  },
  {
    "url": "assets/js/38.486a1c55.js",
    "revision": "13a06cfeaf0e99a582230528970bdbcc"
  },
  {
    "url": "assets/js/39.4b7cf968.js",
    "revision": "61e6c9732bfbce2ec742ca0c60689b51"
  },
  {
    "url": "assets/js/4.7de8686a.js",
    "revision": "fa3e9eab24ac01c6ebec86ab7a58fbb0"
  },
  {
    "url": "assets/js/40.0acf926d.js",
    "revision": "62a6ededcbf384b1f5cde62c8f47c8c0"
  },
  {
    "url": "assets/js/41.d2f4110d.js",
    "revision": "9e92516735109c89391487ff623be8ae"
  },
  {
    "url": "assets/js/42.ebd04347.js",
    "revision": "c85af74f63ee4e9668af2cd06aa1490b"
  },
  {
    "url": "assets/js/43.3f1cfb95.js",
    "revision": "631716f33446941b314999518beb7edb"
  },
  {
    "url": "assets/js/44.d4cf9a55.js",
    "revision": "eed75e7305e155d07640ab3f65434370"
  },
  {
    "url": "assets/js/45.4bb3f96a.js",
    "revision": "a48436dc45b4cd52bb3f8e1eb7ee818e"
  },
  {
    "url": "assets/js/46.74b673ee.js",
    "revision": "ab13eab81f71eef80d0a7311fa974886"
  },
  {
    "url": "assets/js/47.56e72f3e.js",
    "revision": "205dd0ca797154226dc973f28a014460"
  },
  {
    "url": "assets/js/48.f55d6241.js",
    "revision": "bf9c32320a255cb59379b386e69a4e08"
  },
  {
    "url": "assets/js/49.833c6dc7.js",
    "revision": "78fa0579e6f7bad9047b2b09a6acb90b"
  },
  {
    "url": "assets/js/5.8d5331bd.js",
    "revision": "f87c917155f55e18a4c18290021f4513"
  },
  {
    "url": "assets/js/6.0a27b083.js",
    "revision": "61e8c44a810d11cff95cec29833dcc9a"
  },
  {
    "url": "assets/js/7.5674a6cb.js",
    "revision": "c5e811870899c1a15527549644632d4f"
  },
  {
    "url": "assets/js/8.98d07208.js",
    "revision": "5409e50ca5410d14211e8ecbb0983f5e"
  },
  {
    "url": "assets/js/9.f7e42867.js",
    "revision": "19203ac6d40c806adda58dc3d5bdc35c"
  },
  {
    "url": "assets/js/app.9bc7b2f5.js",
    "revision": "f8d59eb77ed2a9dd691f4e6c49f35909"
  },
  {
    "url": "config-files/appveyor.html",
    "revision": "68cbfc74ba022bdd0ffaa863beddc541"
  },
  {
    "url": "config-files/cloudbuild-yaml.html",
    "revision": "4fa1b398ce8dccd74f5cc65438e60942"
  },
  {
    "url": "config-files/gitignore.html",
    "revision": "0b0635ec445137931ef5a3445bd338a7"
  },
  {
    "url": "config-files/index.html",
    "revision": "48fda538b7e4053b1cd90213c0260632"
  },
  {
    "url": "config-files/travis-firebase-hosting.html",
    "revision": "f0829e49bcc846f6ff5305df7744fbc5"
  },
  {
    "url": "config-files/travis-github-pages.html",
    "revision": "88829e5b386482d84a86de42287cbc73"
  },
  {
    "url": "config-files/travis.github.release.html",
    "revision": "f8c47d02e93beb490ddbc8aac63d32c3"
  },
  {
    "url": "config-files/tsconfig-json.html",
    "revision": "e28c8732f912527c2e0bbb52107a70e3"
  },
  {
    "url": "devtime.html",
    "revision": "74a0cc231dccbc7f91d13abdaa8692b8"
  },
  {
    "url": "edfora/cf-1.jpg",
    "revision": "3ad9bf6344e9ba226bff5b940264513d"
  },
  {
    "url": "edfora/cf-2.jpg",
    "revision": "03341a4bc03bb1f5162aa30f25f0c7b2"
  },
  {
    "url": "edfora/cf-3.jpg",
    "revision": "235c28cfe060e02528402acf20b18c08"
  },
  {
    "url": "edfora/cf-4.jpg",
    "revision": "ec9dcd2981bd922f4beccb9b9b918a69"
  },
  {
    "url": "edfora/cf-5.jpg",
    "revision": "eada2e21b463ba9e52886fcbc3b99268"
  },
  {
    "url": "edfora/cf-6.jpg",
    "revision": "8546202289e813e0e053e9d2777e43d8"
  },
  {
    "url": "edfora/cf-7.jpg",
    "revision": "07ce1a52186c97657e3314ba29e63a33"
  },
  {
    "url": "edfora/cf-8.jpg",
    "revision": "2e506029a4fa2a9116a973ee16e48c8c"
  },
  {
    "url": "edfora/cf-9.jpg",
    "revision": "01da81ee7fabef555f6f1aaa431cf72b"
  },
  {
    "url": "images/apple-logo.svg",
    "revision": "776185f79159636b068d8e7735c9722e"
  },
  {
    "url": "images/arrow.svg",
    "revision": "7263e94fedf8e3642f9a71ffce663f0d"
  },
  {
    "url": "images/download.svg",
    "revision": "a3e00aecfc28eae63d68b42668600f92"
  },
  {
    "url": "images/error-example-1.png",
    "revision": "21c14dc35bc13a60a197f596cfa49e5b"
  },
  {
    "url": "images/error-example-2.png",
    "revision": "138d3c0ca71d362c7f524870a8bc7847"
  },
  {
    "url": "images/icon-svg.svg",
    "revision": "2f40431d36804b2910ca3ab67892e1e7"
  },
  {
    "url": "images/icon.png",
    "revision": "acd4f02abab9fab9e50c13fbad442664"
  },
  {
    "url": "images/linux-logo.png",
    "revision": "3f5e60cb8624bce0019c735ef39739f1"
  },
  {
    "url": "images/old-icon.png",
    "revision": "02b9c409fa64ff9a7ffadb08e14a1ec8"
  },
  {
    "url": "images/windows-logo.png",
    "revision": "c4f14b925342a74ba1aac53bdaea2a09"
  },
  {
    "url": "index.html",
    "revision": "61b0f612fbb06fe44ec104f91e427446"
  },
  {
    "url": "pwa/images/icons/icon-128x128.png",
    "revision": "fafa88c3238c8ed745196d9e085725d5"
  },
  {
    "url": "pwa/images/icons/icon-144x144.png",
    "revision": "3410f2d8c32462d474570209d493c54a"
  },
  {
    "url": "pwa/images/icons/icon-152x152.png",
    "revision": "d47fbe5eae9d243b815211680fdea8a9"
  },
  {
    "url": "pwa/images/icons/icon-192x192.png",
    "revision": "340323303babcd0b114213a1d482581b"
  },
  {
    "url": "pwa/images/icons/icon-384x384.png",
    "revision": "ed035157cab5f6dd84db7d964173a0a1"
  },
  {
    "url": "pwa/images/icons/icon-512x512.png",
    "revision": "5890468a1da6a8972bc3c23c60fb5c4e"
  },
  {
    "url": "pwa/images/icons/icon-72x72.png",
    "revision": "651ab775b9db076b818799ba3778e9b7"
  },
  {
    "url": "pwa/images/icons/icon-96x96.png",
    "revision": "8753eb153ba6848cb93425c9cd5eaa69"
  },
  {
    "url": "replies/email-1.html",
    "revision": "0f7e2dadce8f9522879d3aa46121ea88"
  },
  {
    "url": "replies/index.html",
    "revision": "8b91ba3e8e342e79b46115ee73691379"
  },
  {
    "url": "snippets/appveyor-encrypt-files.html",
    "revision": "bb9c4e5858c320739ff5a82cf2e8485a"
  },
  {
    "url": "snippets/build-portfolio.html",
    "revision": "dc811e79a6220ea8f16ea5442739e4db"
  },
  {
    "url": "snippets/cloud-build.html",
    "revision": "ffe5a97fafe9a20238708ea16834eb44"
  },
  {
    "url": "snippets/cms-website.html",
    "revision": "49fda425beeee8c038f437e59c11f8e0"
  },
  {
    "url": "snippets/ffmpeg-convert.html",
    "revision": "9cbce5ea30c99de363a4ccf5a9828576"
  },
  {
    "url": "snippets/firebase-environment.config.html",
    "revision": "a81f8de1bf36a044753cee7bf309ba5d"
  },
  {
    "url": "snippets/github-actions.html",
    "revision": "904d2c07485e4522b0a9a5b3e0d375bf"
  },
  {
    "url": "snippets/index.html",
    "revision": "57ded503b4dccfa523398ab3e5d1f362"
  },
  {
    "url": "snippets/news-mentions.html",
    "revision": "1ea7e814d400f07f1e8f1778204efc04"
  },
  {
    "url": "snippets/node-on-linux.html",
    "revision": "38143021d69dda773ca17573590ee152"
  },
  {
    "url": "snippets/open-ssl-encrypt-decrypt.html",
    "revision": "3856742d7c59aefef3757d821a90fd56"
  },
  {
    "url": "snippets/setup-vpn-server.html",
    "revision": "7b577610c4b55ef6642ab512acd10c17"
  },
  {
    "url": "snippets/ssh.html",
    "revision": "dc75992e087abbcfe7195892c0423268"
  },
  {
    "url": "snippets/travis-encrypt-files.html",
    "revision": "06c9c42f6381dbbbe07608ab86f93d2b"
  },
  {
    "url": "snippets/travis-firebase.html",
    "revision": "4a18a1581d3654f6361c809f2cc71b87"
  },
  {
    "url": "snippets/travis-github-pages.html",
    "revision": "6d8965b2904cbbec66c5ec2ece4bb73a"
  },
  {
    "url": "tags/appveyor.html",
    "revision": "e235e63f206af0d6b59d423675f248e0"
  },
  {
    "url": "tags/config-files.html",
    "revision": "0b60ac3eff7ad2b5fc1c0d8ca99decfd"
  },
  {
    "url": "tags/email-replies.html",
    "revision": "4b64891dfed7b4aa3a9d6dd803309f5a"
  },
  {
    "url": "tags/firebase.html",
    "revision": "e6211864eee36a095f7afddbffe39925"
  },
  {
    "url": "tags/github.html",
    "revision": "d5fd03dabed8b3ca17fa396f6b7c24f8"
  },
  {
    "url": "tags/google-cloud.html",
    "revision": "c18b02266920d3255557c3f43947c4ab"
  },
  {
    "url": "tags/index.html",
    "revision": "3f5542ba70b10d44d56fba96e7e1e19c"
  },
  {
    "url": "tags/javascript.html",
    "revision": "9493f5520229906b396f6b41a241cfdb"
  },
  {
    "url": "tags/nodejs.html",
    "revision": "9e84556ed47d934bdebbb9af697f8a32"
  },
  {
    "url": "tags/random.html",
    "revision": "2da5842562e7fd8d60c9e0b156b99361"
  },
  {
    "url": "tags/travis.html",
    "revision": "b8954b713b17028048e19873967fa8d3"
  },
  {
    "url": "tags/typescript.html",
    "revision": "e920821e75dc694b7a74f5b473f07200"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
