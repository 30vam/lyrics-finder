// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
// Imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _searchSongs = require("./requestModules/searchSongs");
var _searchSongsDefault = parcelHelpers.interopDefault(_searchSongs);
var _getSongData = require("./requestModules/getSongData");
var _getSongDataDefault = parcelHelpers.interopDefault(_getSongData);
var _getLyrics = require("./requestModules/getLyrics");
var _getLyricsDefault = parcelHelpers.interopDefault(_getLyrics);
var _getVideo = require("./requestModules/getVideo");
var _getVideoDefault = parcelHelpers.interopDefault(_getVideo);
var _doubleRing1X10S200Px200PxSvg = require("./img/Double Ring@1x-1.0s-200px-200px.svg");
var _doubleRing1X10S200Px200PxSvgDefault = parcelHelpers.interopDefault(_doubleRing1X10S200Px200PxSvg);
// Elements
const searchForm = document.querySelector("#search-form");
const searchQueryInput = searchForm.querySelector("#search-query-input");
const infoWrapper = document.querySelector("#info-wrapper");
// Variables
const geniusAccessToken = "NgGLPuC2u63a8o4y1WDu4UNimeMEhPa8oRAl-ekIX37slfle5AUKzEV0oK0ZZo7F";
const youtubeAccessToken = "AIzaSyAY0C1HEvG3MwyIXMpGnws236APRKF4UAg";
const customShadow = "shadow-[0_2px_15px_rgba(0,0,0,0.5)]";
// Functions
const showSpinner = ()=>{
    // Empty the wrapper first
    infoWrapper.replaceChildren();
    // Add spinner and center it
    const spinner = document.createElement("img");
    spinner.setAttribute("src", (0, _doubleRing1X10S200Px200PxSvgDefault.default));
    spinner.setAttribute("alt", "Loading info...");
    spinner.id = "loading-spinner";
    spinner.classList.add("absolute", "w-24", "h-24", "top-1/2", "left-1/2", "translate-x-[-50%]");
    infoWrapper.classList.add("bg-black", customShadow);
    infoWrapper.append(spinner);
};
const removeSpinner = ()=>{
    // Remove spinner
    const spinner = infoWrapper.querySelector("#loading-spinner");
    infoWrapper.classList.remove("bg-black", customShadow);
    spinner.remove();
};
const correctifySongName = (songName)=>{
    const parts = songName.split(/[\[\(]/); // Split at `[` or `(`
    return parts[0]; // Return the part before the split
};
const createSongInfoDiv = (wrapper, hitData, songData)=>{
    const songImg = document.createElement("img");
    songImg.classList.add("rounded-lg", "max-h-[256px]", "m-auto", customShadow);
    songImg.setAttribute("src", hitData.songImageUrl);
    const songInfo = document.createElement("ul");
    songInfo.classList.add("text-center", "flex", "w-full", "flex-col", "justify-evenly", "gap-3", "mt-2", "bg-black", "bg-opacity-35", customShadow, "rounded-xl", "p-4", "mt-4", "backdrop-blur-sm", "md:flex-grow");
    const songTitle = document.createElement("li");
    songTitle.classList.add("font-bold", "md:text-3xl", "text-2xl");
    songTitle.innerText = `${correctifySongName(hitData.title)}`;
    const artistName = document.createElement("li");
    artistName.classList.add("md:text-2xl", "md:font-bold", "font-semibold", "text-xl");
    artistName.innerText = `${hitData.artistName}`;
    const releaseDate = document.createElement("li");
    releaseDate.innerText = `${hitData.releaseDate}`;
    // Show album name only if it exists
    let songAlbum = document.createElement("li");
    if (songData.response.song.album) songAlbum.innerText = `${songData.response.song.album.name}`;
    else songAlbum.innerText = "No album.";
    songInfo.append(songTitle, artistName, releaseDate, songAlbum);
    wrapper.append(songImg);
    wrapper.append(songInfo);
};
const createSongLyricsAndVideo = (wrapper, lyrics, songVideoData)=>{
    const videoId = songVideoData.items[0].id.videoId;
    const video = document.createElement("iframe");
    video.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    video.setAttribute("allowfullscreen", true);
    video.classList.add("w-full", "mb-4", "rounded-t-lg", "aspect-video");
    const lyricsWrapper = document.createElement("p");
    lyricsWrapper.classList.add("text-center", "p-2");
    lyricsWrapper.innerText = lyrics;
    wrapper.append(video, lyricsWrapper);
};
const displaySongWrapper = async (hitData)=>{
    // Send the needed get requests first
    const songNameForLyricsApi = `${hitData.artistName} - ${correctifySongName(hitData.title)}`;
    showSpinner();
    const songData = await (0, _getSongDataDefault.default)(hitData.id, geniusAccessToken);
    const songVideoData = await (0, _getVideoDefault.default)(`${hitData.artistName} - ${hitData.title}`, 1, youtubeAccessToken);
    const lyrics = await (0, _getLyricsDefault.default)(songNameForLyricsApi);
    removeSpinner();
    // Create the necessary divs for displaying and fill them with the recieved data
    const songInfoAndImageWrapper = document.createElement("div");
    songInfoAndImageWrapper.classList.add("md:h-full", "md:w-[256px]", "rounded-xl", "text-lg", "flex", "flex-col", "items-center", "md-semibold");
    const lyricsWrapper = document.createElement("div");
    lyricsWrapper.classList.add("md:text-left", "md:overflow-y-auto", "text-sm", "md:text-lg", "w-full", "lg:w-1/2", "hidden-scrollbar", "bg-black", "bg-opacity-35", customShadow, "rounded-xl", "backdrop-blur-sm");
    createSongInfoDiv(songInfoAndImageWrapper, hitData, songData);
    createSongLyricsAndVideo(lyricsWrapper, lyrics, songVideoData);
    // Change grid properties when showing song info
    infoWrapper.classList.remove("search-result-grid");
    infoWrapper.classList.add("song-info-flexbox");
    infoWrapper.append(songInfoAndImageWrapper, lyricsWrapper);
};
const returnHitData = (hit)=>{
    const hitData = {
        id: hit.result.id,
        type: hit.type,
        title: hit.result.title,
        artistName: hit.result.artist_names,
        songImageThumbnailUrl: hit.result.header_image_thumbnail_url,
        songImageUrl: hit.result.header_image_url,
        artistHeaderImageUrl: hit.result.primary_artist.header_image_url,
        artistImageUrl: hit.result.primary_artist.header_image_url,
        releaseDate: hit.result.release_date_with_abbreviated_month_for_display
    };
    return hitData;
};
const createNewSearchResult = (hitData)=>{
    const newItem = document.createElement("div");
    newItem.classList.add("rounded-2xl", "relative", customShadow, "overflow-clip", "min-w-[256px]", "h-[256px]");
    const itemThumbnail = document.createElement("img");
    itemThumbnail.classList.add("w-full", "hover:scale-125", "transition-all");
    itemThumbnail.setAttribute("src", hitData.songImageUrl);
    const songInfo = document.createElement("div");
    songInfo.classList.add("backdrop-blur-[2px]", "hardware-accelerated-blur", "text-base", "bg-black", "bg-opacity-20", "hover:bg-opacity-40", "shadow-[0px_4px_16px_rgba(17,17,26,0.5),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]", "hover:text-orange-500", "hover:cursor-pointer", "transition-all", "w-full", "h-fit", "p-2", "text-center", "absolute", "bottom-0");
    songInfo.innerText = `${hitData.artistName} - ${hitData.releaseDate}`;
    const songTitle = document.createElement("div");
    songTitle.classList.add("font-bold", "text-xl", "mb-2");
    songTitle.innerText = hitData.title;
    // Event Listeners
    songInfo.addEventListener("click", ()=>displaySongWrapper(hitData));
    // Append elements to wrappers
    songInfo.prepend(songTitle);
    newItem.append(itemThumbnail);
    newItem.append(songInfo);
    return newItem;
};
const displaySearchResults = (searchResults)=>{
    const hits = searchResults.response.hits;
    // Change grid properties when showing song info (different layout)
    infoWrapper.classList.remove("song-info-flexbox");
    infoWrapper.classList.add("search-result-grid");
    for (const hit of hits){
        const hitData = returnHitData(hit);
        const newSearchResult = createNewSearchResult(hitData);
        infoWrapper.append(newSearchResult);
    }
};
const handleSearchRequest = async (event)=>{
    console.log("Handling search query...");
    event.preventDefault();
    showSpinner();
    const searchQuery = searchQueryInput.value;
    const searchResults = await (0, _searchSongsDefault.default)(searchQuery, geniusAccessToken); // We need to use await here, otherwise it will return the async FUNCTION instead of data, async functions ALWAYS return promise without waiting, so we need to use await
    // Show a text if results were empty
    if (searchResults.response.hits.length === 0) {
        const errorText = document.createElement("div");
        errorText.classList.add("text-lg", "md:text-2xl", "self-center", "px-4", "text-center", "col-span-full");
        errorText.innerText = `No results were found for '${searchQuery}'.`;
        infoWrapper.innerText = ""; // Removes the spinner
        infoWrapper.append(errorText);
    } else removeSpinner();
    displaySearchResults(searchResults);
};
// Events
searchForm.addEventListener("submit", (e)=>handleSearchRequest(e));

},{"./requestModules/searchSongs":"jBUqz","./requestModules/getSongData":"8icSn","./requestModules/getLyrics":"52zQ6","./requestModules/getVideo":"8k0v8","./img/Double Ring@1x-1.0s-200px-200px.svg":"8RynB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBUqz":[function(require,module,exports) {
const searchEndpoint = "https://api.genius.com/search?q=";
module.exports = async (searchQuery, accessToken)=>{
    const requestUrl = `${searchEndpoint}${encodeURIComponent(searchQuery)}&access_token=${accessToken}`;
    try {
        const response = await fetch(requestUrl);
        if (!response.ok) throw new Error(`Search API Error:\n Status code: ${response.status}`);
        const data = await response.json();
        console.log(`Search results for '${searchQuery}':`);
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error trying to fetch from Search API:", error);
        return error;
    }
};

},{}],"8icSn":[function(require,module,exports) {
const songEndpoint = "https://api.genius.com/songs/";
module.exports = async (songId, accessToken)=>{
    const requestUrl = `${songEndpoint}${songId}?access_token=${accessToken}`;
    try {
        const response = await fetch(requestUrl);
        if (!response.ok) throw new Error(`Error trying to get song data - status code: ${response.status}`);
        const data = await response.json();
        console.log(`Song data for '${songId}':`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

},{}],"52zQ6":[function(require,module,exports) {
module.exports = async (songTitle)=>{
    const url = `https://some-random-api.com/lyrics?title=${songTitle}`;
    try {
        let result;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const lyrics = data.lyrics;
        if (data.lyrics) result = `${data.lyrics}`;
        else result = "Sorry, no lyrics available for this song.";
        console.log(`Lyrics for ${songTitle}:`);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return `Sorry, no lyrics are currently available for this song...`;
    }
};

},{}],"8k0v8":[function(require,module,exports) {
const youtubeSearchEndpoint = "https://www.googleapis.com/youtube/v3/search";
module.exports = async (searchQuery, maxResult, accessToken)=>{
    const requestUrl = `${youtubeSearchEndpoint}?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResult}&key=${accessToken}`;
    try {
        const response = await fetch(requestUrl);
        if (!response.ok) throw new Error(`Error when trying to find youtube video: ${response.status}`);
        const data = await response.json();
        console.log(`Video search result for '${searchQuery}':`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

},{}],"8RynB":[function(require,module,exports) {
module.exports = require("530e74bb2c5f399e").getBundleURL("bLxZJ") + "Double Ring@1x-1.0s-200px-200px.23e782df.svg" + "?" + Date.now();

},{"530e74bb2c5f399e":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["farZc","8lqZg"], "8lqZg", "parcelRequire981d")

//# sourceMappingURL=index.975ef6c8.js.map
