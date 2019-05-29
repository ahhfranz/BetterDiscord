var Core =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/config.js":
/*!****************************!*\
  !*** ./src/data/config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    local: false,
    localServer: "//localhost:8080",
    minified: true,
    version: "0.3.0",
    branch: "master",
    repo: "rauenzi",
    minSupportedVersion: "0.3.0",
    bbdVersion: "0.2.17"
});

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: SettingsInfo, SettingsCookie, Config, PluginCookie, ThemeCookie, Themes, Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/data/settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsInfo", function() { return _settings__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _settingscookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingscookie */ "./src/data/settingscookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsCookie", function() { return _settingscookie__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/data/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _plugincookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugincookie */ "./src/data/plugincookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginCookie", function() { return _plugincookie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _themecookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themecookie */ "./src/data/themecookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeCookie", function() { return _themecookie__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes */ "./src/data/themes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Themes", function() { return _themes__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins */ "./src/data/plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _plugins__WEBPACK_IMPORTED_MODULE_6__["default"]; });











/***/ }),

/***/ "./src/data/plugincookie.js":
/*!**********************************!*\
  !*** ./src/data/plugincookie.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/data/plugins.js":
/*!*****************************!*\
  !*** ./src/data/plugins.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/data/settings.js":
/*!******************************!*\
  !*** ./src/data/settings.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "Custom css live update":     {id: "bda-css-0", info: "",                                                  implemented: true,  hidden: true,  cat: "core"},
    "Custom css auto udpate":     {id: "bda-css-1", info: "",                                                  implemented: true,  hidden: true,  cat: "core"},
    "BetterDiscord Blue":         {id: "bda-gs-b",  info: "Replace Discord blue with BD Blue",                 implemented: false,  hidden: false, cat: "core"},

    /* Core */
    /* ====== */
    "Public Servers":             {id: "bda-gs-1",  info: "Display public servers button",                     implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Minimal Mode":               {id: "bda-gs-2",  info: "Hide elements and reduce the size of elements.",    implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Voice Mode":                 {id: "bda-gs-4",  info: "Only show voice chat",                              implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Hide Channels":              {id: "bda-gs-3",  info: "Hide channels in minimal mode",                     implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Dark Mode":                  {id: "bda-gs-5",  info: "Make certain elements dark by default(wip)",        implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Voice Disconnect":           {id: "bda-dc-0",  info: "Disconnect from voice server when closing Discord", implemented: true,  hidden: false, cat: "core", category: "modules"},
    "24 Hour Timestamps":         {id: "bda-gs-6",  info: "Replace 12hr timestamps with proper ones",          implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Coloured Text":              {id: "bda-gs-7",  info: "Make text colour the same as role colour",          implemented: true,  hidden: false, cat: "core", category: "modules"},
    "Normalize Classes":          {id: "fork-ps-4", info: "Adds stable classes to elements to help themes. (e.g. adds .da-channels to .channels-Ie2l6A)", implemented: true,  hidden: false, cat: "core", category: "modules"},

    /* Content */
    "Content Error Modal":        {id: "fork-ps-1", info: "Shows a modal with plugin/theme errors", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Show Toasts":                {id: "fork-ps-2", info: "Shows a small notification for important information", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Scroll To Settings":         {id: "fork-ps-3", info: "Auto-scrolls to a plugin's settings when the button is clicked (only if out of view)", implemented: true,  hidden: false, cat: "core", category: "content manager"},
    "Automatic Loading":          {id: "fork-ps-5", info: "Automatically loads, reloads, and unloads plugins and themes", implemented: true,  hidden: false, cat: "core", category: "content manager"},

    /* Developer */
    "Developer Mode":         	  {id: "bda-gs-8",  info: "Developer Mode",                                    implemented: true,  hidden: false, cat: "core", category: "developer settings"},
    "Copy Selector":			  {id: "fork-dm-1", info: "Adds a \"Copy Selector\" option to context menus when developer mode is active", implemented: true,  hidden: false, cat: "core", category: "developer settings"},

    /* Window Prefs */
    "Enable Transparency":        {id: "fork-wp-1", info: "Enables the main window to be see-through (requires restart)", implemented: true,  hidden: false, cat: "core", category: "window preferences"},
    "Window Frame":               {id: "fork-wp-2", info: "Adds the native os window frame to the main window", implemented: false,  hidden: true, cat: "core", category: "window preferences"},


    /* Emotes */
    /* ====== */
    "Download Emotes":            {id: "fork-es-3", info: "Download emotes when the cache is expired", implemented: true,  hidden: false, cat: "emote"},
    "Twitch Emotes":              {id: "bda-es-7",  info: "Show Twitch emotes",                                implemented: true,  hidden: false, cat: "emote"},
    "FrankerFaceZ Emotes":        {id: "bda-es-1",  info: "Show FrankerFaceZ Emotes",                          implemented: true,  hidden: false, cat: "emote"},
    "BetterTTV Emotes":           {id: "bda-es-2",  info: "Show BetterTTV Emotes",                             implemented: true,  hidden: false, cat: "emote"},
    "Emote Menu":                 {id: "bda-es-0",  info: "Show Twitch/Favourite emotes in emote menu",        implemented: true,  hidden: false, cat: "emote"},
    "Emoji Menu":                 {id: "bda-es-9",  info: "Show Discord emoji menu",                           implemented: true,  hidden: false, cat: "emote"},
    "Emote Auto Capitalization":  {id: "bda-es-4",  info: "Autocapitalize emote commands",                     implemented: true,  hidden: false, cat: "emote"},
    "Show Names":                 {id: "bda-es-6",  info: "Show emote names on hover",                         implemented: true,  hidden: false, cat: "emote"},
    "Show emote modifiers":       {id: "bda-es-8",  info: "Enable emote mods (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)", implemented: true,  hidden: false, cat: "emote"},
    "Animate On Hover":           {id: "fork-es-2", info: "Only animate the emote modifiers on hover", implemented: true,  hidden: false, cat: "emote"}
});

/***/ }),

/***/ "./src/data/settingscookie.js":
/*!************************************!*\
  !*** ./src/data/settingscookie.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "bda-gs-1": true,
    "bda-gs-2": false,
    "bda-gs-3": false,
    "bda-gs-4": false,
    "bda-gs-5": true,
    "bda-gs-6": false,
    "bda-gs-7": false,
    "bda-gs-8": false,
    "bda-es-0": true,
    "bda-es-1": true,
    "bda-es-2": true,
    "bda-es-4": false,
    "bda-es-6": true,
    "bda-es-7": true,
    "bda-gs-b": false,
    "bda-es-8": true,
    "bda-dc-0": false,
    "bda-css-0": false,
    "bda-css-1": false,
    "bda-es-9": true,
    "fork-dm-1": false,
    "fork-ps-1": true,
    "fork-ps-2": true,
    "fork-ps-3": true,
    "fork-ps-4": true,
    "fork-ps-5": true,
    "fork-es-2": false,
    "fork-es-3": true,
    "fork-wp-1": false,
    "fork-wp-2": false
});

/***/ }),

/***/ "./src/data/themecookie.js":
/*!*********************************!*\
  !*** ./src/data/themecookie.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/data/themes.js":
/*!****************************!*\
  !*** ./src/data/themes.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreWrapper; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
/* harmony import */ var _modules_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/core */ "./src/modules/core.js");
/* harmony import */ var _modules_pluginapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pluginapi */ "./src/modules/pluginapi.js");
/* harmony import */ var _modules_pluginmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _modules_thememanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/thememanager */ "./src/modules/thememanager.js");







// Perform some setup
Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["default"])();
const loadingIcon = document.createElement("div");
loadingIcon.className = "bd-loaderv2";
loadingIcon.title = "BandagedBD is loading...";
document.body.appendChild(loadingIcon);

// window.Core = Core;
window.BdApi = _modules_pluginapi__WEBPACK_IMPORTED_MODULE_3__["default"];
window.settings = data__WEBPACK_IMPORTED_MODULE_0__["SettingsInfo"];
window.settingsCookie = data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"];
window.pluginCookie = data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"];
window.themeCookie = data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"];
window.pluginModule = _modules_pluginmanager__WEBPACK_IMPORTED_MODULE_4__["default"];
window.themeModule = _modules_thememanager__WEBPACK_IMPORTED_MODULE_5__["default"];
window.bdthemes = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
window.bdplugins = data__WEBPACK_IMPORTED_MODULE_0__["Themes"];

class CoreWrapper {
    constructor(config) {
        _modules_core__WEBPACK_IMPORTED_MODULE_2__["default"].setConfig(config);
    }

    init() {
        _modules_core__WEBPACK_IMPORTED_MODULE_2__["default"].init();
    }
}

// var settingsPanel, emoteModule, quickEmoteMenu, voiceMode,, dMode, publicServersModule;
// var bdConfig = null;

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Localstorage fix */
/* harmony default export */ __webpack_exports__["default"] = (function() {

    const fs = __webpack_require__(/*! fs */ "fs");
    const platform = process.platform;
    const dataPath = (platform === "win32" ? process.env.APPDATA : platform === "darwin" ? process.env.HOME + "/Library/Preferences" : process.env.HOME + "/.config") + "/BetterDiscord/";
    const localStorageFile = "localStorage.json";

    let data = {};
    if (fs.existsSync(`${dataPath}${localStorageFile}`)) {
        try {
            data = JSON.parse(fs.readFileSync(`${dataPath}${localStorageFile}`));
        }
        catch (err) {
            console.log(err);
        }
    }
    else if (fs.existsSync(localStorageFile)) {
        try {
            data = JSON.parse(fs.readFileSync(localStorageFile));
        }
        catch (err) {
            console.log(err);
        }
    }

    const storage = data;
    storage.setItem = function(i, v) {
        storage[i] = v;
        this.save();
    };
    storage.getItem = function(i) {
        return storage[i] || null;
    };
    storage.save = function() {
        fs.writeFileSync(`${dataPath}${localStorageFile}`, JSON.stringify(this), null, 4);
    };

    const lsProxy = new Proxy(storage, {
        set: function(target, name, val) {
            storage[name] = val;
            storage.save();
        },
        get: function(target, name) {
            return storage[name] || null;
        }
    });

    window.localStorage = lsProxy;

});

/***/ }),

/***/ "./src/modules/bdv2.js":
/*!*****************************!*\
  !*** ./src/modules/bdv2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");


// import BDLogo from "../ui/icons/bdlogo";

/* harmony default export */ __webpack_exports__["default"] = (new class V2 {

    constructor() {
        this.editorDetached = false;
        this.WebpackModules = (() => {
            const req = webpackJsonp.push([[], {__extra_id__: (module, exports, req) => module.exports = req}, [["__extra_id__"]]]);
            delete req.m.__extra_id__;
            delete req.c.__extra_id__;
            const find = (filter) => {
                for (let i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        let m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default)) return m.default;
                        if (m && filter(m))	return m;
                    }
                }
                console.warn("Cannot find loaded module in cache");
                return null;
            };

            const findAll = (filter) => {
                const modules = [];
                for (let i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        let m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default)) modules.push(m.default);
                        else if (m && filter(m)) modules.push(m);
                    }
                }
                return modules;
            };

            const findByUniqueProperties = (propNames) => find(module => propNames.every(prop => module[prop] !== undefined));
            const findByPrototypes = (protoNames) => find(module => module.prototype && protoNames.every(protoProp => module.prototype[protoProp] !== undefined));
            const findByDisplayName = (displayName) => find(module => module.displayName === displayName);

            return {find, findAll, findByUniqueProperties, findByPrototypes, findByDisplayName};
        })();

        this.internal = {
            react: this.WebpackModules.findByUniqueProperties(["Component", "PureComponent", "Children", "createElement", "cloneElement"]),
            reactDom: this.WebpackModules.findByUniqueProperties(["findDOMNode"])
        };
        this.getInternalInstance = e => e[Object.keys(e).find(k => k.startsWith("__reactInternalInstance"))];
    }

    initialize() {
        // BdApi.suppressErrors(this.patchSocial.bind(this), "BD Social Patch")();
        _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchGuildPills.bind(this), "BD Guild Pills Patch")();
        _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchGuildListItems.bind(this), "BD Guild List Items Patch")();
        _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(this.patchGuildSeparator.bind(this), "BD Guild Separator Patch")();
    }

    get react() {return this.internal.react;}
    get reactDom() {return this.internal.reactDom;}
    get reactComponent() {return this.internal.react.Component;}

    get messageClasses() {return this.WebpackModules.findByUniqueProperties(["message", "containerCozy"]);}
    get guildClasses() {
		const guildsWrapper = this.WebpackModules.findByUniqueProperties(["wrapper", "unreadMentionsBar"]);
        const guilds = this.WebpackModules.findByUniqueProperties(["guildsError", "selected"]);
        const pill = this.WebpackModules.findByUniqueProperties(["blobContainer"]);
        return Object.assign({}, guildsWrapper, guilds, pill);
	}

    get MessageContentComponent() {return this.WebpackModules.find(m => m.defaultProps && m.defaultProps.hasOwnProperty("disableButtons"));}
    get TimeFormatter() {return this.WebpackModules.findByUniqueProperties(["dateFormat"]);}
    get TooltipWrapper() {return this.WebpackModules.findByDisplayName("TooltipDeprecated");}
    get NativeModule() {return this.WebpackModules.findByUniqueProperties(["setBadge"]);}
    get Tooltips() {return this.WebpackModules.find(m => m.hide && m.show && !m.search && !m.submit && !m.search && !m.activateRagingDemon && !m.dismiss);}
    get KeyGenerator() {return this.WebpackModules.find(m => m.toString && /"binary"/.test(m.toString()));}

    parseSettings(cat) {
        return Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["SettingsInfo"]).reduce((arr, key) => {
            let setting = data__WEBPACK_IMPORTED_MODULE_0__["SettingsInfo"][key];
            if (setting.cat === cat && setting.implemented && !setting.hidden) {
                setting.text = key;
                arr.push(setting);
            } return arr;
        }, []);
    }

    // patchSocial() {
    //     if (this.socialPatch) return;
    //     const TabBar = BdApi.findModule(m => m.displayName == "TabBar");
    //     const Anchor = BdApi.findModule(m => m.displayName == "Anchor");
    //     if (!TabBar || !Anchor) return;
    //     this.socialPatch = BdApi.monkeyPatch(TabBar.prototype, "render", {after: (data) => {
    //         const children = data.returnValue.props.children;
    //         if (!children || !children.length) return;
    //         if (children[children.length - 2].type.displayName !== "Separator") return;
    //         if (!children[children.length - 1].type.toString().includes("socialLinks")) return;
    //         const original = children[children.length - 1].type;
    //         const newOne = function() {
    //             const returnVal = original(...arguments);
    //             returnVal.props.children.push(BdApi.React.createElement(Anchor, {className: "bd-social-link", href: "https://github.com/rauenzi/BetterDiscordApp", rel: "author", title: "BandagedBD", target: "_blank"},
    //                 BdApi.React.createElement(BDLogo, {size: "16px", className: "bd-social-logo"})
    //             ));
    //             return returnVal;
    //         };
    //         children[children.length - 1].type = newOne;
    //     }});
    // }

    patchGuildListItems() {
        if (this.guildListItemsPatch) return;
        const listItemClass = this.guildClasses.listItem.split(" ")[0];
        const blobClass = this.guildClasses.blobContainer.split(" ")[0];
        const reactInstance = _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].getInternalInstance(document.querySelector(`.${listItemClass} .${blobClass}`).parentElement);
        const GuildComponent = reactInstance.return.type;
        if (!GuildComponent) return;
        this.guildListItemsPatch = _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(GuildComponent.prototype, "render", {after: (data) => {
            const returnValue = data.returnValue;
            const guildData = data.thisObject.props;
            returnValue.props.className += " bd-guild";
            if (guildData.unread) returnValue.props.className += " bd-unread";
            if (guildData.selected) returnValue.props.className += " bd-selected";
            if (guildData.audio) returnValue.props.className += " bd-audio";
            if (guildData.video) returnValue.props.className += " bd-video";
            if (guildData.badge) returnValue.props.className += " bd-badge";
            if (guildData.animatable) returnValue.props.className += " bd-animatable";
            return returnValue;
        }});
    }

    patchGuildPills() {
        if (this.guildPillPatch) return;
        const guildPill = _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].findModule(m => m.default && m.default.toString && m.default.toString().includes("translate3d"));
        if (!guildPill) return;
        this.guildPillPatch = _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(guildPill, "default", {after: (data) => {
            const props = data.methodArguments[0];
            if (props.unread) data.returnValue.props.className += " bd-unread";
            if (props.selected) data.returnValue.props.className += " bd-selected";
            if (props.hovered) data.returnValue.props.className += " bd-hovered";
            return data.returnValue;
        }});
    }

    patchGuildSeparator() {
        if (this.guildSeparatorPatch) return;
        const Guilds = _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].findModuleByDisplayName("Guilds");
        const guildComponents = _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].findModuleByProps("renderListItem");
        if (!guildComponents || !Guilds) return;
        const GuildSeparator = function() {
            const returnValue = guildComponents.Separator(...arguments);
            returnValue.props.className += " bd-guild-separator";
            return returnValue;
        };
        this.guildSeparatorPatch = _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(Guilds.prototype, "render", {after: (data) => {
            data.returnValue.props.children[1].props.children[3].type = GuildSeparator;
        }});
    }

});

/***/ }),

/***/ "./src/modules/classnormalizer.js":
/*!****************************************!*\
  !*** ./src/modules/classnormalizer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");


const normalizedPrefix = "da";
const randClass = new RegExp(`^(?!${normalizedPrefix}-)((?:[A-Za-z]|[0-9]|-)+)-(?:[A-Za-z]|[0-9]|-|_){6}$`);

/* harmony default export */ __webpack_exports__["default"] = (new class ClassNormalizer {
    get id() {return "fork-ps-4";}
    get name() {return "ClassNormalizer";}

    stop() {
        if (!this.hasPatched) return;
        this.unpatchClassModules(_pluginapi__WEBPACK_IMPORTED_MODULE_0__["default"].findAllModules(this.moduleFilter.bind(this)));
        this.revertElement(document.querySelector("#app-mount"));
        this.hasPatched = false;
    }

    start() {
        if (this.hasPatched) return;
        this.patchClassModules(_pluginapi__WEBPACK_IMPORTED_MODULE_0__["default"].findAllModules(this.moduleFilter.bind(this)));
        this.normalizeElement(document.querySelector("#app-mount"));
        this.hasPatched = true;
    }

    patchClassModules(modules) {
        for (const module of modules) {
            this.patchClassModule(normalizedPrefix, module);
        }
    }

    unpatchClassModules(modules) {
        for (const module of modules) {
            this.unpatchClassModule(normalizedPrefix, module);
        }
    }

    shouldIgnore(value) {
        if (!isNaN(value)) return true;
        if (value.endsWith("px") || value.endsWith("ch") || value.endsWith("em") || value.endsWith("ms")) return true;
        if (value.startsWith("layerContainer-")) return true;
        if (value.startsWith("#") && (value.length == 7 || value.length == 4)) return true;
        if (value.includes("calc(") || value.includes("rgba")) return true;
        return false;
    }

    moduleFilter(module) {
        if (typeof module !== "object" || Array.isArray(module)) return false;
        if (module.__esModule) return false;
        if (!Object.keys(module).length) return false;
        for (const baseClassName in module) {
            const value = module[baseClassName];
            if (typeof value !== "string") return false;
            if (this.shouldIgnore(value)) continue;
            if (value.split("-").length === 1) return false;
            if (!randClass.test(value.split(" ")[0])) return false;
        }

        return true;
    }

    patchClassModule(componentName, classNames) {
        for (const baseClassName in classNames) {
            const value = classNames[baseClassName];
            if (this.shouldIgnore(value)) continue;
            const classList = value.split(" ");
            for (const normalClass of classList) {
                const match = normalClass.match(randClass)[1];
                if (!match) continue; // Shouldn't ever happen since they passed the moduleFilter, but you never know
                const camelCase = match.split("-").map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s).join("");
                classNames[baseClassName] += ` ${componentName}-${camelCase}`;
            }
        }
    }

    unpatchClassModule(componentName, classNames) {
        for (const baseClassName in classNames) {
            const value = classNames[baseClassName];
            if (this.shouldIgnore(value)) continue;
            let newString = "";
            const classList = value.split(" ");
            for (const normalClass of classList) {
                if (normalClass.startsWith(`${componentName}-`)) continue;
                newString += ` ${normalClass}`;
            }
            classNames[baseClassName] = newString.trim();
        }
    }

    normalizeElement(element) {
        if (!(element instanceof Element)) return;
        const classes = element.classList;
        for (let c = 0, clen = classes.length; c < clen; c++) {
            if (!randClass.test(classes[c])) continue;
            const match = classes[c].match(randClass)[1];
            const newClass = match.split("-").map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s).join("");
            element.classList.add(`${normalizedPrefix}-${newClass}`);
        }
        for (const child of element.children) this.normalizeElement(child);
    }

    revertElement(element) {
        if (!(element instanceof Element)) return;
        if (element.children && element.children.length) this.revertElement(element.children[0]);
        if (element.nextElementSibling) this.revertElement(element.nextElementSibling);
        const classes = element.classList;
        const toRemove = [];
        for (let c = 0; c < classes.length; c++) {
            if (classes[c].startsWith(`${normalizedPrefix}-`)) toRemove.push(classes[c]);
        }
        element.classList.remove(...toRemove);
    }

});

/***/ }),

/***/ "./src/modules/contentmanager.js":
/*!***************************************!*\
  !*** ./src/modules/contentmanager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thememanager */ "./src/modules/thememanager.js");





const path = __webpack_require__(/*! path */ "path");
const fs = __webpack_require__(/*! fs */ "fs");
const Module = __webpack_require__(/*! module */ "module").Module;
Module.globalPaths.push(path.resolve(__webpack_require__(/*! electron */ "electron").remote.app.getAppPath(), "node_modules"));
class MetaError extends Error {
    constructor(message) {
        super(message);
        this.name = "MetaError";
    }
}
const originalJSRequire = Module._extensions[".js"];
const originalCSSRequire = Module._extensions[".css"] ? Module._extensions[".css"] : () => {return null;};

/* harmony default export */ __webpack_exports__["default"] = (new class ContentManager {

    constructor() {
        this.timeCache = {};
        this.watchers = {};
        Module._extensions[".js"] = this.getContentRequire("plugin");
        Module._extensions[".css"] = this.getContentRequire("theme");
    }

    get pluginsFolder() {return this._pluginsFolder || (this._pluginsFolder = fs.realpathSync(path.resolve(data__WEBPACK_IMPORTED_MODULE_0__["Config"].dataPath + "plugins/")));}
    get themesFolder() {return this._themesFolder || (this._themesFolder = fs.realpathSync(path.resolve(data__WEBPACK_IMPORTED_MODULE_0__["Config"].dataPath + "themes/")));}

    watchContent(contentType) {
        if (this.watchers[contentType]) return;
        const isPlugin = contentType === "plugin";
        const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
        const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
        this.watchers[contentType] = fs.watch(baseFolder, {persistent: false}, async (eventType, filename) => {
            if (!eventType || !filename || !filename.endsWith(fileEnding)) return;
            await new Promise(r => setTimeout(r, 50));
            try {fs.statSync(path.resolve(baseFolder, filename));}
            catch (err) {
                if (err.code !== "ENOENT") return;
                delete this.timeCache[filename];
                if (isPlugin) return _pluginmanager__WEBPACK_IMPORTED_MODULE_2__["default"].unloadPlugin(filename);
                return _thememanager__WEBPACK_IMPORTED_MODULE_3__["default"].unloadTheme(filename);
            }
            if (!fs.statSync(path.resolve(baseFolder, filename)).isFile()) return;
            const stats = fs.statSync(path.resolve(baseFolder, filename));
            if (!stats || !stats.mtime || !stats.mtime.getTime()) return;
            if (typeof(stats.mtime.getTime()) !== "number") return;
            if (this.timeCache[filename] == stats.mtime.getTime()) return;
            this.timeCache[filename] = stats.mtime.getTime();
            if (eventType == "rename") {
                if (isPlugin) _pluginmanager__WEBPACK_IMPORTED_MODULE_2__["default"].loadPlugin(filename);
                else _thememanager__WEBPACK_IMPORTED_MODULE_3__["default"].loadTheme(filename);
            }
            if (eventType == "change") {
                if (isPlugin) _pluginmanager__WEBPACK_IMPORTED_MODULE_2__["default"].reloadPlugin(filename);
                else _thememanager__WEBPACK_IMPORTED_MODULE_3__["default"].reloadTheme(filename);
            }
        });
    }

    unwatchContent(contentType) {
        if (!this.watchers[contentType]) return;
        this.watchers[contentType].close();
        delete this.watchers[contentType];
    }

    extractMeta(content) {
        const meta = content.split("\n")[0];
        const rawMeta = meta.substring(meta.lastIndexOf("//META") + 6, meta.lastIndexOf("*//"));
        if (meta.indexOf("META") < 0) throw new MetaError("META was not found.");
        if (!_utilities__WEBPACK_IMPORTED_MODULE_1__["default"].testJSON(rawMeta)) throw new MetaError("META could not be parsed.");

        const parsed = JSON.parse(rawMeta);
        if (!parsed.name) throw new MetaError("META missing name data.");
        return parsed;
    }

    getContentRequire(type) {
        const isPlugin = type === "plugin";
        const self = this;
        const originalRequire = isPlugin ? originalJSRequire : originalCSSRequire;
        return function(module, filename) {
            const baseFolder = isPlugin ? self.pluginsFolder : self.themesFolder;
            const possiblePath = path.resolve(baseFolder, path.basename(filename));
            if (!fs.existsSync(possiblePath) || filename !== fs.realpathSync(possiblePath)) return Reflect.apply(originalRequire, this, arguments);
            let content = fs.readFileSync(filename, "utf8");
            content = _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].stripBOM(content);

            const meta = self.extractMeta(content);
            meta.filename = path.basename(filename);
            if (!isPlugin) {
                meta.css = content.split("\n").slice(1).join("\n");
                content = `module.exports = ${JSON.stringify(meta)};`;
            }
            if (isPlugin) {
                content += `\nmodule.exports = ${JSON.stringify(meta)};\nmodule.exports.type = ${meta.name};`;
            }
            module._compile(content, filename);
        };
    }

    makePlaceholderPlugin(data) {
        return {plugin: {
                start: () => {},
                getName: () => {return data.name || data.filename;},
                getAuthor: () => {return "???";},
                getDescription: () => {return data.message ? data.message : "This plugin was unable to be loaded. Check the author's page for updates.";},
                getVersion: () => {return "???";}
            },
            name: data.name || data.filename,
            filename: data.filename,
            source: data.source ? data.source : "",
            website: data.website ? data.website : ""
        };
    }

    loadContent(filename, type) {
        if (typeof(filename) === "undefined" || typeof(type) === "undefined") return;
        const isPlugin = type === "plugin";
        const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
        try {require(path.resolve(baseFolder, filename));}
        catch (error) {return {name: filename, file: filename, message: "Could not be compiled.", error: {message: error.message, stack: error.stack}};}
        const content = require(path.resolve(baseFolder, filename));
        if (isPlugin) {
            if (!content.type) return;
            try {
                content.plugin = new content.type();
                delete data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][content.plugin.getName()];
                data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][content.plugin.getName()] = content;
            }
            catch (error) {return {name: filename, file: filename, message: "Could not be constructed.", error: {message: error.message, stack: error.stack}};}
        }
        else {
            delete data__WEBPACK_IMPORTED_MODULE_0__["Themes"][content.name];
            data__WEBPACK_IMPORTED_MODULE_0__["Themes"][content.name] = content;
        }
    }

    unloadContent(filename, type) {
        if (typeof(filename) === "undefined" || typeof(type) === "undefined") return;
        const isPlugin = type === "plugin";
        const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
        try {
            delete require.cache[require.resolve(path.resolve(baseFolder, filename))];
        }
        catch (err) {return {name: filename, file: filename, message: "Could not be unloaded.", error: {message: err.message, stack: err.stack}};}
    }

    isLoaded(filename, type) {
        const isPlugin = type === "plugin";
        const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
        try {require.cache[require.resolve(path.resolve(baseFolder, filename))];}
        catch (err) {return false;}
        return true;
    }

    reloadContent(filename, type) {
        const cantUnload = this.unloadContent(filename, type);
        if (cantUnload) return cantUnload;
        return this.loadContent(filename, type);
    }

    loadNewContent(type) {
        const isPlugin = type === "plugin";
        const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
        const basedir = isPlugin ? this.pluginsFolder : this.themesFolder;
        const files = fs.readdirSync(basedir);
        const contentList = Object.values(isPlugin ? data__WEBPACK_IMPORTED_MODULE_0__["Plugins"] : data__WEBPACK_IMPORTED_MODULE_0__["Themes"]);
        const removed = contentList.filter(t => !files.includes(t.filename)).map(c => isPlugin ? c.plugin.getName() : c.name);
        const added = files.filter(f => !contentList.find(t => t.filename == f) && f.endsWith(fileEnding) && fs.statSync(path.resolve(basedir, f)).isFile());
        return {added, removed};
    }

    loadAllContent(type) {
        const isPlugin = type === "plugin";
        const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
        const basedir = isPlugin ? this.pluginsFolder : this.themesFolder;
        const errors = [];
        const files = fs.readdirSync(basedir);

        for (const filename of files) {
            if (!fs.statSync(path.resolve(basedir, filename)).isFile() || !filename.endsWith(fileEnding)) continue;
            const error = this.loadContent(filename, type);
            if (error) errors.push(error);
        }

        return errors;
    }

    loadPlugins() {return this.loadAllContent("plugin");}
    loadThemes() {return this.loadAllContent("theme");}
});

/***/ }),

/***/ "./src/modules/core.js":
/*!*****************************!*\
  !*** ./src/modules/core.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bdv2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdv2 */ "./src/modules/bdv2.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _emotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotes */ "./src/modules/emotes.js");
/* harmony import */ var _emotemenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emotemenu */ "./src/modules/emotemenu.js");
/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thememanager */ "./src/modules/thememanager.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _publicservers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publicservers */ "./src/modules/publicservers.js");
/* harmony import */ var _settingspanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settingspanel */ "./src/modules/settingspanel.js");





// import VoiceMode from "./voicemode";
// import DevMode from "./devmode";






function Core() {
}

Core.prototype.setConfig = function(config) {
    Object.assign(data__WEBPACK_IMPORTED_MODULE_2__["Config"], config);
};

Core.prototype.init = async function() {
    if (data__WEBPACK_IMPORTED_MODULE_2__["Config"].version < data__WEBPACK_IMPORTED_MODULE_2__["Config"].minSupportedVersion) {
        this.alert("Not Supported", "BetterDiscord v" + data__WEBPACK_IMPORTED_MODULE_2__["Config"].version + " (your version)" + " is not supported by the latest js (" + data__WEBPACK_IMPORTED_MODULE_2__["Config"].bbdVersion + ").<br><br> Please download the latest version from <a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>GitHub</a>");
        return;
    }

    const latestLocalVersion = data__WEBPACK_IMPORTED_MODULE_2__["Config"].updater ? data__WEBPACK_IMPORTED_MODULE_2__["Config"].updater.LatestVersion : data__WEBPACK_IMPORTED_MODULE_2__["Config"].latestVersion;
    if (latestLocalVersion > data__WEBPACK_IMPORTED_MODULE_2__["Config"].version) {
        this.alert("Update Available", `
            An update for BandagedBD is available (${latestLocalVersion})! Please Reinstall!<br /><br />
            <a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>Download Installer</a>
        `);
    }

    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Settings");
    this.initSettings();
    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing EmoteModule");
    window.emotePromise = _emotes__WEBPACK_IMPORTED_MODULE_3__["default"].init().then(() => {
        _emotes__WEBPACK_IMPORTED_MODULE_3__["default"].initialized = true;
        _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing QuickEmoteMenu");
        _emotemenu__WEBPACK_IMPORTED_MODULE_4__["default"].init();
    });

    this.injectExternals();

    await this.checkForGuilds();
    _bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Updating Settings");
    _settingspanel__WEBPACK_IMPORTED_MODULE_9__["default"].initializeSettings();

    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Plugins");
    const pluginErrors = _pluginmanager__WEBPACK_IMPORTED_MODULE_5__["default"].loadPlugins();

    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Themes");
    const themeErrors = _thememanager__WEBPACK_IMPORTED_MODULE_6__["default"].loadThemes();

    $("#customcss").detach().appendTo(document.head);

    window.addEventListener("beforeunload", function() {
        if (data__WEBPACK_IMPORTED_MODULE_2__["SettingsCookie"]["bda-dc-0"]) document.querySelector(".btn.btn-disconnect").click();
    });

    _publicservers__WEBPACK_IMPORTED_MODULE_8__["default"].initialize();
    _emotes__WEBPACK_IMPORTED_MODULE_3__["default"].autoCapitalize();

    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Removing Loading Icon");
    document.getElementsByClassName("bd-loaderv2")[0].remove();
    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Main Observer");
    this.initObserver();

    // Show loading errors
    if (data__WEBPACK_IMPORTED_MODULE_2__["SettingsCookie"]["fork-ps-1"]) {
        _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Collecting Startup Errors");
        this.showContentErrors({plugins: pluginErrors, themes: themeErrors});
    }

    // if (!DataStore.getBDData(bbdVersion)) {
    //     BdApi.alert("BBD Updated!", ["Lots of things were fixed in this update like Public Servers, Minimal Mode, Dark Mode and 24 Hour Timestamps.", BdApi.React.createElement("br"), BdApi.React.createElement("br"), "Feel free to test them all out!"]);
    //     DataStore.setBDData(bbdVersion, true);
    // }
};

Core.prototype.checkForGuilds = function() {
    return new Promise(resolve => {
        const checkForGuilds = function() {
            const wrapper = _bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].guildClasses.wrapper.split(" ")[0];
            const guild = _bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].guildClasses.listItem.split(" ")[0];
            const blob = _bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].guildClasses.blobContainer.split(" ")[0];
            if (document.querySelectorAll(`.${wrapper} .${guild} .${blob}`).length > 0) return resolve(data__WEBPACK_IMPORTED_MODULE_2__["Config"].deferLoaded = true);
            setTimeout(checkForGuilds, 100);
        };
        $(document).ready(function () {
            setTimeout(checkForGuilds, 100);
        });
    });
};

Core.prototype.injectExternals = async function() {
    await _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].injectJs("https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js");
    // if (require.original) window.require = require.original;
};

Core.prototype.initSettings = function () {
    _datastore__WEBPACK_IMPORTED_MODULE_7__["default"].initialize();
    if (!_datastore__WEBPACK_IMPORTED_MODULE_7__["default"].getSettingGroup("settings")) return this.saveSettings();
    const savedSettings = this.loadSettings();
    $("<style id=\"customcss\">").text(atob(_datastore__WEBPACK_IMPORTED_MODULE_7__["default"].getBDData("bdcustomcss"))).appendTo(document.head);
    for (const setting in savedSettings) {
        if (savedSettings[setting] !== undefined) data__WEBPACK_IMPORTED_MODULE_2__["SettingsCookie"][setting] = savedSettings[setting];
    }
    this.saveSettings();

};

Core.prototype.saveSettings = function () {
    _datastore__WEBPACK_IMPORTED_MODULE_7__["default"].setSettingGroup("settings", data__WEBPACK_IMPORTED_MODULE_2__["SettingsCookie"]);
};

Core.prototype.loadSettings = function () {
    return _datastore__WEBPACK_IMPORTED_MODULE_7__["default"].getSettingGroup("settings");
};

Core.prototype.initObserver = function () {
    const mainObserver = new MutationObserver((mutations) => {

        for (let i = 0, mlen = mutations.length; i < mlen; i++) {
            let mutation = mutations[i];
            if (typeof _pluginmanager__WEBPACK_IMPORTED_MODULE_5__["default"] !== "undefined") _pluginmanager__WEBPACK_IMPORTED_MODULE_5__["default"].rawObserver(mutation);

            // if there was nothing added, skip
            if (!mutation.addedNodes.length || !(mutation.addedNodes[0] instanceof Element)) continue;

            let node = mutation.addedNodes[0];

            if (node.classList.contains("layer-3QrUeG")) {
                if (node.getElementsByClassName("guild-settings-base-section").length) node.setAttribute("layer-id", "server-settings");

                if (node.getElementsByClassName("socialLinks-3jqNFy").length) {
                    node.setAttribute("layer-id", "user-settings");
                    node.setAttribute("id", "user-settings");
                    if (!document.getElementById("bd-settings-sidebar")) _settingspanel__WEBPACK_IMPORTED_MODULE_9__["default"].renderSidebar();
                }
            }

            // Emoji Picker
            if (node.classList.contains("popout-3sVMXz") && !node.classList.contains("popoutLeft-30WmrD") && node.getElementsByClassName("emojiPicker-3m1S-j").length) _emotemenu__WEBPACK_IMPORTED_MODULE_4__["default"].obsCallback(node);

        }
    });

    mainObserver.observe(document, {
        childList: true,
        subtree: true
    });
};

Core.prototype.inject24Hour = function() {
    if (this.cancel24Hour) return;

    const twelveHour = new RegExp(`([0-9]{1,2}):([0-9]{1,2})\\s(AM|PM)`);
    const convert = (data) => {
        if (!data__WEBPACK_IMPORTED_MODULE_2__["SettingsCookie"]["bda-gs-6"]) return;
        const matched = data.returnValue.match(twelveHour);
        if (!matched || matched.length !== 4) return;
        if (matched[3] === "AM") return data.returnValue = data.returnValue.replace(matched[0], `${matched[1] === "12" ? "00" : matched[1].padStart(2, "0")}:${matched[2]}`);
        return data.returnValue = data.returnValue.replace(matched[0], `${matched[1] === "12" ? "12" : parseInt(matched[1]) + 12}:${matched[2]}`);
    };


    const cancelCozy = _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(_bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].TimeFormatter, "calendarFormat", {after: convert}); // Called in Cozy mode
    const cancelCompact = _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(_bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].TimeFormatter, "dateFormat", {after: convert}); // Called in Compact mode
    this.cancel24Hour = () => {cancelCozy(); cancelCompact();}; // Cancel both
};

Core.prototype.injectColoredText = function() {
    if (this.cancelColoredText) return;

    this.cancelColoredText = _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(_bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].MessageContentComponent.prototype, "render", {after: (data) => {
        if (!data__WEBPACK_IMPORTED_MODULE_2__["SettingsCookie"]["bda-gs-7"]) return;
		_utilities__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(data.returnValue.props, "children", {silent: true, after: ({returnValue}) => {
			const markup = returnValue.props.children[1];
			const roleColor = data.thisObject.props.message.colorString;
			if (markup && roleColor) markup.props.style = {color: roleColor};
			return returnValue;
		}});
    }});
};

Core.prototype.removeColoredText = function() {
    document.querySelectorAll(".markup-2BOw-j").forEach(elem => {
        elem.style.setProperty("color", "");
    });
};

Core.prototype.alert = function(title, content) {
    let modal = $(`<div class="bd-modal-wrapper theme-dark">
                    <div class="bd-backdrop backdrop-1wrmKB"></div>
                    <div class="bd-modal modal-1UGdnR">
                        <div class="bd-modal-inner inner-1JeGVc">
                            <div class="header header-1R_AjF">
                                <div class="title">${title}</div>
                            </div>
                            <div class="bd-modal-body">
                                <div class="scroller-wrap fade">
                                    <div class="scroller">
                                        ${content}
                                    </div>
                                </div>
                            </div>
                            <div class="footer footer-2yfCgX">
                                <button type="button">Okay</button>
                            </div>
                        </div>
                    </div>
                </div>`);
    modal.find(".footer button").on("click", () => {
        modal.addClass("closing");
        setTimeout(() => { modal.remove(); }, 300);
    });
    modal.find(".bd-backdrop").on("click", () => {
        modal.addClass("closing");
        setTimeout(() => { modal.remove(); }, 300);
    });
    modal.appendTo("#app-mount");
};

Core.prototype.showContentErrors = function({plugins: pluginErrors = [], themes: themeErrors = []}) {
    if (!pluginErrors || !themeErrors) return;
    if (!pluginErrors.length && !themeErrors.length) return;
    let modal = $(`<div class="bd-modal-wrapper theme-dark">
                    <div class="bd-backdrop backdrop-1wrmKB"></div>
                    <div class="bd-modal bd-content-modal modal-1UGdnR">
                        <div class="bd-modal-inner inner-1JeGVc">
                            <div class="header header-1R_AjF"><div class="title">Content Errors</div></div>
                            <div class="bd-modal-body">
                                <div class="tab-bar-container">
                                    <div class="tab-bar TOP">
                                        <div class="tab-bar-item">Plugins</div>
                                        <div class="tab-bar-item">Themes</div>
                                    </div>
                                </div>
                                <div class="table-header">
                                    <div class="table-column column-name">Name</div>
                                    <div class="table-column column-message">Message</div>
                                    <div class="table-column column-error">Error</div>
                                </div>
                                <div class="scroller-wrap fade">
                                    <div class="scroller">

                                    </div>
                                </div>
                            </div>
                            <div class="footer footer-2yfCgX">
                                <button type="button">Okay</button>
                            </div>
                        </div>
                    </div>
                </div>`);

    function generateTab(errors) {
        let container = $(`<div class="errors">`);
        for (let err of errors) {
            let error = $(`<div class="error">
                                <div class="table-column column-name">${err.name ? err.name : err.file}</div>
                                <div class="table-column column-message">${err.message}</div>
                                <div class="table-column column-error"><a class="error-link" href="">${err.error ? err.error.message : ""}</a></div>
                            </div>`);
            container.append(error);
            if (err.error) {
                error.find("a").on("click", (e) => {
                    e.preventDefault();
                    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].err("ContentManager", `Error details for ${err.name ? err.name : err.file}.`, err.error);
                });
            }
        }
        return container;
    }

    let tabs = [generateTab(pluginErrors), generateTab(themeErrors)];

    modal.find(".tab-bar-item").on("click", (e) => {
        e.preventDefault();
        modal.find(".tab-bar-item").removeClass("selected");
        $(e.target).addClass("selected");
        modal.find(".scroller").empty().append(tabs[$(e.target).index()]);
    });

    modal.find(".footer button").on("click", () => {
        modal.addClass("closing");
        setTimeout(() => { modal.remove(); }, 300);
    });
    modal.find(".bd-backdrop").on("click", () => {
        modal.addClass("closing");
        setTimeout(() => { modal.remove(); }, 300);
    });
    modal.appendTo("#app-mount");
    if (pluginErrors.length) modal.find(".tab-bar-item")[0].click();
    else modal.find(".tab-bar-item")[1].click();
};

/**
 * This shows a toast similar to android towards the bottom of the screen.
 *
 * @param {string} content The string to show in the toast.
 * @param {object} options Options object. Optional parameter.
 * @param {string} options.type Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
 * @param {boolean} options.icon Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
 * @param {number} options.timeout Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
 */
Core.prototype.showToast = function(content, options = {}) {
    if (!data__WEBPACK_IMPORTED_MODULE_2__["Config"].deferLoaded) return;
    if (!document.querySelector(".bd-toasts")) {
        let toastWrapper = document.createElement("div");
        toastWrapper.classList.add("bd-toasts");
        let boundingElement = document.querySelector(".chat-3bRxxu form, #friends, .noChannel-Z1DQK7, .activityFeed-28jde9");
        toastWrapper.style.setProperty("left", boundingElement ? boundingElement.getBoundingClientRect().left + "px" : "0px");
        toastWrapper.style.setProperty("width", boundingElement ? boundingElement.offsetWidth + "px" : "100%");
        toastWrapper.style.setProperty("bottom", (document.querySelector(".chat-3bRxxu form") ? document.querySelector(".chat-3bRxxu form").offsetHeight : 80) + "px");
        document.querySelector(".app, .app-2rEoOp").appendChild(toastWrapper);
    }
    const {type = "", icon = true, timeout = 3000} = options;
    let toastElem = document.createElement("div");
    toastElem.classList.add("bd-toast");
    if (type) toastElem.classList.add("toast-" + type);
    if (type && icon) toastElem.classList.add("icon");
    toastElem.innerText = content;
    document.querySelector(".bd-toasts").appendChild(toastElem);
    setTimeout(() => {
        toastElem.classList.add("closing");
        setTimeout(() => {
            toastElem.remove();
            if (!document.querySelectorAll(".bd-toasts .bd-toast").length) document.querySelector(".bd-toasts").remove();
        }, 300);
    }, timeout);
};


/* harmony default export */ __webpack_exports__["default"] = (new Core());

/***/ }),

/***/ "./src/modules/datastore.js":
/*!**********************************!*\
  !*** ./src/modules/datastore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");


const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const releaseChannel = DiscordNative.globals.releaseChannel;

/* harmony default export */ __webpack_exports__["default"] = (new class DataStore {
    constructor() {
        this.data = {settings: {stable: {}, canary: {}, ptb: {}}};
        this.pluginData = {};
    }

    initialize() {
        try {
            if (!fs.existsSync(this.BDFile)) fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4));
            const data = require(this.BDFile);
            if (data.hasOwnProperty("settings")) this.data = data;
            if (!fs.existsSync(this.settingsFile)) return;
            let settings = require(this.settingsFile);
            fs.unlinkSync(this.settingsFile);
            if (settings.hasOwnProperty("settings")) settings = Object.assign({stable: {}, canary: {}, ptb: {}}, {[releaseChannel]: settings});
            else settings = Object.assign({stable: {}, canary: {}, ptb: {}}, settings);
            this.setBDData("settings", settings);
        }
        catch (err) {
            _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"].alert("Corrupt Storage", "The bd storage has somehow become corrupt. You may either try to salvage the file or delete it then reload.");
        }
    }

    get BDFile() {return this._BDFile || (this._BDFile = path.resolve(data__WEBPACK_IMPORTED_MODULE_0__["Config"].dataPath, "bdstorage.json"));}
    get settingsFile() {return this._settingsFile || (this._settingsFile = path.resolve(data__WEBPACK_IMPORTED_MODULE_0__["Config"].dataPath, "bdsettings.json"));}
    getPluginFile(pluginName) {return path.resolve(data__WEBPACK_IMPORTED_MODULE_0__["Config"].dataPath, "plugins", pluginName + ".config.json");}

    getSettingGroup(key) {
        return this.data.settings[releaseChannel][key] || null;
    }

    setSettingGroup(key, data) {
        this.data.settings[releaseChannel][key] = data;
        fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4));
    }

    getBDData(key) {
        return this.data[key] || "";
    }

    setBDData(key, value) {
        this.data[key] = value;
        fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4));
    }

    getPluginData(pluginName, key) {
        if (this.pluginData[pluginName] !== undefined) return this.pluginData[pluginName][key] || undefined;
        if (!fs.existsSync(this.getPluginFile(pluginName))) return undefined;
        this.pluginData[pluginName] = JSON.parse(fs.readFileSync(this.getPluginFile(pluginName)));
        return this.pluginData[pluginName][key] || undefined;
    }

    setPluginData(pluginName, key, value) {
        if (value === undefined) return;
        if (this.pluginData[pluginName] === undefined) this.pluginData[pluginName] = {};
        this.pluginData[pluginName][key] = value;
        fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4));
    }

    deletePluginData(pluginName, key) {
        if (this.pluginData[pluginName] === undefined) this.pluginData[pluginName] = {};
        delete this.pluginData[pluginName][key];
        fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4));
    }
});

/***/ }),

/***/ "./src/modules/devmode.js":
/*!********************************!*\
  !*** ./src/modules/devmode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bdv2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdv2 */ "./src/modules/bdv2.js");


function devMode() {}

 devMode.prototype.enable = function(selectorMode) {
     var self = this;
     this.disable();
     $(window).on("keydown.bdDevmode", function(e) {
         if (e.which === 119 || e.which == 118) {//F8
            console.log("%c[%cDevMode%c] %cBreak/Resume", "color: red;", "color: #303030; font-weight:700;", "color:red;", "");
            debugger; // eslint-disable-line no-debugger
         }
     });

    if (!selectorMode) return;
     $(document).on("contextmenu.bdDevmode", function(e) {
         self.lastSelector = self.getSelector(e.toElement);

         function attach() {
            var cm = $(".contextMenu-HLZMGh");
            if (cm.length <= 0) {
                cm = $("<div class=\"contextMenu-HLZMGh bd-context-menu\"></div>");
                cm.addClass($(".app, .app-2rEoOp").hasClass("theme-dark") ? "theme-dark" : "theme-light");
                cm.appendTo(".app, .app-2rEoOp");
                cm.css("top", e.clientY);
                cm.css("left", e.clientX);
                $(document).on("click.bdDevModeCtx", () => {
                    cm.remove();
                    $(document).off(".bdDevModeCtx");
                });
                $(document).on("contextmenu.bdDevModeCtx", () => {
                    cm.remove();
                    $(document).off(".bdDevModeCtx");
                });
                $(document).on("keyup.bdDevModeCtx", (e) => {
                    if (e.keyCode === 27) {
                        cm.remove();
                        $(document).off(".bdDevModeCtx");
                    }
                });
            }

            var cmo = $("<div/>", {
                "class": "itemGroup-1tL0uz"
            });
            var cmi = $("<div/>", {
                "class": "item-1Yvehc",
                "click": function() {
                    _bdv2__WEBPACK_IMPORTED_MODULE_0__["default"].NativeModule.copy(self.lastSelector);
                    cm.hide();
                }
            }).append($("<span/>", {text: "Copy Selector"}));
            cmo.append(cmi);
            cm.append(cmo);
            if (cm.hasClass("undefined")) cm.css("top",  "-=" + cmo.outerHeight());
         }

         setImmediate(attach);

         e.stopPropagation();
     });
 };

devMode.prototype.getRules = function(element, css = element.ownerDocument.styleSheets) {
    //if (window.getMatchedCSSRules) return window.getMatchedCSSRules(element);
    return [].concat(...[...css].map(s => [...s.cssRules || []])).filter(r => r && r.selectorText && element.matches(r.selectorText) && r.style.length && r.selectorText.split(", ").length < 8);
};

devMode.prototype.getSelector = function(element) {
    if (element.id) return `#${element.id}`;
    const rules = this.getRules(element);
    const latestRule = rules[rules.length - 1];
    if (latestRule) return latestRule.selectorText;
    else if (element.classList.length) return `.${Array.from(element.classList).join(".")}`;
    return `.${Array.from(element.parentElement.classList).join(".")}`;
};

 devMode.prototype.disable = function() {
     $(window).off("keydown.bdDevmode");
     $(document).off("contextmenu.bdDevmode");
     $(document).off("contextmenu.bdDevModeCtx");
 };

 /* harmony default export */ __webpack_exports__["default"] = (new devMode());

/***/ }),

/***/ "./src/modules/emitter.js":
/*!********************************!*\
  !*** ./src/modules/emitter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const EventEmitter = __webpack_require__(/*! events */ "events");
/* harmony default export */ __webpack_exports__["default"] = (new class BDEvents extends EventEmitter {
    dispatch(eventName, ...args) {
        this.emit(eventName, ...args);
    }

    off(eventName, eventAction) {
        this.removeListener(eventName, eventAction);
    }
});

/***/ }),

/***/ "./src/modules/emotemenu.js":
/*!**********************************!*\
  !*** ./src/modules/emotemenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");




function QuickEmoteMenu() {

}

QuickEmoteMenu.prototype.init = function() {
    this.initialized = true;
    $(document).on("mousedown", function(e) {
        if (e.target.id != "rmenu") $("#rmenu").remove();
    });
    this.favoriteEmotes = {};
    var fe = _datastore__WEBPACK_IMPORTED_MODULE_1__["default"].getBDData("bdfavemotes");
    if (fe !== "" && fe !== null) {
        this.favoriteEmotes = JSON.parse(atob(fe));
    }

    var qmeHeader = "";
    qmeHeader += "<div id=\"bda-qem\">";
    qmeHeader += "    <button class=\"active\" id=\"bda-qem-twitch\" onclick='quickEmoteMenu.switchHandler(this); return false;'>Twitch</button>";
    qmeHeader += "    <button id=\"bda-qem-favourite\" onclick='quickEmoteMenu.switchHandler(this); return false;'>Favourite</button>";
    qmeHeader += "    <button id=\"bda-qem-emojis\" onclick='quickEmoteMenu.switchHandler(this); return false;'>Emojis</buttond>";
    qmeHeader += "</div>";
    this.qmeHeader = qmeHeader;

    var teContainer = "";
    teContainer += "<div id=\"bda-qem-twitch-container\">";
    teContainer += "    <div class=\"scroller-wrap scrollerWrap-2lJEkd fade\">";
    teContainer += "        <div class=\"scroller scroller-2FKFPG\">";
    teContainer += "            <div class=\"emote-menu-inner\">";
    var url = "";
    for (let emote in window.bdEmotes.TwitchGlobal) {
        if (window.bdEmotes.TwitchGlobal.hasOwnProperty(emote)) {
            url = window.bdEmotes.TwitchGlobal[emote];
            teContainer += "<div class=\"emote-container\">";
            teContainer += "    <img class=\"emote-icon\" alt=\"\" src=\"" + url + "\" title=\"" + emote + "\">";
            teContainer += "    </img>";
            teContainer += "</div>";
        }
    }
    teContainer += "            </div>";
    teContainer += "        </div>";
    teContainer += "    </div>";
    teContainer += "</div>";
    this.teContainer = teContainer;

    var faContainer = "";
    faContainer += "<div id=\"bda-qem-favourite-container\">";
    faContainer += "    <div class=\"scroller-wrap scrollerWrap-2lJEkd fade\">";
    faContainer += "        <div class=\"scroller scroller-2FKFPG\">";
    faContainer += "            <div class=\"emote-menu-inner\">";
    for (let emote in this.favoriteEmotes) {
        url = this.favoriteEmotes[emote];
        faContainer += "<div class=\"emote-container\">";
        faContainer += "    <img class=\"emote-icon\" alt=\"\" src=\"" + url + "\" title=\"" + emote + "\" oncontextmenu='quickEmoteMenu.favContext(event, this);'>";
        faContainer += "    </img>";
        faContainer += "</div>";
    }
    faContainer += "            </div>";
    faContainer += "        </div>";
    faContainer += "    </div>";
    faContainer += "</div>";
    this.faContainer = faContainer;
};

QuickEmoteMenu.prototype.favContext = function(e, em) {
    e.stopPropagation();
    var menu = $("<div>", {"id": "removemenu", "data-emoteid": $(em).prop("title"), "text": "Remove", "class": "bd-context-menu context-menu theme-dark"});
    menu.css({
        top: e.pageY - $("#bda-qem-favourite-container").offset().top,
        left: e.pageX - $("#bda-qem-favourite-container").offset().left
    });
    $(em).parent().append(menu);
    menu.on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).remove();

        delete this.favoriteEmotes[$(this).data("emoteid")];
        this.updateFavorites();
        return false;
    });
    return false;
};

QuickEmoteMenu.prototype.switchHandler = function(e) {
    this.switchQem($(e).attr("id"));
};

QuickEmoteMenu.prototype.switchQem = function(id) {
    var twitch = $("#bda-qem-twitch");
    var fav = $("#bda-qem-favourite");
    var emojis = $("#bda-qem-emojis");
    twitch.removeClass("active");
    fav.removeClass("active");
    emojis.removeClass("active");

    $(".emojiPicker-3m1S-j").hide();
    $("#bda-qem-favourite-container").hide();
    $("#bda-qem-twitch-container").hide();

    switch (id) {
        case "bda-qem-twitch":
            twitch.addClass("active");
            $("#bda-qem-twitch-container").show();
        break;
        case "bda-qem-favourite":
            fav.addClass("active");
            $("#bda-qem-favourite-container").show();
        break;
        case "bda-qem-emojis":
            emojis.addClass("active");
            $(".emojiPicker-3m1S-j").show();
            $(".emojiPicker-3m1S-j .search-bar-inner input, .emojiPicker-3m1S-j .search-bar-inner input").focus();
        break;
    }
    this.lastTab = id;

    var emoteIcon = $(".emote-icon");
    emoteIcon.off();
    emoteIcon.on("click", function () {
        var emote = $(this).attr("title");
        var ta = _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].getTextArea();
        _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].insertText(ta[0], ta.val().slice(-1) == " " ? ta.val() + emote : ta.val() + " " + emote);
    });
};

QuickEmoteMenu.prototype.obsCallback = function (elem) {
    if (!this.initialized) return;
    var e = $(elem);
    if (!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-es-9"]) {
        e.addClass("bda-qme-hidden");
    }
    else {
        e.removeClass("bda-qme-hidden");
    }

    if (!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-es-0"]) return;

    e.prepend(this.qmeHeader);
    e.append(this.teContainer);
    e.append(this.faContainer);

    if (this.lastTab == undefined) {
        this.lastTab = "bda-qem-emojis";
    }
    this.switchQem(this.lastTab);
};

QuickEmoteMenu.prototype.favorite = function (name, url) {

    if (!this.favoriteEmotes.hasOwnProperty(name)) {
        this.favoriteEmotes[name] = url;
    }

    this.updateFavorites();
};

QuickEmoteMenu.prototype.updateFavorites = function () {

    var faContainer = "";
    faContainer += "<div id=\"bda-qem-favourite-container\">";
    faContainer += "    <div class=\"scroller-wrap scrollerWrap-2lJEkd fade\">";
    faContainer += "        <div class=\"scroller scroller-2FKFPG\">";
    faContainer += "            <div class=\"emote-menu-inner\">";
    for (var emote in this.favoriteEmotes) {
        var url = this.favoriteEmotes[emote];
        faContainer += "<div class=\"emote-container\">";
        faContainer += "    <img class=\"emote-icon\" alt=\"\" src=\"" + url + "\" title=\"" + emote + "\" oncontextmenu=\"quickEmoteMenu.favContext(event, this);\">";
        faContainer += "    </img>";
        faContainer += "</div>";
    }
    faContainer += "            </div>";
    faContainer += "        </div>";
    faContainer += "    </div>";
    faContainer += "</div>";
    this.faContainer = faContainer;

    $("#bda-qem-favourite-container").replaceWith(faContainer);
    _datastore__WEBPACK_IMPORTED_MODULE_1__["default"].setBDData("bdfavemotes", btoa(JSON.stringify(this.favoriteEmotes)));
};

/* harmony default export */ __webpack_exports__["default"] = (new QuickEmoteMenu());

/***/ }),

/***/ "./src/modules/emotes.js":
/*!*******************************!*\
  !*** ./src/modules/emotes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _bdv2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bdv2 */ "./src/modules/bdv2.js");
/* harmony import */ var _ui_emote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/emote */ "./src/ui/emote.js");
/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");







window.emotesFfz = {};
window.emotesBTTV = {};
window.emotesBTTV2 = {};
window.emotesTwitch = {};
window.subEmotesTwitch = {};

window.bdEmotes = {
    TwitchGlobal: {},
    TwitchSubscriber: {},
    BTTV: {},
    FrankerFaceZ: {},
    BTTV2: {}
};

window.bdEmoteSettingIDs = {
    TwitchGlobal: "bda-es-7",
    TwitchSubscriber: "bda-es-7",
    BTTV: "bda-es-2",
    FrankerFaceZ: "bda-es-1",
    BTTV2: "bda-es-2"
};

function EmoteModule() {
    Object.defineProperty(this, "categories", {
        get: function() {
            const cats = [];
            for (const current in window.bdEmoteSettingIDs) {
                if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"][window.bdEmoteSettingIDs[current]]) cats.push(current);
            }
            return cats;
        }
    });
}

EmoteModule.prototype.init = async function () {
    this.modifiers = ["flip", "spin", "pulse", "spin2", "spin3", "1spin", "2spin", "3spin", "tr", "bl", "br", "shake", "shake2", "shake3", "flap"];
    this.overrides = ["twitch", "bttv", "ffz"];

    let emoteInfo = {
        TwitchGlobal: {
            url: "https://twitchemotes.com/api_cache/v3/global.json",
            backup: `https://rauenzi.github.io/BetterDiscordApp/data/emotedata_twitch_global.json`,
            variable: "TwitchGlobal",
            oldVariable: "emotesTwitch",
            getEmoteURL: (e) => `https://static-cdn.jtvnw.net/emoticons/v1/${e.id}/1.0`,
            getOldData: (url, name) => { return {id: url.match(/\/([0-9]+)\//)[1], code: name, emoticon_set: 0, description: null}; }
        },
        TwitchSubscriber: {
            url: `https://rauenzi.github.io/BetterDiscordApp/data/emotedata_twitch_subscriber.json`,
            variable: "TwitchSubscriber",
            oldVariable: "subEmotesTwitch",
            getEmoteURL: (e) => `https://static-cdn.jtvnw.net/emoticons/v1/${e}/1.0`,
            getOldData: (url) => url.match(/\/([0-9]+)\//)[1]
        },
        FrankerFaceZ: {
            url: `https://rauenzi.github.io/BetterDiscordApp/data/emotedata_ffz.json`,
            variable: "FrankerFaceZ",
            oldVariable: "emotesFfz",
            getEmoteURL: (e) => `https://cdn.frankerfacez.com/emoticon/${e}/1`,
            getOldData: (url) => url.match(/\/([0-9]+)\//)[1]
        },
        BTTV: {
            url: "https://api.betterttv.net/emotes",
            variable: "BTTV",
            oldVariable: "emotesBTTV",
            parser: (data) => {
                let emotes = {};
                for (let e = 0, len = data.emotes.length; e < len; e++) {
                    let emote = data.emotes[e];
                    emotes[emote.regex] = emote.url;
                }
                return emotes;
            },
            getEmoteURL: (e) => `${e}`,
            getOldData: (url) => url
        },
        BTTV2: {
            url: `https://rauenzi.github.io/BetterDiscordApp/data/emotedata_bttv.json`,
            variable: "BTTV2",
            oldVariable: "emotesBTTV2",
            getEmoteURL: (e) => `https://cdn.betterttv.net/emote/${e}/1x`,
            getOldData: (url) => url.match(/emote\/(.+)\//)[1]
        }
    };

    await this.getBlacklist();
    await this.loadEmoteData(emoteInfo);

    while (!_bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].MessageContentComponent) await new Promise(resolve => setTimeout(resolve, 100));

    if (this.cancelEmoteRender) return;
    this.cancelEmoteRender = _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(_bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].MessageContentComponent.prototype, "render", {after: ({returnValue}) => {
		_utilities__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(returnValue.props, "children", {silent: true, after: ({returnValue}) => {
            if (this.categories.length == 0) return;
			const markup = returnValue.props.children[1];
			if (!markup.props.children) return;
			const nodes = markup.props.children[1];
			if (!nodes || !nodes.length) return;
			for (let n = 0; n < nodes.length; n++) {
				const node = nodes[n];
				if (typeof(node) !== "string") continue;
                const words = node.split(/([^\s]+)([\s]|$)/g);
				for (let c = 0, clen = this.categories.length; c < clen; c++) {
					for (let w = 0, wlen = words.length; w < wlen; w++) {
                        let emote = words[w];
						let emoteSplit = emote.split(":");
						let emoteName = emoteSplit[0];
						let emoteModifier = emoteSplit[1] ? emoteSplit[1] : "";
						let emoteOverride = emoteModifier.slice(0);

						if (emoteName.length < 4 || bemotes.includes(emoteName)) continue;
						if (!this.modifiers.includes(emoteModifier) || !data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-es-8"]) emoteModifier = "";
						if (!this.overrides.includes(emoteOverride)) emoteOverride = "";
						else emoteModifier = emoteOverride;

						let current = this.categories[c];
						if (emoteOverride === "twitch") {
							if (window.bdEmotes.TwitchGlobal[emoteName]) current = "TwitchGlobal";
							else if (window.bdEmotes.TwitchSubscriber[emoteName]) current = "TwitchSubscriber";
						}
						else if (emoteOverride === "bttv") {
							if (window.bdEmotes.BTTV[emoteName]) current = "BTTV";
							else if (window.bdEmotes.BTTV2[emoteName]) current = "BTTV2";
						}
						else if (emoteOverride === "ffz") {
							if (window.bdEmotes.FrankerFaceZ[emoteName]) current = "FrankerFaceZ";
						}

						if (!window.bdEmotes[current][emoteName] || !data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"][window.bdEmoteSettingIDs[current]]) continue;
						const results = nodes[n].match(new RegExp(`([\\s]|^)${_utilities__WEBPACK_IMPORTED_MODULE_1__["default"].escape(emoteModifier ? emoteName + ":" + emoteModifier : emoteName)}([\\s]|$)`));
                        if (!results) continue;
						const pre = nodes[n].substring(0, results.index + results[1].length);
						const post = nodes[n].substring(results.index + results[0].length - results[2].length);
						nodes[n] = pre;
						const emoteComponent = _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].react.createElement(_ui_emote__WEBPACK_IMPORTED_MODULE_3__["default"], {name: emoteName, url: window.bdEmotes[current][emoteName], modifier: emoteModifier});
						nodes.splice(n + 1, 0, post);
						nodes.splice(n + 1, 0, emoteComponent);
					}
				}
			}
			const onlyEmotes = nodes.every(r => {
				if (typeof(r) == "string" && r.replace(/\s*/, "") == "") return true;
				else if (r.type && r.type.name == "BDEmote") return true;
				else if (r.props && r.props.children && r.props.children.props && r.props.children.props.emojiName) return true;
				return false;
			});
			if (!onlyEmotes) return;

			for (let node of nodes) {
				if (typeof(node) != "object") continue;
				if (node.type.name == "BDEmote") node.props.jumboable = true;
				else if (node.props && node.props.children && node.props.children.props && node.props.children.props.emojiName) node.props.children.props.jumboable = true;
			}
		}});
    }});
};

EmoteModule.prototype.disable = function() {
    this.disableAutoCapitalize();
    if (this.cancelEmoteRender) return;
    this.cancelEmoteRender();
    this.cancelEmoteRender = null;
};

EmoteModule.prototype.clearEmoteData = async function() {
    let _fs = __webpack_require__(/*! fs */ "fs");
    let emoteFile = "emote_data.json";
    let file = data__WEBPACK_IMPORTED_MODULE_0__["Config"].dataPath + emoteFile;
    let exists = _fs.existsSync(file);
    if (exists) _fs.unlinkSync(file);
    _datastore__WEBPACK_IMPORTED_MODULE_5__["default"].setBDData("emoteCacheDate", (new Date()).toJSON());

    window.bdEmotes = {
        TwitchGlobal: {},
        TwitchSubscriber: {},
        BTTV: {},
        FrankerFaceZ: {},
        BTTV2: {}
    };
};

EmoteModule.prototype.goBack = async function(emoteInfo) {
    for (let e in emoteInfo) {
        for (let emote in window.bdEmotes[emoteInfo[e].variable]) {
            window[emoteInfo[e].oldVariable][emote] = emoteInfo[e].getOldData(window.bdEmotes[emoteInfo[e].variable][emote], emote);
        }
    }
};

EmoteModule.prototype.isCacheValid = function() {
    const cacheLength = _datastore__WEBPACK_IMPORTED_MODULE_5__["default"].getBDData("emoteCacheDays") || _datastore__WEBPACK_IMPORTED_MODULE_5__["default"].setBDData("emoteCacheDays", 7) || 7;
    const cacheDate = new Date(_datastore__WEBPACK_IMPORTED_MODULE_5__["default"].getBDData("emoteCacheDate") || null);
    const currentDate = new Date();
    const daysBetween = Math.round(Math.abs((currentDate.getTime() - cacheDate.getTime()) / (24 * 60 * 60 * 1000)));
    if (daysBetween > cacheLength) {
        _datastore__WEBPACK_IMPORTED_MODULE_5__["default"].setBDData("emoteCacheDate", currentDate.toJSON());
        return false;
    }
    return true;
};

EmoteModule.prototype.loadEmoteData = async function(emoteInfo) {
    const _fs = __webpack_require__(/*! fs */ "fs");
    const emoteFile = "emote_data.json";
    const file = data__WEBPACK_IMPORTED_MODULE_0__["Config"].dataPath + emoteFile;
    const exists = _fs.existsSync(file);

    if (exists && this.isCacheValid()) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast("Loading emotes from cache.", {type: "info"});
        _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Emotes", "Loading emotes from local cache.");

        const data = await new Promise(resolve => {
            _fs.readFile(file, "utf8", (err, data) => {
                _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Emotes", "Emotes loaded from cache.");
                if (err) data = {};
                resolve(data);
            });
        });

        let isValid = _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].testJSON(data);
        if (isValid) window.bdEmotes = JSON.parse(data);

        for (const e in emoteInfo) {
            isValid = Object.keys(window.bdEmotes[emoteInfo[e].variable]).length > 0;
        }

        if (isValid) {
            if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast("Emotes successfully loaded.", {type: "success"});
            return;
        }

        _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Emotes", "Cache was corrupt, downloading...");
        _fs.unlinkSync(file);
    }

    if (!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-es-3"]) return;
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast("Downloading emotes in the background do not reload.", {type: "info"});

    for (let e in emoteInfo) {
        await new Promise(r => setTimeout(r, 1000));
        let data = await this.downloadEmotes(emoteInfo[e]);
        window.bdEmotes[emoteInfo[e].variable] = data;
    }

    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast("All emotes successfully downloaded.", {type: "success"});

    try { _fs.writeFileSync(file, JSON.stringify(window.bdEmotes), "utf8"); }
    catch (err) { _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].err("Emotes", "Could not save emote data.", err); }
};

EmoteModule.prototype.downloadEmotes = function(emoteMeta) {
    let request = __webpack_require__(/*! request */ "request");
    let options = {
        url: emoteMeta.url,
        timeout: emoteMeta.timeout ? emoteMeta.timeout : 5000
    };

    _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Emotes", `Downloading: ${emoteMeta.variable} (${emoteMeta.url})`);

    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].err("Emotes", "Could not download " + emoteMeta.variable, error);
                if (emoteMeta.backup) {
                    emoteMeta.url = emoteMeta.backup;
                    emoteMeta.backup = null;
                    if (emoteMeta.backupParser) emoteMeta.parser = emoteMeta.backupParser;
                    return resolve(this.downloadEmotes(emoteMeta));
                }
                return reject({});
            }

            let parsedData = {};
            try {
                parsedData = JSON.parse(body);
            }
            catch (err) {
                _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].err("Emotes", "Could not download " + emoteMeta.variable, err);
                if (emoteMeta.backup) {
                    emoteMeta.url = emoteMeta.backup;
                    emoteMeta.backup = null;
                    if (emoteMeta.backupParser) emoteMeta.parser = emoteMeta.backupParser;
                    return resolve(this.downloadEmotes(emoteMeta));
                }
                return reject({});
            }
            if (typeof(emoteMeta.parser) === "function") parsedData = emoteMeta.parser(parsedData);

            for (let emote in parsedData) {
                if (emote.length < 4 || bemotes.includes(emote)) {
                    delete parsedData[emote];
                    continue;
                }
                parsedData[emote] = emoteMeta.getEmoteURL(parsedData[emote]);
            }
            resolve(parsedData);
            _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].log("Emotes", "Downloaded: " + emoteMeta.variable);
        });
    });
};

EmoteModule.prototype.getBlacklist = function () {
    return new Promise(resolve => {
        $.getJSON(`https://rauenzi.github.io/BetterDiscordApp/data/emotefilter.json`, function (data) {
            resolve(bemotes = data.blacklist);
        });
    });
};

var bemotes = [];

EmoteModule.prototype.autoCapitalize = function () {
    if (!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-es-4"] || this.autoCapitalizeActive) return;
    $("body").on("keyup.bdac change.bdac paste.bdac", $(".channelTextArea-1LDbYG textarea:first"), () => {
        var text = $(".channelTextArea-1LDbYG textarea:first").val();
        if (text == undefined) return;

        var lastWord = text.split(" ").pop();
        if (lastWord.length > 3) {
            if (lastWord == "danSgame") return;
            var ret = this.capitalize(lastWord.toLowerCase());
            if (ret !== null && ret !== undefined) {
                _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].insertText(_utilities__WEBPACK_IMPORTED_MODULE_1__["default"].getTextArea()[0], text.replace(lastWord, ret));
            }
        }
    });
    this.autoCapitalizeActive = true;
};

EmoteModule.prototype.capitalize = function (value) {
    var res = window.bdEmotes.TwitchGlobal;
    for (var p in res) {
        if (res.hasOwnProperty(p) && value == (p + "").toLowerCase()) {
            return p;
        }
    }
};

EmoteModule.prototype.disableAutoCapitalize = function() {
    this.autoCapitalizeActive = false;
    $("body").off(".bdac");
};

/* harmony default export */ __webpack_exports__["default"] = (new EmoteModule());

/***/ }),

/***/ "./src/modules/modules.js":
/*!********************************!*\
  !*** ./src/modules/modules.js ***!
  \********************************/
/*! exports provided: BDV2, BdApi, Core, ClassNormalizer, ContentManager, DataStore, DevMode, Emitter, EmoteMenu, EmoteModule, PluginManager, PublicServer, ThemeManager, VoiceMode, Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bdv2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bdv2 */ "./src/modules/bdv2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BDV2", function() { return _bdv2__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BdApi", function() { return _pluginapi__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./src/modules/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _classnormalizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classnormalizer */ "./src/modules/classnormalizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassNormalizer", function() { return _classnormalizer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _contentmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contentmanager */ "./src/modules/contentmanager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentManager", function() { return _contentmanager__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return _datastore__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _devmode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devmode */ "./src/modules/devmode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevMode", function() { return _devmode__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _emitter__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _emotemenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emotemenu */ "./src/modules/emotemenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmoteMenu", function() { return _emotemenu__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _emotes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emotes */ "./src/modules/emotes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmoteModule", function() { return _emotes__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginManager", function() { return _pluginmanager__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _publicservers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./publicservers */ "./src/modules/publicservers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PublicServer", function() { return _publicservers__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./thememanager */ "./src/modules/thememanager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeManager", function() { return _thememanager__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _voicemode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./voicemode */ "./src/modules/voicemode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoiceMode", function() { return _voicemode__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return _utilities__WEBPACK_IMPORTED_MODULE_14__["default"]; });



















/***/ }),

/***/ "./src/modules/pluginapi.js":
/*!**********************************!*\
  !*** ./src/modules/pluginapi.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _bdv2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bdv2 */ "./src/modules/bdv2.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ "./src/modules/core.js");






const BdApi = {
    get React() { return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].react; },
    get ReactDOM() { return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].reactDom; },
    get WindowConfigFile() {
        if (this._windowConfigFile) return this._windowConfigFile;
        const base = __webpack_require__(/*! electron */ "electron").remote.app.getAppPath();
        const path = __webpack_require__(/*! path */ "path");
        const location = path.resolve(base, "..", "app", "config.json");
        const fs = __webpack_require__(/*! fs */ "fs");
        if (!fs.existsSync(path.resolve(base, "..", "app"))) return this._windowConfigFile = null;
        if (!fs.existsSync(location)) fs.writeFileSync(location, JSON.stringify({}));
        return this._windowConfigFile = location;
    }
};

BdApi.getAllWindowPreferences = function() {
    if ((data__WEBPACK_IMPORTED_MODULE_0__["Config"].os !== "win32" && data__WEBPACK_IMPORTED_MODULE_0__["Config"].os !== "darwin") || !this.WindowConfigFile) return {}; // Tempfix until new injection on other platforms
    return require(this.WindowConfigFile);
};

BdApi.getWindowPreference = function(key) {
    if ((data__WEBPACK_IMPORTED_MODULE_0__["Config"].os !== "win32" && data__WEBPACK_IMPORTED_MODULE_0__["Config"].os !== "darwin") || !this.WindowConfigFile) return undefined; // Tempfix until new injection on other platforms
    return this.getAllWindowPreferences()[key];
};

BdApi.setWindowPreference = function(key, value) {
    if ((data__WEBPACK_IMPORTED_MODULE_0__["Config"].os !== "win32" && data__WEBPACK_IMPORTED_MODULE_0__["Config"].os !== "darwin") || !this.WindowConfigFile) return; // Tempfix until new injection on other platforms
    const fs = __webpack_require__(/*! fs */ "fs");
    const prefs = this.getAllWindowPreferences();
    prefs[key] = value;
    delete __webpack_require__.c[this.WindowConfigFile];
    fs.writeFileSync(this.WindowConfigFile, JSON.stringify(prefs, null, 4));
};

//Inject CSS to document head
//id = id of element
//css = custom css
BdApi.injectCSS = function (id, css) {
    $("head").append($("<style>", {id: _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].escapeID(id), text: css}));
};

//Clear css/remove any element
//id = id of element
BdApi.clearCSS = function (id) {
    $("#" + _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].escapeID(id)).remove();
};

//Inject CSS to document head
//id = id of element
//css = custom css
BdApi.linkJS = function (id, url) {
    $("head").append($("<script>", {id: _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].escapeID(id), src: url, type: "text/javascript"}));
};

//Clear css/remove any element
//id = id of element
BdApi.unlinkJS = function (id) {
    $("#" + _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].escapeID(id)).remove();
};

//Get another plugin
//name = name of plugin
BdApi.getPlugin = function (name) {
    if (data__WEBPACK_IMPORTED_MODULE_0__["Plugins"].hasOwnProperty(name)) {
        return data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][name].plugin;
    }
    return null;
};


//Get BetterDiscord Core
BdApi.getCore = function () {
    return _core__WEBPACK_IMPORTED_MODULE_4__["default"];
};

/**
 * Shows a generic but very customizable modal.
 * @param {string} title - title of the modal
 * @param {string} content - a string of text to display in the modal
 */
BdApi.alert = function (title, content) {
    const ModalStack = BdApi.findModuleByProps("push", "update", "pop", "popWithKey");
    const AlertModal = BdApi.findModuleByPrototypes("handleCancel", "handleSubmit", "handleMinorConfirm");
    if (!ModalStack || !AlertModal) return _core__WEBPACK_IMPORTED_MODULE_4__["default"].alert(title, content);

    ModalStack.push(function(props) {
        return BdApi.React.createElement(AlertModal, Object.assign({
            title: title,
            body: content,
        }, props));
    });
};

/**
 * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
 * @param {string} title - title of the modal
 * @param {(string|ReactElement|Array<string|ReactElement>)} children - a single or mixed array of react elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
 * @param {object} [options] - options to modify the modal
 * @param {boolean} [options.danger=false] - whether the main button should be red or not
 * @param {string} [options.confirmText=Okay] - text for the confirmation/submit button
 * @param {string} [options.cancelText=Cancel] - text for the cancel button
 * @param {callable} [options.onConfirm=NOOP] - callback to occur when clicking the submit button
 * @param {callable} [options.onCancel=NOOP] - callback to occur when clicking the cancel button
 */
BdApi.showConfirmationModal = function (title, content, options = {}) {
    const ModalStack = BdApi.findModuleByProps("push", "update", "pop", "popWithKey");
    const TextElement = BdApi.findModuleByProps("Sizes", "Weights");
    const ConfirmationModal = BdApi.findModule(m => m.defaultProps && m.key && m.key() == "confirm-modal");
    if (!ModalStack || !ConfirmationModal || !TextElement) return _core__WEBPACK_IMPORTED_MODULE_4__["default"].alert(title, content);

    const {onConfirm, onCancel, confirmText, cancelText, danger = false} = options;
    if (typeof(content) == "string") content = TextElement({color: TextElement.Colors.PRIMARY, children: [content]});
    else if (Array.isArray(content)) content = TextElement({color: TextElement.Colors.PRIMARY, children: content});
    content = [content];

    const emptyFunction = () => {};
    ModalStack.push(function(props) {
        return BdApi.React.createElement(ConfirmationModal, Object.assign({
            header: title,
            children: content,
            red: danger,
            confirmText: confirmText ? confirmText : "Okay",
            cancelText: cancelText ? cancelText : "Cancel",
            onConfirm: onConfirm ? onConfirm : emptyFunction,
            onCancel: onCancel ? onCancel : emptyFunction
        }, props));
    });
};

//Show toast alert
BdApi.showToast = function(content, options = {}) {
    _core__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(content, options);
};

// Finds module
BdApi.findModule = function(filter) {
    return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].WebpackModules.find(filter);
};

// Finds module
BdApi.findAllModules = function(filter) {
    return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].WebpackModules.findAll(filter);
};

// Finds module
BdApi.findModuleByProps = function(...props) {
    return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].WebpackModules.findByUniqueProperties(props);
};

BdApi.findModuleByPrototypes = function(...protos) {
    return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].WebpackModules.findByPrototypes(protos);
};

BdApi.findModuleByDisplayName = function(name) {
    return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].WebpackModules.findByDisplayName(name);
};

// Gets react instance
BdApi.getInternalInstance = function(node) {
    if (!(node instanceof window.jQuery) && !(node instanceof Element)) return undefined;
    if (node instanceof jQuery) node = node[0];
    return _bdv2__WEBPACK_IMPORTED_MODULE_2__["default"].getInternalInstance(node);
};

// Gets data
BdApi.loadData = function(pluginName, key) {
    return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].getPluginData(pluginName, key);
};

BdApi.getData = BdApi.loadData;

// Sets data
BdApi.saveData = function(pluginName, key, data) {
    return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].setPluginData(pluginName, key, data);
};

BdApi.setData = BdApi.saveData;

// Deletes data
BdApi.deleteData = function(pluginName, key) {
    return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].deletePluginData(pluginName, key);
};

// Patches other functions
BdApi.monkeyPatch = function(what, methodName, options) {
    return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].monkeyPatch(what, methodName, options);
};

// Event when element is removed
BdApi.onRemoved = function(node, callback) {
    return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].onRemoved(node, callback);
};

// Wraps function in try..catch
BdApi.suppressErrors = function(method, message) {
    return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(method, message);
};

// Tests for valid JSON
BdApi.testJSON = function(data) {
    return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].testJSON(data);
};

BdApi.isPluginEnabled = function(name) {
    return !!data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][name];
};

BdApi.isThemeEnabled = function(name) {
    return !!data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][name];
};

BdApi.isSettingEnabled = function(id) {
    return !!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"][id];
};

// Gets data
BdApi.getBDData = function(key) {
    return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].getBDData(key);
};

// Sets data
BdApi.setBDData = function(key, data) {
    return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].setBDData(key, data);
};

/* harmony default export */ __webpack_exports__["default"] = (BdApi);

/***/ }),

/***/ "./src/modules/pluginmanager.js":
/*!**************************************!*\
  !*** ./src/modules/pluginmanager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _contentmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentmanager */ "./src/modules/contentmanager.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/modules/core.js");
/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");








function PluginModule() {

}

PluginModule.prototype.loadPlugins = function () {
    this.loadPluginData();
    const errors = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].loadPlugins();
    var plugins = Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
    for (var i = 0; i < plugins.length; i++) {
        var plugin, name;

        try {
            plugin = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugins[i]].plugin;
            name = plugin.getName();
            if (plugin.load && typeof(plugin.load) == "function") plugin.load();
        }
        catch (err) {
            data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][name] = false;
            _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", name + " could not be loaded.", err);
            errors.push({name: name, file: data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugins[i]].filename, message: "load() could not be fired.", error: {message: err.message, stack: err.stack}});
            continue;
        }

        if (!data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][name]) data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][name] = false;

        if (data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][name]) {
            try {
                plugin.start();
                if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(`${plugin.getName()} v${plugin.getVersion()} has started.`);
            }
            catch (err) {
                data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][name] = false;
                _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", name + " could not be started.", err);
                errors.push({name: name, file: data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugins[i]].filename, message: "start() could not be fired.", error: {message: err.message, stack: err.stack}});
            }
        }
    }
    this.savePluginData();

    __webpack_require__(/*! electron */ "electron").remote.getCurrentWebContents().on("did-navigate-in-page", this.channelSwitch.bind(this));
    // if (SettingsCookie["fork-ps-5"]) ContentManager.watchContent("plugin");
    return errors;
};

PluginModule.prototype.startPlugin = function(plugin, reload = false) {
    try {
        data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.start();
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"] && !reload) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(`${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getName()} v${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getVersion()} has started.`);
    }
    catch (err) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"] && !reload) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(`${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getName()} v${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getVersion()} could not be started.`, {type: "error"});
        data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin] = false;
        this.savePluginData();
        _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", name + " could not be started.", err);
    }
};

PluginModule.prototype.stopPlugin = function(plugin, reload = false) {
    try {
        data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.stop();
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"] && !reload) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(`${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getName()} v${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getVersion()} has stopped.`);
    }
    catch (err) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"] && !reload) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(`${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getName()} v${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getVersion()} could not be stopped.`, {type: "error"});
        _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getName() + " could not be stopped.", err);
    }
};

PluginModule.prototype.enablePlugin = function (plugin, reload = false) {
    if (data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin]) return;
    data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin] = true;
    this.savePluginData();
    this.startPlugin(plugin, reload);
};

PluginModule.prototype.disablePlugin = function (plugin, reload = false) {
    if (!data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin]) return;
    data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin] = false;
    this.savePluginData();
    this.stopPlugin(plugin, reload);
};

PluginModule.prototype.togglePlugin = function (plugin) {
    if (data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin]) this.disablePlugin(plugin);
    else this.enablePlugin(plugin);
};

PluginModule.prototype.loadPlugin = function(filename) {
    const error = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].loadContent(filename, "plugin");
    if (error) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-1"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showContentErrors({plugins: [error]});
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${filename} could not be loaded.`, {type: "error"});
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("ContentManager", `${filename} could not be loaded.`, error);
    }
    const plugin = Object.values(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]).find(p => p.filename == filename).plugin;
    try { if (plugin.load && typeof(plugin.load) == "function") plugin.load();}
    catch (err) {if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-1"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showContentErrors({plugins: [err]});}
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].log("ContentManager", `${plugin.getName()} v${plugin.getVersion()} was loaded.`);
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin.getName()} v${plugin.getVersion()} was loaded.`, {type: "success"});
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("plugin-loaded", plugin.getName());
};

PluginModule.prototype.unloadPlugin = function(filenameOrName) {
    const bdplugin = Object.values(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]).find(p => p.filename == filenameOrName) || data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][filenameOrName];
    if (!bdplugin) return;
    const plugin = bdplugin.plugin.getName();
    if (data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin]) this.disablePlugin(plugin, true);
    const error = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].unloadContent(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].filename, "plugin");
    delete data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin];
    if (error) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-1"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showContentErrors({plugins: [error]});
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} could not be unloaded. It may have not been loaded yet.`, {type: "error"});
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("ContentManager", `${plugin} could not be unloaded. It may have not been loaded yet.`, error);
    }
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].log("ContentManager", `${plugin} was unloaded.`);
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} was unloaded.`, {type: "success"});
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("plugin-unloaded", plugin);
};

PluginModule.prototype.reloadPlugin = function(filenameOrName) {
    const bdplugin = Object.values(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]).find(p => p.filename == filenameOrName) || data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][filenameOrName];
    if (!bdplugin) return this.loadPlugin(filenameOrName);
    const plugin = bdplugin.plugin.getName();
    const enabled = data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin];
    if (enabled) this.stopPlugin(plugin, true);
    const error = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].reloadContent(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].filename, "plugin");
    if (error) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-1"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showContentErrors({plugins: [error]});
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} could not be reloaded.`, {type: "error"});
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("ContentManager", `${plugin} could not be reloaded.`, error);
    }
    if (data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.load && typeof(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.load) == "function") data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.load();
    if (enabled) this.startPlugin(plugin, true);
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].log("ContentManager", `${plugin} v${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getVersion()} was reloaded.`);
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${plugin} v${data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin.getVersion()} was reloaded.`, {type: "success"});
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("plugin-reloaded", plugin);
};

PluginModule.prototype.updatePluginList = function() {
    const results = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].loadNewContent("plugin");
    for (const filename of results.added) this.loadPlugin(filename);
    for (const name of results.removed) this.unloadPlugin(name);
};

PluginModule.prototype.loadPluginData = function () {
    const saved = _datastore__WEBPACK_IMPORTED_MODULE_6__["default"].getSettingGroup("plugins");
    if (!saved) return;
    Object.assign(data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"], saved);
};

PluginModule.prototype.savePluginData = function () {
    _datastore__WEBPACK_IMPORTED_MODULE_6__["default"].setSettingGroup("plugins", data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"]);
};

PluginModule.prototype.newMessage = function () {
    var plugins = Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
    for (var i = 0; i < plugins.length; i++) {
        var plugin = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugins[i]].plugin;
        if (!data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin.getName()]) continue;
        if (typeof plugin.onMessage === "function") {
            try { plugin.onMessage(); }
            catch (err) { _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", "Unable to fire onMessage for " + plugin.getName() + ".", err); }
        }
    }
};

PluginModule.prototype.channelSwitch = function () {
    var plugins = Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
    for (var i = 0; i < plugins.length; i++) {
        var plugin = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugins[i]].plugin;
        if (!data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin.getName()]) continue;
        if (typeof plugin.onSwitch === "function") {
            try { plugin.onSwitch(); }
            catch (err) { _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", "Unable to fire onSwitch for " + plugin.getName() + ".", err); }
        }
    }
};

PluginModule.prototype.rawObserver = function(e) {
    var plugins = Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
    for (var i = 0; i < plugins.length; i++) {
        var plugin = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugins[i]].plugin;
        if (!data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][plugin.getName()]) continue;
        if (typeof plugin.observer === "function") {
            try { plugin.observer(e); }
            catch (err) { _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("Plugins", "Unable to fire observer for " + plugin.getName() + ".", err); }
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = (new PluginModule());

/***/ }),

/***/ "./src/modules/publicservers.js":
/*!**************************************!*\
  !*** ./src/modules/publicservers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui */ "./src/ui/ui.js");




/* harmony default export */ __webpack_exports__["default"] = (new class {

    initialize() {
        const wrapper = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].guildClasses.wrapper.split(" ")[0];
        const guilds = $(`.${wrapper} .scroller-2FKFPG >:first-child`);
        guilds.after(this.button);
    }

    get component() {
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(ui__WEBPACK_IMPORTED_MODULE_2__["PublicServers"].Layer, {
            rootId: "pubslayerroot",
            id: "pubslayer",
            children: modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(ui__WEBPACK_IMPORTED_MODULE_2__["PublicServers"].Menu, {rootId: "pubslayerroot"})
        });
    }

    get root() {
        let _root = document.getElementById("pubslayerroot");
        if (!_root) {
            if (!this.injectRoot()) return null;
            return this.root;
        }
        return _root;
    }

    injectRoot() {
        if (!$(".layers, .layers-3iHuyZ").length) return false;
        $(".layers, .layers-3iHuyZ").append($("<div/>", {
            id: "pubslayerroot"
        }));
        return true;
    }

    render() {
        // BdApi.alert("Broken", "Sorry but the Public Servers modules is currently broken, I recommend disabling this feature for now.");
        let root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: .layers");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(this.component, root);
    }

    get button() {
        let btn = $("<div/>", {
            "class": modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].guildClasses.listItem,
            "id": "bd-pub-li",
            "style": data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-1"] ? "" : "display: none;"
        }).append($("<div/>", {
            "class": "wrapper-25eVIn " + modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].guildClasses.circleButtonMask,
            "text": "public",
            "id": "bd-pub-button",
            "click": () => { this.render(); }
        }));

        return btn;
    }
});

/***/ }),

/***/ "./src/modules/settingspanel.js":
/*!**************************************!*\
  !*** ./src/modules/settingspanel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _classnormalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classnormalizer */ "./src/modules/classnormalizer.js");
/* harmony import */ var _contentmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentmanager */ "./src/modules/contentmanager.js");
/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ "./src/modules/core.js");
/* harmony import */ var _voicemode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voicemode */ "./src/modules/voicemode.js");
/* harmony import */ var _emotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emotes */ "./src/modules/emotes.js");
/* harmony import */ var _devmode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devmode */ "./src/modules/devmode.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui */ "./src/ui/ui.js");











/* harmony default export */ __webpack_exports__["default"] = (new class SettingsPanel {

    constructor() {
        this.renderer = new ui__WEBPACK_IMPORTED_MODULE_8__["SettingsPanel"]({onChange: this.updateSettings.bind(this)});
    }

    renderSidebar() {
        this.renderer.renderSidebar();
    }

    updateSettings(id, enabled) {
        data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"][id] = enabled;

        if (id == "bda-es-0") {
            if (enabled) $("#twitchcord-button-container").show();
            else $("#twitchcord-button-container").hide();
        }

        if (id == "bda-gs-2") {
            if (enabled) $("body").addClass("bd-minimal");
            else $("body").removeClass("bd-minimal");
        }

        if (id == "bda-gs-3") {
            if (enabled) $("body").addClass("bd-minimal-chan");
            else $("body").removeClass("bd-minimal-chan");
        }

        if (id == "bda-gs-1") {
            if (enabled) $("#bd-pub-li").show();
            else $("#bd-pub-li").hide();
        }

        if (id == "bda-gs-4") {
            if (enabled) _voicemode__WEBPACK_IMPORTED_MODULE_5__["default"].enable();
            else _voicemode__WEBPACK_IMPORTED_MODULE_5__["default"].disable();
        }

        if (id == "bda-gs-5") {
            if (enabled) $("#app-mount").addClass("bda-dark");
            else $("#app-mount").removeClass("bda-dark");
        }

        if (enabled && id == "bda-gs-6") _core__WEBPACK_IMPORTED_MODULE_4__["default"].inject24Hour();

        if (id == "bda-gs-7") {
            if (enabled) _core__WEBPACK_IMPORTED_MODULE_4__["default"].injectColoredText();
            else _core__WEBPACK_IMPORTED_MODULE_4__["default"].removeColoredText();
        }

        if (id == "bda-es-4") {
            if (enabled) _emotes__WEBPACK_IMPORTED_MODULE_6__["default"].autoCapitalize();
            else _emotes__WEBPACK_IMPORTED_MODULE_6__["default"].disableAutoCapitalize();
        }

        if (id == "fork-ps-4") {
            if (enabled) _classnormalizer__WEBPACK_IMPORTED_MODULE_1__["default"].start();
            else _classnormalizer__WEBPACK_IMPORTED_MODULE_1__["default"].stop();
        }

        if (id == "fork-ps-5") {
            if (enabled) {
                _contentmanager__WEBPACK_IMPORTED_MODULE_2__["default"].watchContent("plugin");
                _contentmanager__WEBPACK_IMPORTED_MODULE_2__["default"].watchContent("theme");
            }
            else {
                _contentmanager__WEBPACK_IMPORTED_MODULE_2__["default"].unwatchContent("plugin");
                _contentmanager__WEBPACK_IMPORTED_MODULE_2__["default"].unwatchContent("theme");
            }
        }

        if (id == "fork-wp-1") {
            _pluginapi__WEBPACK_IMPORTED_MODULE_3__["default"].setWindowPreference("transparent", enabled);
            if (enabled) _pluginapi__WEBPACK_IMPORTED_MODULE_3__["default"].setWindowPreference("backgroundColor", null);
            else _pluginapi__WEBPACK_IMPORTED_MODULE_3__["default"].setWindowPreference("backgroundColor", "#2f3136");
        }

        /*if (_c["fork-wp-2"]) {
            const current = BdApi.getWindowPreference("frame");
            if (current != _c["fork-wp-2"]) BdApi.setWindowPreference("frame", _c["fork-wp-2"]);
        }*/


        if (id == "bda-gs-8") {
            if (enabled) _devmode__WEBPACK_IMPORTED_MODULE_7__["default"].enable(data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-dm-1"]);
            else _devmode__WEBPACK_IMPORTED_MODULE_7__["default"].disable();
        }

        _core__WEBPACK_IMPORTED_MODULE_4__["default"].saveSettings();
    }

    initializeSettings() {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-es-0"]) $("#twitchcord-button-container").show();
        // if (SettingsCookie["bda-gs-b"]) $("body").addClass("bd-blue");
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-2"]) $("body").addClass("bd-minimal");
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-3"]) $("body").addClass("bd-minimal-chan");
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-1"]) $("#bd-pub-li").show();
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-4"]) _voicemode__WEBPACK_IMPORTED_MODULE_5__["default"].enable();
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-5"]) $("#app-mount").addClass("bda-dark");
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-6"]) _core__WEBPACK_IMPORTED_MODULE_4__["default"].inject24Hour();
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-7"]) _core__WEBPACK_IMPORTED_MODULE_4__["default"].injectColoredText();
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-es-4"]) _emotes__WEBPACK_IMPORTED_MODULE_6__["default"].autoCapitalize();
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-4"]) _classnormalizer__WEBPACK_IMPORTED_MODULE_1__["default"].start();

        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-5"]) {
            _contentmanager__WEBPACK_IMPORTED_MODULE_2__["default"].watchContent("plugin");
            _contentmanager__WEBPACK_IMPORTED_MODULE_2__["default"].watchContent("theme");
        }

        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-gs-8"]) _devmode__WEBPACK_IMPORTED_MODULE_7__["default"].enable(data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-dm-1"]);

        _core__WEBPACK_IMPORTED_MODULE_4__["default"].saveSettings();
    }
});

/***/ }),

/***/ "./src/modules/thememanager.js":
/*!*************************************!*\
  !*** ./src/modules/thememanager.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var _contentmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentmanager */ "./src/modules/contentmanager.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/modules/core.js");
/* harmony import */ var _pluginapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluginapi */ "./src/modules/pluginapi.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");








function ThemeModule() {

}

ThemeModule.prototype.loadThemes = function () {
    this.loadThemeData();
    const errors = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].loadThemes();
    var themes = Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["Themes"]);

    for (var i = 0; i < themes.length; i++) {
        var name = data__WEBPACK_IMPORTED_MODULE_0__["Themes"][themes[i]].name;
        if (!data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][name]) data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][name] = false;
        if (data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][name]) $("head").append($("<style>", {id: _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].escapeID(name), text: unescape(data__WEBPACK_IMPORTED_MODULE_0__["Themes"][name].css)}));
    }
    for (let theme in data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"]) {
        if (!data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme]) delete data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][theme];
    }
    this.saveThemeData();
    return errors;
    // if (SettingsCookie["fork-ps-5"]) ContentManager.watchContent("theme");
};

ThemeModule.prototype.enableTheme = function(theme, reload = false) {
    data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][theme] = true;
    this.saveThemeData();
    $("head").append($("<style>", {id: _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].escapeID(theme), text: unescape(data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].css)}));
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"] && !reload) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(`${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].name} v${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].version} has been applied.`);
};

ThemeModule.prototype.disableTheme = function(theme, reload = false) {
    data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][theme] = false;
    this.saveThemeData();
    $(`#${_utilities__WEBPACK_IMPORTED_MODULE_2__["default"].escapeID(data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].name)}`).remove();
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"] && !reload) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showToast(`${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].name} v${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].version} has been disabled.`);
};

ThemeModule.prototype.toggleTheme = function(theme) {
    if (data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][theme]) this.disableTheme(theme);
    else this.enableTheme(theme);
};

ThemeModule.prototype.loadTheme = function(filename) {
    const error = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].loadContent(filename, "theme");
    if (error) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-1"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showContentErrors({themes: [error]});
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${filename} could not be loaded. It may not have been loaded.`, {type: "error"});
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("ContentManager", `${filename} could not be loaded.`, error);
    }
    const theme = Object.values(data__WEBPACK_IMPORTED_MODULE_0__["Themes"]).find(p => p.filename == filename);
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].log("ContentManager", `${theme.name} v${theme.version} was loaded.`);
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme.name} v${theme.version} was loaded.`, {type: "success"});
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("theme-loaded", theme.name);
};

ThemeModule.prototype.unloadTheme = function(filenameOrName) {
    const bdtheme = Object.values(data__WEBPACK_IMPORTED_MODULE_0__["Themes"]).find(p => p.filename == filenameOrName) || data__WEBPACK_IMPORTED_MODULE_0__["Themes"][filenameOrName];
    if (!bdtheme) return;
    const theme = bdtheme.name;
    if (data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][theme]) this.disableTheme(theme, true);
    const error = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].unloadContent(data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].filename, "theme");
    delete data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme];
    if (error) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-1"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showContentErrors({themes: [error]});
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} could not be unloaded. It may have not been loaded yet.`, {type: "error"});
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("ContentManager", `${theme} could not be unloaded. It may have not been loaded yet.`, error);
    }
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].log("ContentManager", `${theme} was unloaded.`);
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} was unloaded.`, {type: "success"});
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("theme-unloaded", theme);
};

ThemeModule.prototype.reloadTheme = function(filenameOrName) {
    const bdtheme = Object.values(data__WEBPACK_IMPORTED_MODULE_0__["Themes"]).find(p => p.filename == filenameOrName) || data__WEBPACK_IMPORTED_MODULE_0__["Themes"][filenameOrName];
    if (!bdtheme) return this.loadTheme(filenameOrName);
    const theme = bdtheme.name;
    const error = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].reloadContent(data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].filename, "theme");
    if (data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][theme]) this.disableTheme(theme, true), this.enableTheme(theme, true);
    if (error) {
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-1"]) _core__WEBPACK_IMPORTED_MODULE_3__["default"].showContentErrors({themes: [error]});
        if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} could not be reloaded.`, {type: "error"});
        return _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].err("ContentManager", `${theme} could not be reloaded.`, error);
    }
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].log("ContentManager", `${theme} v${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].version} was reloaded.`);
    if (data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-2"]) _pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"].showToast(`${theme} v${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].version} was reloaded.`, {type: "success"});
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("theme-reloaded", theme);
};

ThemeModule.prototype.updateThemeList = function() {
    const results = _contentmanager__WEBPACK_IMPORTED_MODULE_1__["default"].loadNewContent("theme");
    for (const filename of results.added) this.loadTheme(filename);
    for (const name of results.removed) this.unloadTheme(name);
};

ThemeModule.prototype.loadThemeData = function() {
    const saved = _datastore__WEBPACK_IMPORTED_MODULE_6__["default"].getSettingGroup("themes");
    if (!saved) return;
    Object.assign(data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"], saved);
};

ThemeModule.prototype.saveThemeData = function () {
    _datastore__WEBPACK_IMPORTED_MODULE_6__["default"].setSettingGroup("themes", data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"]);
};

/* harmony default export */ __webpack_exports__["default"] = (new ThemeModule());

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utilities; });
class Utilities {
    /** Document/window width */
    static get screenWidth() { return Math.max(document.documentElement.clientWidth, window.innerWidth || 0); }
    /** Document/window height */
    static get screenHeight() { return Math.max(document.documentElement.clientHeight, window.innerHeight || 0); }

    static stripBOM(content) {
        if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
        }
        return content;
    }

    static getTextArea() {
        return $(".channelTextArea-1LDbYG textarea");
    }

    static getInternalInstance(node) {
        return node[Object.keys(node).find(k => k.startsWith("__reactInternalInstance"))] || null;
    }

    static insertText(textarea, text) {
        textarea.focus();
        textarea.selectionStart = 0;
        textarea.selectionEnd = textarea.value.length;
        document.execCommand("insertText", false, text);
    }

    static injectCss(uri) {
        $("<link/>", {
            type: "text/css",
            rel: "stylesheet",
            href: uri
        }).appendTo($("head"));
    }

    static injectJs(uri) {
        return new Promise(resolve => {
            $("<script/>", {
                type: "text/javascript",
                src: uri,
                onload: resolve
            }).appendTo($("body"));
        });
    }

    static escapeID(id) {
        return id.replace(/^[^a-z]+|[^\w-]+/gi, "");
    }

    static log(moduleName, message) {
        console.log(`%c[BandagedBD]%c [${moduleName}]%c ${message}`, "color: #3a71c1; font-weight: 700;", "color: #3a71c1;", "");
    }

    static warn(moduleName, message) {
        console.warn(`%c[BandagedBD]%c [${moduleName}]%c ${message}`, "color: #E8A400; font-weight: 700;", "color: #E8A400;", "");
    }

    static err(moduleName, message, error) {
        console.log(`%c[BandagedBD]%c [${moduleName}]%c ${message}`, "color: red; font-weight: 700;", "color: red;", "");
        if (error) {
            console.groupCollapsed("%cError: " + error.message, "color: red;");
            console.error(error.stack);
            console.groupEnd();
        }
    }

    static escape(s) {
        return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    }

    static testJSON(data) {
        try {
            JSON.parse(data);
            return true;
        }
        catch (err) {
            return false;
        }
    }

    static suppressErrors(method, message) {
        return (...params) => {
            try { return method(...params);	}
            catch (e) { this.err("SuppressedError", "Error occurred in " + message, e); }
        };
    }

    static monkeyPatch(what, methodName, options) {
        const {before, after, instead, once = false, silent = false, force = false} = options;
        const displayName = options.displayName || what.displayName || what.name || what.constructor.displayName || what.constructor.name;
        if (!silent) console.log("patch", methodName, "of", displayName); // eslint-disable-line no-console
        if (!what[methodName]) {
            if (force) what[methodName] = function() {};
            else return console.error(methodName, "does not exist for", displayName); // eslint-disable-line no-console
        }
        const origMethod = what[methodName];
        const cancel = () => {
            if (!silent) console.log("unpatch", methodName, "of", displayName); // eslint-disable-line no-console
            what[methodName] = origMethod;
        };
        what[methodName] = function() {
            const data = {
                thisObject: this,
                methodArguments: arguments,
                cancelPatch: cancel,
                originalMethod: origMethod,
                callOriginalMethod: () => data.returnValue = data.originalMethod.apply(data.thisObject, data.methodArguments)
            };
            if (instead) {
                const tempRet = Utilities.suppressErrors(instead, "`instead` callback of " + what[methodName].displayName)(data);
                if (tempRet !== undefined) data.returnValue = tempRet;
            }
            else {
                if (before) Utilities.suppressErrors(before, "`before` callback of " + what[methodName].displayName)(data);
                data.callOriginalMethod();
                if (after) Utilities.suppressErrors(after, "`after` callback of " + what[methodName].displayName)(data);
            }
            if (once) cancel();
            return data.returnValue;
        };
        what[methodName].__monkeyPatched = true;
        if (!what[methodName].__originalMethod) what[methodName].__originalMethod = origMethod;
        what[methodName].displayName = "patched " + (what[methodName].displayName || methodName);
        return cancel;
    }

    static onRemoved(node, callback) {
        const observer = new MutationObserver((mutations) => {
            for (let m = 0; m < mutations.length; m++) {
                const mutation = mutations[m];
                const nodes = Array.from(mutation.removedNodes);
                const directMatch = nodes.indexOf(node) > -1;
                const parentMatch = nodes.some(parent => parent.contains(node));
                if (directMatch || parentMatch) {
                    observer.disconnect();
                    callback();
                }
            }
        });

        observer.observe(document.body, {subtree: true, childList: true});
    }

    /**
     * Generates an automatically memoizing version of an object.
     * @author Zerebos
     * @param {Object} object - object to memoize
     * @returns {Proxy} the proxy to the object that memoizes properties
     */
    static memoizeObject(object) {
        const proxy = new Proxy(object, {
            get: function(obj, mod) {
                if (!obj.hasOwnProperty(mod)) return undefined;
                if (Object.getOwnPropertyDescriptor(obj, mod).get) {
                    let value = obj[mod];
                    delete obj[mod];
                    obj[mod] = value;
                }
                return obj[mod];
            },
            set: function(obj, mod, value) {
                if (obj.hasOwnProperty(mod)) return this.err("MemoizedObject", "Trying to overwrite existing property");
                obj[mod] = value;
                return obj[mod];
            }
        });

        Object.defineProperty(proxy, "hasOwnProperty", {value: function(prop) {
            return this[prop] !== undefined;
        }});

        return proxy;
    }
}

/***/ }),

/***/ "./src/modules/voicemode.js":
/*!**********************************!*\
  !*** ./src/modules/voicemode.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (new class {
    enable() {
        $(".scroller.guild-channels ul").first().css("display", "none");
        $(".scroller.guild-channels header").first().css("display", "none");
        $(".app.flex-vertical, .app-2rEoOp").first().css("overflow", "hidden");
        $(".chat-3bRxxu").first().css("visibility", "hidden").css("min-width", "0px");
        $(".flex-vertical.channels-wrap").first().css("flex-grow", "100000");
        $(".guild-header .btn.btn-hamburger").first().css("visibility", "hidden");
    }

    disable() {
        $(".scroller.guild-channels ul").first().css("display", "");
        $(".scroller.guild-channels header").first().css("display", "");
        $(".app.flex-vertical, .app-2rEoOp").first().css("overflow", "");
        $(".chat-3bRxxu").first().css("visibility", "").css("min-width", "");
        $(".flex-vertical.channels-wrap").first().css("flex-grow", "");
        $(".guild-header .btn.btn-hamburger").first().css("visibility", "");
    }
});

/***/ }),

/***/ "./src/ui/customcss/detached.js":
/*!**************************************!*\
  !*** ./src/ui/customcss/detached.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_CssEditorDetached; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _settings_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/checkbox */ "./src/ui/settings/checkbox.js");





class V2C_CssEditorDetached extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        let self = this;
        self.onClick = self.onClick.bind(self);
        self.updateCss = self.updateCss.bind(self);
        self.saveCss = self.saveCss.bind(self);
        self.onChange = self.onChange.bind(self);
    }

    componentDidMount() {
        $("#app-mount").addClass("bd-detached-editor");
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].editorDetached = true;
        // this.updateLineCount();
        this.editor = ace.edit("bd-customcss-editor-detached");
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/css");
        this.editor.setShowPrintMargin(false);
        this.editor.setFontSize(14);
        this.editor.on("change", () => {
            if (!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-css-0"]) return;
            this.saveCss();
            this.updateCss();
        });

    }

    componentWillUnmount() {
        $("#app-mount").removeClass("bd-detached-editor");
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].editorDetached = false;
        this.editor.destroy();
    }

    updateLineCount() {
        let lineCount = this.refs.editor.value.split("\n").length;
        if (lineCount == this.props.lines) return;
        this.refs.lines.textContent = Array.from(new Array(lineCount), (_, i) => i + 1).join(".\n") + ".";
        this.props.lines = lineCount;
    }

    get options() {
        return {
            lineNumbers: true,
            mode: "css",
            indentUnit: 4,
            theme: "material",
            scrollbarStyle: "simple"
        };
    }

    get css() {
        let _ccss = modules__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getBDData("bdcustomcss");
        let ccss = "";
        if (_ccss && _ccss !== "") {
            ccss = atob(_ccss);
        }
        return ccss;
    }

    get root() {
        let _root = $("#bd-customcss-detach-container");
        if (!_root.length) {
            if (!this.injectRoot()) return null;
            return this.detachedRoot;
        }
        return _root[0];
    }

    injectRoot() {
        if (!$(".app, .app-2rEoOp").length) return false;
        $("<div/>", {
            id: "bd-customcss-detach-container"
        }).insertAfter($(".app, .app-2rEoOp"));
        return true;
    }

    render() {
        let self = this;
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
            "div",
            {className: "bd-detached-css-editor", id: "bd-customcss-detach-editor"},
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                "div",
                {id: "bd-customcss-innerpane"},
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "editor-wrapper"},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {id: "bd-customcss-editor-detached", className: "editor", ref: "editor"}, self.css)
                ),
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                    "div",
                    {id: "bd-customcss-attach-controls"},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                        "ul",
                        {className: "checkbox-group"},
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_settings_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {id: "live-update", text: "Live Update", onChange: self.onChange, checked: data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-css-0"]})
                    ),
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                        "div",
                        {id: "bd-customcss-detach-controls-button"},
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "button",
                            {style: {borderRadius: "3px 0 0 3px", borderRight: "1px solid #3f4146"}, className: "btn btn-primary", onClick: () => {
                                    self.onClick("update");
                                }},
                            "Update"
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "button",
                            {style: {borderRadius: "0", borderLeft: "1px solid #2d2d2d", borderRight: "1px solid #2d2d2d"}, className: "btn btn-primary", onClick: () => {
                                    self.onClick("save");
                                }},
                            "Save"
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "button",
                            {style: {borderRadius: "0 3px 3px 0", borderLeft: "1px solid #3f4146"}, className: "btn btn-primary", onClick: () => {
                                    self.onClick("attach");
                                }},
                            "Attach"
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "span",
                            {style: {fontSize: "10px", marginLeft: "5px"}},
                            "Unsaved changes are lost on attach"
                        )
                    )
                )
            )
        );
    }

    onChange(id, checked) {
        switch (id) {
            case "live-update":
                data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-css-0"] = checked;
                modules__WEBPACK_IMPORTED_MODULE_1__["Core"].saveSettings();
                break;
        }
    }

    onClick(id) {
        let self = this;
        switch (id) {
            case "attach":
                if ($("#editor-detached").length) self.props.attach();
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.unmountComponentAtNode(self.root);
                self.root.remove();
                break;
            case "update":
                self.updateCss();
                break;
            case "save":
                self.saveCss();
                break;
        }
    }

    updateCss() {
        if ($("#customcss").length == 0) {
            $("head").append("<style id=\"customcss\"></style>");
        }
        $("#customcss").text(this.editor.session.getValue()).detach().appendTo(document.head);
    }

    saveCss() {
        modules__WEBPACK_IMPORTED_MODULE_1__["DataStore"].setBDData("bdcustomcss", btoa(this.editor.session.getValue()));
    }
}

/***/ }),

/***/ "./src/ui/customcss/editor.js":
/*!************************************!*\
  !*** ./src/ui/customcss/editor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_CssEditor; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _detached__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detached */ "./src/ui/customcss/detached.js");
/* harmony import */ var _settings_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/checkbox */ "./src/ui/settings/checkbox.js");
/* harmony import */ var _settings_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/title */ "./src/ui/settings/title.js");







class V2C_CssEditor extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        let self = this;
        self.props.lines = 0;
        self.setInitialState();
        self.attach = self.attach.bind(self);
        self.detachedEditor = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_detached__WEBPACK_IMPORTED_MODULE_2__["default"], {attach: self.attach});
        self.onClick = self.onClick.bind(self);
        self.updateCss = self.updateCss.bind(self);
        self.saveCss = self.saveCss.bind(self);
        self.detach = self.detach.bind(self);
    }

    setInitialState() {
        this.state = {
            detached: this.props.detached || modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].editorDetached
        };
    }

    componentDidMount() {
        // this.updateLineCount();
        this.editor = ace.edit("bd-customcss-editor");
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/css");
        this.editor.setShowPrintMargin(false);
        this.editor.setFontSize(14);
        this.editor.on("change", () => {
            if (!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-css-0"]) return;
            this.saveCss();
            this.updateCss();
        });
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    componentDidUpdate(prevProps, prevState) {
        let self = this;
        if (prevState.detached && !self.state.detached) {
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.unmountComponentAtNode(self.detachedRoot);
        }
    }

    codeMirror() {
    }

    get options() {
        return {
            lineNumbers: true,
            mode: "css",
            indentUnit: 4,
            theme: "material",
            scrollbarStyle: "simple"
        };
    }

    get css() {
        let _ccss = modules__WEBPACK_IMPORTED_MODULE_1__["DataStore"].getBDData("bdcustomcss");
        let ccss = "";
        if (_ccss && _ccss !== "") {
            ccss = atob(_ccss);
        }
        return ccss;
    }

    updateLineCount() {
        let lineCount = this.refs.editor.value.split("\n").length;
        if (lineCount == this.props.lines) return;
        this.refs.lines.textContent = Array.from(new Array(lineCount), (_, i) => i + 1).join(".\n") + ".";
        this.props.lines = lineCount;
    }

    render() {
        let self = this;

        let {detached} = self.state;
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
            "div",
            {className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default", style: {padding: "60px 40px 0px"}},
            detached && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                "div",
                {id: "editor-detached"},
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_4__["default"], {text: "Custom CSS Editor"}),
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                    "h3",
                    null,
                    "Editor Detached"
                ),
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                    "button",
                    {className: "btn btn-primary", onClick: () => {
                            self.attach();
                        }},
                    "Attach"
                )
            ),
            !detached && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                "div",
                null,
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_4__["default"], {text: "Custom CSS Editor"}),
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "editor-wrapper"},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {id: "bd-customcss-editor", className: "editor", ref: "editor"}, self.css)
                ),
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                    "div",
                    {id: "bd-customcss-attach-controls"},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                        "ul",
                        {className: "checkbox-group"},
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_settings_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {id: "live-update", text: "Live Update", onChange: this.onChange, checked: data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-css-0"]})
                    ),
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                        "div",
                        {id: "bd-customcss-detach-controls-button"},
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "button",
                            {style: {borderRadius: "3px 0 0 3px", borderRight: "1px solid #3f4146"}, className: "btn btn-primary", onClick: () => {
                                    self.onClick("update");
                                }},
                            "Update"
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "button",
                            {style: {borderRadius: "0", borderLeft: "1px solid #2d2d2d", borderRight: "1px solid #2d2d2d"}, className: "btn btn-primary", onClick: () => {
                                    self.onClick("save");
                                }},
                            "Save"
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "button",
                            {style: {borderRadius: "0 3px 3px 0", borderLeft: "1px solid #3f4146"}, className: "btn btn-primary", onClick: () => {
                                    self.onClick("detach");
                                }},
                            "Detach"
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                            "span",
                            {style: {fontSize: "10px", marginLeft: "5px"}},
                            "Unsaved changes are lost on detach"
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "help-text"},
                            "Press ",
                            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("code", {className: "inline"}, "ctrl"),
                            "+",
                            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "inline"}, ","),
                            " with the editor focused to access the editor's settings."
                        )
                    )
                )
            )
        );
    }

    onClick(arg) {
        let self = this;
        switch (arg) {
            case "update":
                self.updateCss();
                break;
            case "save":
                self.saveCss();
                break;
            case "detach":
                self.detach();
                break;
        }
    }

    onChange(id, checked) {
        switch (id) {
            case "live-update":
                data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["bda-css-0"] = checked;
                modules__WEBPACK_IMPORTED_MODULE_1__["Core"].saveSettings();
                break;
        }
    }

    updateCss() {
        if ($("#customcss").length == 0) {
            $("head").append("<style id=\"customcss\"></style>");
        }
        $("#customcss").text(this.editor.session.getValue()).detach().appendTo(document.head);
    }

    saveCss() {
        modules__WEBPACK_IMPORTED_MODULE_1__["DataStore"].setBDData("bdcustomcss", btoa(this.editor.session.getValue()));
    }

    detach() {
        let self = this;
        self.setState({
            detached: true
        });
        let droot = self.detachedRoot;
        if (!droot) {
            console.log("FAILED TO INJECT ROOT: .app");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(self.detachedEditor, droot);
    }

    get detachedRoot() {
        let _root = $("#bd-customcss-detach-container");
        if (!_root.length) {
            if (!this.injectDetachedRoot()) return null;
            return this.detachedRoot;
        }
        return _root[0];
    }

    injectDetachedRoot() {
        if (!$(".app, .app-2rEoOp").length) return false;
        $("<div/>", {
            id: "bd-customcss-detach-container"
        }).insertAfter($(".app, .app-2rEoOp"));
        return true;
    }

    attach() {
        let self = this;
        self.setState({
            detached: false
        });
    }
}

/***/ }),

/***/ "./src/ui/emote.js":
/*!*************************!*\
  !*** ./src/ui/emote.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BDEmote; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");



class BDEmote extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactComponent {
    constructor(props) {
        super(props);

        const isFav = modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"] && modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].favoriteEmotes && modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].favoriteEmotes[this.label] ? true : false;
        this.state = {
            shouldAnimate: !this.animateOnHover,
            isFavorite: isFav
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    get animateOnHover() {
        return data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-es-2"];
    }

    get label() {
        return this.props.modifier ? `${this.props.name}:${this.props.modifier}` : this.props.name;
    }

    get modifierClass() {
        return this.props.modifier ? ` emote${this.props.modifier}` : "";
    }

    onMouseEnter() {
        if (!this.state.shouldAnimate && this.animateOnHover) this.setState({shouldAnimate: true});
        if (!this.state.isFavorite && modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].favoriteEmotes[this.label]) this.setState({isFavorite: true});
        else if (this.state.isFavorite && !modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].favoriteEmotes[this.label]) this.setState({isFavorite: false});
    }

    onMouseLeave() {
        if (this.state.shouldAnimate && this.animateOnHover) this.setState({shouldAnimate: false});
    }

    onClick(e) {
        if (this.props.onClick) this.props.onClick(e);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].TooltipWrapper, {
                color: "black",
                position: "top",
                text: this.label,
                delay: 750
            },
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {
                    className: "emotewrapper" + (this.props.jumboable ? " jumboable" : ""),
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: this.onClick
                },
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("img", {
                        draggable: false,
                        className: "emote" + this.modifierClass + (this.props.jumboable ? " jumboable" : "") + (!this.state.shouldAnimate ? " stop-animation" : ""),
                        dataModifier: this.props.modifier,
                        alt: this.label,
                        src: this.props.url
                    }),
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("input", {
                        className: "fav" + (this.state.isFavorite ? " active" : ""),
                        title: "Favorite!",
                        type: "button",
                        onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (this.state.isFavorite) {
                                delete modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].favoriteEmotes[this.label];
                                modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].updateFavorites();
                            }
                            else {
                                modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].favorite(this.label, this.props.url);
                            }
                            this.setState({isFavorite: !this.state.isFavorite});
                        }
                    })
                )
            );
    }
}

/***/ }),

/***/ "./src/ui/icons/close.js":
/*!*******************************!*\
  !*** ./src/ui/icons/close.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_XSvg; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_XSvg extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "svg",
            {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12", style: {width: "18px", height: "18px"}},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "g",
                {className: "background", fill: "none", fillRule: "evenodd"},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("path", {d: "M0 0h12v12H0"}),
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("path", {className: "fill", fill: "#dcddde", d: "M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"})
            )
        );
    }
}

/***/ }),

/***/ "./src/ui/icons/reload.js":
/*!********************************!*\
  !*** ./src/ui/icons/reload.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_ReloadIcon; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_ReloadIcon extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "#dcddde",
                className: "bd-reload " + this.props.className,
                onClick: this.props.onClick,
                style: {width: this.props.size || "24px", height: this.props.size || "24px"}
            },
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("path", {d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("path", {fill: "none", d: "M0 0h24v24H0z"})
        );
    }
}

/***/ }),

/***/ "./src/ui/layer.js":
/*!*************************!*\
  !*** ./src/ui/layer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Layer; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_Layer extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(window).on(`keyup.${this.props.id}`, e => {
            if (e.which === 27) {
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactDom.unmountComponentAtNode(this.refs.root.parentNode);
            }
        });

        $(`#${this.props.id}`).animate({opacity: 1}, {
            step: function(now) {
              $(this).css("transform", `scale(${1.1 - 0.1 * now}) translateZ(0px)`);
            },
            duration: 200,
            done: () => {$(`#${this.props.id}`).css("opacity", "").css("transform", "");}
        });
    }

    componentWillUnmount() {
        $(window).off(`keyup.${this.props.id}`);
        $(`#${this.props.id}`).animate({opacity: 0}, {
            step: function(now) {
              $(this).css("transform", `scale(${1.1 - 0.1 * now}) translateZ(0px)`);
            },
            duration: 200,
            done: () => {$(`#${this.props.rootId}`).remove();}
        });

        $("[class*=\"layer-\"]").removeClass("publicServersOpen").animate({opacity: 1}, {
            step: function(now) {
              $(this).css("transform", `scale(${0.07 * now + 0.93}) translateZ(0px)`);
            },
            duration: 200,
            done: () => {$("[class*=\"layer-\"]").css("opacity", "").css("transform", "");}
        });

    }

    componentWillMount() {
        $("[class*=\"layer-\"]").addClass("publicServersOpen").animate({opacity: 0}, {
            step: function(now) {
              $(this).css("transform", `scale(${0.07 * now + 0.93}) translateZ(0px)`);
            },
            duration: 200
        });
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "layer bd-layer layer-3QrUeG", id: this.props.id, ref: "root", style: {opacity: 0, transform: "scale(1.1) translateZ(0px)"}},
            this.props.children
        );
    }
}

/***/ }),

/***/ "./src/ui/list.js":
/*!************************!*\
  !*** ./src/ui/list.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_List; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_List extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "ul",
            {className: this.props.className},
            this.props.children
        );
    }
}

/***/ }),

/***/ "./src/ui/publicservers/card.js":
/*!**************************************!*\
  !*** ./src/ui/publicservers/card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_ServerCard; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_ServerCard extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
        if (!this.props.server.iconUrl) this.props.server.iconUrl = this.props.fallback;
        this.state = {
            imageError: false,
            joined: this.props.guildList.includes(this.props.server.identifier)
        };
    }

    render() {
        let {server} = this.props;
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div", // cardPrimary-1Hv-to
            {className: `card-3Qj_Yx cardPrimary-1Hv-to marginBottom8-AtZOdT bd-server-card${server.pinned ? " bd-server-card-pinned" : ""}`},
            // BDV2.react.createElement(
                // "div",
                // { className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2yIZo0 alignStretch-1hwxMa noWrap-3jynv6" },
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("img", {ref: "img", className: "bd-server-image", src: server.iconUrl, onError: this.handleError.bind(this)}),
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "div",
                    {className: "flexChild-faoVW3 bd-server-content"},
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                        "div",
                        {className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6 bd-server-header"},
                        modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                            "h5",
                            {className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-name"},
                            server.name
                        ),
                        modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                            "h5",
                            {className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-member-count"},
                            server.members,
                            " Members"
                        )
                    ),
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                        "div",
                        {className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6"},
                        modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                            "div",
                            {className: "scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y bd-server-description-container"},
                            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                                "div",
                                {className: "scroller-2FKFPG scroller bd-server-description"},
                                    server.description
                            )
                        )
                    ),
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                        "div",
                        {className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6 bd-server-footer"},
                        modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                            "div",
                            {className: "flexChild-faoVW3 bd-server-tags", style: {flex: "1 1 auto"}},
                            server.categories.join(", ")
                        ),
                        this.state.joined && modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                            "button",
                            {type: "button", className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN colorGreen-29iAKY", style: {minHeight: "12px", marginTop: "4px", backgroundColor: "#3ac15c"}},
                            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                                "div",
                                {className: "ui-button-contents"},
                                "Joined"
                            )
                        ),
                        server.error && modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                            "button",
                            {type: "button", className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN disabled-9aF2ug", style: {minHeight: "12px", marginTop: "4px", backgroundColor: "#c13a3a"}},
                            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                                "div",
                                {className: "ui-button-contents"},
                                "Error"
                            )
                        ),
                        !server.error && !this.state.joined && modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                            "button",
                            {type: "button", className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN", style: {minHeight: "12px", marginTop: "4px"}, onClick: () => {this.join();}},
                            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                                "div",
                                {className: "ui-button-contents"},
                                "Join"
                            )
                        )
                    )
                )
            // )
        );
    }

    handleError() {
        this.props.server.iconUrl = this.props.fallback;
        this.setState({imageError: true});
    }

    join() {
        this.props.join(this);
        //this.setState({joined: true});
    }
}

/***/ }),

/***/ "./src/ui/publicservers/menu.js":
/*!**************************************!*\
  !*** ./src/ui/publicservers/menu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_PublicServers; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _sidebarview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebarview */ "./src/ui/sidebarview.js");
/* harmony import */ var _settings_exitbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/exitbutton */ "./src/ui/settings/exitbutton.js");
/* harmony import */ var _settings_tabbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/tabbar */ "./src/ui/settings/tabbar.js");
/* harmony import */ var _settings_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/title */ "./src/ui/settings/title.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card */ "./src/ui/publicservers/card.js");







class V2C_PublicServers extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        this.setInitialState();
        this.close = this.close.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.search = this.search.bind(this);
        this.searchKeyDown = this.searchKeyDown.bind(this);
        this.checkConnection = this.checkConnection.bind(this);
        this.join = this.join.bind(this);
        this.connect = this.connect.bind(this);

        this.GuildStore = modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].WebpackModules.findByUniqueProperties(["getGuilds"]);
        this.AvatarDefaults = modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].WebpackModules.findByUniqueProperties(["getUserAvatarURL", "DEFAULT_AVATARS"]);
        this.InviteActions = modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].WebpackModules.findByUniqueProperties(["acceptInvite"]);
        this.SortedGuildStore = modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].WebpackModules.findByUniqueProperties(["getSortedGuilds"]);
    }

    componentDidMount() {
        this.checkConnection();
     }

    setInitialState() {
        this.state = {
            selectedCategory: -1,
            title: "Loading...",
            loading: true,
            servers: [],
            next: null,
            connection: {
                state: 0,
                user: null
            }
        };
    }

    close() {
        modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactDom.unmountComponentAtNode(document.getElementById(this.props.rootId));
    }

    search(query, clear) {
        let self = this;

        $.ajax({
            method: "GET",
            url: `${self.endPoint}${query}${query ? "&schema=new" : "?schema=new"}`,
            success: data => {
                let servers = data.results.reduce((arr, server) => {
                    server.joined = false;
                    arr.push(server);
                    // arr.push(<ServerCard server={server} join={self.join}/>);
                    return arr;
                }, []);

                if (!clear) {
                    servers = self.state.servers.concat(servers);
                }
                else {
                    //servers.unshift(self.bdServer);
                }

                let end = data.size + data.from;
                data.next = `?from=${end}`;
                if (self.state.term) data.next += `&term=${self.state.term}`;
                if (self.state.selectedCategory) data.next += `&category=${self.categoryButtons[self.state.selectedCategory]}`;
                if (end >= data.total) {
                    end = data.total;
                    data.next = null;
                }

                let title = `Showing 1-${end} of ${data.total} results in ${self.categoryButtons[self.state.selectedCategory]}`;
                if (self.state.term) title += ` for ${self.state.term}`;

                self.setState({
                    loading: false,
                    title: title,
                    servers: servers,
                    next: data.next
                });

                if (clear) {
                    //console.log(self);
                    self.refs.sbv.refs.contentScroller.scrollTop = 0;
                }
            },
            error: () => {
                self.setState({
                    loading: false,
                    title: "Failed to load servers. Check console for details"
                });
            }
        });
    }

    join(serverCard) {
        if (serverCard.props.pinned) return this.InviteActions.acceptInvite(serverCard.props.invite_code);
        $.ajax({
            method: "GET",
            url: `${this.joinEndPoint}/${serverCard.props.server.identifier}`,
            headers: {
                "Accept": "application/json;",
                "Content-Type": "application/json;" ,
                "x-discord-token": this.state.connection.user.accessToken
            },
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: () => {
                serverCard.setState({joined: true});
            }
        });
    }

    connect() {
        let self = this;
        let options = self.windowOptions;
        options.x = Math.round(window.screenX + window.innerWidth / 2 - options.width / 2);
        options.y = Math.round(window.screenY + window.innerHeight / 2 - options.height / 2);

        self.joinWindow = new (window.require("electron").remote.BrowserWindow)(options);
        const url = "https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=https://auth.discordservers.com/info";
        self.joinWindow.webContents.on("did-navigate", (event, url) => {
            if (url != "https://auth.discordservers.com/info") return;
            self.joinWindow.close();
            self.checkConnection();
        });
        self.joinWindow.loadURL(url);
    }

    get windowOptions() {
        return {
            width: 500,
            height: 550,
            backgroundColor: "#282b30",
            show: true,
            resizable: false,
            maximizable: false,
            minimizable: false,
            alwaysOnTop: true,
            frame: false,
            center: false,
            webPreferences: {
                nodeIntegration: false
            }
        };
    }

    get bdServer() {
        let server = {
            name: "BetterDiscord",
            online: "7500+",
            members: "20000+",
            categories: ["community", "programming", "support"],
            description: "Official BetterDiscord server for support etc",
            identifier: "86004744966914048",
            iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/292e7f6bfff2b71dfd13e508a859aedd.webp",
            nativejoin: true,
            invite_code: "0Tmfo5ZbORCRqbAd",
            pinned: true
        };
        let guildList = this.SortedGuildStore.guildPositions;
        let defaultList = this.AvatarDefaults.DEFAULT_AVATARS;
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {server: server, pinned: true, join: this.join, guildList: guildList, fallback: defaultList[Math.floor(Math.random() * 5)]});
    }

    get endPoint() {
        return "https://search.discordservers.com";
    }

    get joinEndPoint() {
        return "https://j.discordservers.com";
    }

    get connectEndPoint() {
        return "https://join.discordservers.com/connect";
    }

    checkConnection() {
        let self = this;
        try {
            $.ajax({
                method: "GET",
                url: `https://auth.discordservers.com/info`,
                headers: {
                    "Accept": "application/json;",
                    "Content-Type": "application/json;"
                },
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                success: data => {
                    // Utils.log("PublicServer", "Got data: " + JSON.stringify(data));
                    self.setState({
                        selectedCategory: 0,
                        connection: {
                            state: 2,
                            user: data
                        }
                    });
                    self.search("", true);

                },
                error: () => {
                    self.setState({
                        title: "Not connected to discordservers.com!",
                        loading: true,
                        selectedCategory: -1,
                        connection: {
                            state: 1,
                            user: null
                        }
                    });
                }
            });
        }
        catch (error) {
            self.setState({
                title: "Not connected to discordservers.com!",
                loading: true,
                selectedCategory: -1,
                connection: {
                    state: 1,
                    user: null
                }
            });
        }
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_sidebarview__WEBPACK_IMPORTED_MODULE_1__["default"], {ref: "sbv", children: this.component});
    }

    get component() {
        return {
            sidebar: {
                component: this.sidebar
            },
            content: {
                component: this.content
            },
            tools: {
                component: modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_exitbutton__WEBPACK_IMPORTED_MODULE_2__["default"], {key: "pt", ref: "tools", onClick: this.close})
            }
        };
    }

    get sidebar() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "sidebar", key: "ps"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {className: "ui-tab-bar SIDE"},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "div",
                    {className: "ui-tab-bar-header", style: {fontSize: "16px"}},
                    "Public Servers"
                ),
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_tabbar__WEBPACK_IMPORTED_MODULE_3__["default"].Separator, null),
                this.searchInput,
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_tabbar__WEBPACK_IMPORTED_MODULE_3__["default"].Separator, null),
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_tabbar__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {text: "Categories"}),
                this.categoryButtons.map((value, index) => {
                    return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_tabbar__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {id: index, onClick: this.changeCategory, key: index, text: value, selected: this.state.selectedCategory === index});
                }),
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_tabbar__WEBPACK_IMPORTED_MODULE_3__["default"].Separator, null),
                this.footer,
                this.connection
            )
        );
    }

    get searchInput() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "ui-form-item"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {className: "ui-text-input flex-vertical", style: {width: "172px", marginLeft: "10px"}},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("input", {ref: "searchinput", onKeyDown: this.searchKeyDown, onChange: () => {}, type: "text", className: "input default", placeholder: "Search...", maxLength: "50"})
            )
        );
    }

    searchKeyDown(e) {
        let self = this;
        if (self.state.loading || e.which !== 13) return;
        self.setState({
            loading: true,
            title: "Loading...",
            term: e.target.value
        });
        let query = `?term=${e.target.value}`;
        if (self.state.selectedCategory !== 0) {
            query += `&category=${self.categoryButtons[self.state.selectedCategory]}`;
        }
        self.search(query, true);
    }

    get categoryButtons() {
        return ["All", "FPS Games", "MMO Games", "Strategy Games", "MOBA Games", "RPG Games", "Tabletop Games", "Sandbox Games", "Simulation Games", "Music", "Community", "Language", "Programming", "Other"];
    }

    changeCategory(id) {
        let self = this;
        if (self.state.loading) return;
        self.refs.searchinput.value = "";
        self.setState({
            loading: true,
            selectedCategory: id,
            title: "Loading...",
            term: null
        });
        if (id === 0) {
            self.search("", true);
            return;
        }
        self.search(`?category=${self.categoryButtons[id]}`, true);
    }

    get content() {
        let self = this;
        let guildList = this.SortedGuildStore.guildPositions;
        let defaultList = this.AvatarDefaults.DEFAULT_AVATARS;
        if (self.state.connection.state === 1) return self.notConnected;
        return [modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {ref: "content", key: "pc", className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_4__["default"], {text: self.state.title}),
            self.bdServer,
            self.state.servers.map((server) => {
                return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {key: server.identifier, server: server, join: self.join, guildList: guildList, fallback: defaultList[Math.floor(Math.random() * 5)]});
            }),
            self.state.next && modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "button",
                {type: "button", onClick: () => {
                        if (self.state.loading) return;self.setState({loading: true}); self.search(self.state.next, false);
                    }, className: "ui-button filled brand small grow", style: {width: "100%", marginTop: "10px", marginBottom: "10px"}},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "div",
                    {className: "ui-button-contents"},
                    self.state.loading ? "Loading" : "Load More"
                )
            ),
            self.state.servers.length > 0 && modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_4__["default"], {text: self.state.title})
        )];
    }

    get notConnected() {
        let self = this;
        //return BDV2.react.createElement(SettingsTitle, { text: self.state.title });
        return [modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {key: "ncc", ref: "content", className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "h2",
                {className: "ui-form-title h2 margin-reset margin-bottom-20"},
                "Not connected to discordservers.com!",
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "button",
                    {
                        onClick: self.connect,
                        type: "button",
                        className: "ui-button filled brand small grow",
                        style: {
                            display: "inline-block",
                            minHeight: "18px",
                            marginLeft: "10px",
                            lineHeight: "14px"
                        }
                    },
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                        "div",
                        {className: "ui-button-contents"},
                        "Connect"
                    )
                )
            ), self.bdServer
        )];
    }

    get footer() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "ui-tab-bar-header"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "a",
                {href: "https://discordservers.com", target: "_blank"},
                "Discordservers.com"
            )
        );
    }

    get connection() {
        let self = this;
        let {connection} = self.state;
        if (connection.state !== 2) return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("span", null);

        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "span",
            null,
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settings_tabbar__WEBPACK_IMPORTED_MODULE_3__["default"].Separator, null),
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "span",
                {style: {color: "#b9bbbe", fontSize: "10px", marginLeft: "10px"}},
                "Connected as: ",
                `${connection.user.username}#${connection.user.discriminator}`
            ),
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {style: {padding: "5px 10px 0 10px"}},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "button",
                    {style: {width: "100%", minHeight: "20px"}, type: "button", className: "ui-button filled brand small grow"},
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                        "div",
                        {className: "ui-button-contents", onClick: self.connect},
                        "Reconnect"
                    )
                )
            )
        );
}
}


/***/ }),

/***/ "./src/ui/publicservers/publicservers.js":
/*!***********************************************!*\
  !*** ./src/ui/publicservers/publicservers.js ***!
  \***********************************************/
/*! exports provided: Menu, Card, Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/ui/publicservers/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/ui/publicservers/card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer */ "./src/ui/layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./src/ui/scroller.js":
/*!****************************!*\
  !*** ./src/ui/scroller.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Scroller; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_Scroller extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        //scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y
        let wrapperClass = `scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d${this.props.fade ? " scrollerFade-1Ijw5y" : ""}`;
        let scrollerClass = "scroller-2FKFPG scroller";                                          /* fuck */
        if (this.props.sidebar) scrollerClass = "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix sidebarRegionScroller-3MXcoP sidebar-region-scroller scroller";
        if (this.props.contentColumn) {
            scrollerClass = "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix contentRegionScroller-26nc1e content-region-scroller scroller";                                         /* fuck */
            wrapperClass = "scrollerWrap-2lJEkd firefoxFixScrollFlex-cnI2ix contentRegionScrollerWrap-3YZXdm content-region-scroller-wrap scrollerThemed-2oenus themeGhost-28MSn0 scrollerTrack-1ZIpsv";
        }
        let {children} = this.props;
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {key: "scrollerwrap", className: wrapperClass},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {key: "scroller", ref: "scroller", className: scrollerClass},
                children
            )
        );
    }
}

/***/ }),

/***/ "./src/ui/settings/checkbox.js":
/*!*************************************!*\
  !*** ./src/ui/settings/checkbox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Checkbox; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_Checkbox extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.setInitialState();
    }

    setInitialState() {
        this.state = {
            checked: this.props.checked || false
        };
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "li",
            null,
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {className: "checkbox checkbox-3kaeSU da-checkbox checkbox-3EVISJ da-checkbox", onClick: this.onClick},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "div",
                    {className: "checkbox-inner checkboxInner-3yjcPe da-checkboxInner"},
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("input", {className: "checkboxElement-1qV33p da-checkboxElement", checked: this.state.checked, onChange: () => {}, type: "checkbox"}),
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("span", null)
                ),
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "span",
                    null,
                    this.props.text
                )
            )
        );
    }

    onClick() {
        this.props.onChange(this.props.id, !this.state.checked);
        this.setState({
            checked: !this.state.checked
        });
    }
}

/***/ }),

/***/ "./src/ui/settings/contentcolumn.js":
/*!******************************************!*\
  !*** ./src/ui/settings/contentcolumn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_ContentColumn; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_ContentColumn extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "h2",
                {className: "ui-form-title h2 margin-reset margin-bottom-20"},
                this.props.title
            ),
            this.props.children
        );
    }
}

/***/ }),

/***/ "./src/ui/settings/exitbutton.js":
/*!***************************************!*\
  !*** ./src/ui/settings/exitbutton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Tools; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/close */ "./src/ui/icons/close.js");



class V2C_Tools extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "tools-container toolsContainer-1edPuj"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "tools tools-3-3s-N"},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "container-1sFeqf"},
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div",
                        {className: "btn-close closeButton-1tv5uR", onClick: this.onClick},
                        modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_icons_close__WEBPACK_IMPORTED_MODULE_1__["default"], null)
                    ),
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                        "div",
                        {className: "esc-text keybind-KpFkfr"},
                        "ESC"
                    )
                )
            )
        );
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
        $(".closeButton-1tv5uR").first().click();
    }
}

/***/ }),

/***/ "./src/ui/settings/panel.js":
/*!**********************************!*\
  !*** ./src/ui/settings/panel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SettingsPanel; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "./src/ui/settings/title.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch */ "./src/ui/settings/switch.js");





class V2C_SettingsPanel extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let {settings} = this.props;
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
            "div",
            {className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"},
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_title__WEBPACK_IMPORTED_MODULE_2__["default"], {text: this.props.title}),
            this.props.button && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("button", {key: "title-button", className: "bd-pfbtn", onClick: this.props.button.onClick}, this.props.button.title),
            settings.map(setting => {
                return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {id: setting.id, key: setting.id, data: setting, checked: data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"][setting.id], onChange: (id, checked) => {
                        this.props.onChange(id, checked);
                    }});
            })
        );
    }
}

/***/ }),

/***/ "./src/ui/settings/plugincard.js":
/*!***************************************!*\
  !*** ./src/ui/settings/plugincard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_PluginCard; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/close */ "./src/ui/icons/close.js");
/* harmony import */ var _icons_reload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/reload */ "./src/ui/icons/reload.js");





class V2C_PluginCard extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        let self = this;
        self.onChange = self.onChange.bind(self);
        self.showSettings = self.showSettings.bind(self);
        self.setInitialState();
        self.hasSettings = typeof self.props.plugin.getSettingsPanel === "function";
        self.settingsPanel = "";

        this.reload = this.reload.bind(this);
        this.onReload = this.onReload.bind(this);
    }

    setInitialState() {
        this.state = {
            checked: data__WEBPACK_IMPORTED_MODULE_0__["PluginCookie"][this.props.plugin.getName()],
            settings: false,
            reloads: 0
        };
    }

    // componentDidMount() {
    //     BDEvents.on("plugin-reloaded", this.onReload);
    // }

    // componentWillUnmount() {
    //     BDEvents.off("plugin-reloaded", this.onReload);
    // }

    onReload(pluginName) {
        if (pluginName !== this.props.plugin.getName()) return;
        this.setState({reloads: this.state.reloads + 1});
    }

    componentDidUpdate() {
        if (this.state.settings) {
            if (typeof this.settingsPanel === "object") {
                this.refs.settingspanel.appendChild(this.settingsPanel);
            }

            if (!data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-3"]) return;
            var isHidden = (container, element) => {

                let cTop = container.scrollTop;
                let cBottom = cTop + container.clientHeight;

                let eTop = element.offsetTop;
                let eBottom = eTop + element.clientHeight;

                return  (eTop < cTop || eBottom > cBottom);
            };

            let self = $(modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.findDOMNode(this));
            let container = self.parents(".scroller");
            if (!isHidden(container[0], self[0])) return;
            container.animate({
                scrollTop: self.offset().top - container.offset().top + container.scrollTop() - 30
            }, 300);
        }
    }

    reload() {
        const plugin = this.props.plugin.getName();
        modules__WEBPACK_IMPORTED_MODULE_1__["PluginManager"].reloadPlugin(plugin);
        this.props.plugin = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][plugin].plugin;
        this.onReload(this.props.plugin.getName());
    }

    getString(value) {
        return typeof value == "string" ? value : value.toString();
    }

    render() {
        let self = this;
        let {plugin} = this.props;
        let name = this.getString(plugin.getName());
        let author = this.getString(plugin.getAuthor());
        let description = this.getString(plugin.getDescription());
        let version = this.getString(plugin.getVersion());
        let website = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][name].website;
        let source = data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][name].source;

        if (this.state.settings) {
            try { self.settingsPanel = plugin.getSettingsPanel(); }
            catch (err) { modules__WEBPACK_IMPORTED_MODULE_1__["Utilities"].err("Plugins", "Unable to get settings panel for " + plugin.getName() + ".", err); }

            return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("li", {className: "settings-open ui-switch-item"},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {style: {"float": "right", "cursor": "pointer"}, onClick: () => {
                            this.refs.settingspanel.innerHTML = "";
                            self.setState({settings: false});
                        }},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_icons_close__WEBPACK_IMPORTED_MODULE_2__["default"], null)
                ),
                typeof self.settingsPanel === "object" && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {id: `plugin-settings-${name}`, className: "plugin-settings", ref: "settingspanel"}),
                typeof self.settingsPanel !== "object" && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {id: `plugin-settings-${name}`, className: "plugin-settings", ref: "settingspanel", dangerouslySetInnerHTML: {__html: self.settingsPanel}})
            );
        }

        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("li", {"data-name": name, "data-version": version, "className": "settings-closed ui-switch-item"},
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-header"},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-header-title"},
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-name"}, name),
                        " v",
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-version"}, version),
                        " by ",
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-author"}, author)
                    ),
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-controls"},
                        !data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-5"] && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_3__["default"], {className: "bd-reload-card", onClick: this.reload}),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("label", {className: "ui-switch-wrapper ui-flex-child", style: {flex: "0 0 auto"}},
                            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("input", {checked: this.state.checked, onChange: this.onChange, className: "ui-switch-checkbox", type: "checkbox"}),
                            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: this.state.checked ? "ui-switch checked" : "ui-switch"})
                        )
                    )
            ),
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-description-wrap scroller-wrap fade"},
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-description scroller"}, description)
            ),
            (website || source || this.hasSettings) && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-footer"},
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-links"},
                    website && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("a", {className: "bda-link bda-link-website", href: website, target: "_blank"}, "Website"),
                    website && source && " | ",
                    source && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("a", {className: "bda-link bda-link-source", href: source, target: "_blank"}, "Source")
                ),
                this.hasSettings && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("button", {onClick: this.showSettings, className: "bda-settings-button", disabled: !this.state.checked}, "Settings")
            )
        );
    }

    onChange() {
        this.setState({checked: !this.state.checked});
        modules__WEBPACK_IMPORTED_MODULE_1__["PluginManager"].togglePlugin(this.props.plugin.getName());
    }

    showSettings() {
        if (!this.hasSettings) return;
        this.setState({settings: true});
    }
}

/***/ }),

/***/ "./src/ui/settings/sectionedsettings.js":
/*!**********************************************!*\
  !*** ./src/ui/settings/sectionedsettings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SectionedSettingsPanel; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _settingsgroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsgroup */ "./src/ui/settings/settingsgroup.js");



class V2C_SectionedSettingsPanel extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div", {className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"},
            this.props.sections.map(section => {
                return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_settingsgroup__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, section, this.props.onChange));
            })
        );
    }
}

/***/ }),

/***/ "./src/ui/settings/settings.js":
/*!*************************************!*\
  !*** ./src/ui/settings/settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2_SettingsPanel; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/ui/settings/sidebar.js");
/* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scroller */ "./src/ui/scroller.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list */ "./src/ui/list.js");
/* harmony import */ var _contentcolumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contentcolumn */ "./src/ui/settings/contentcolumn.js");
/* harmony import */ var _sectionedsettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sectionedsettings */ "./src/ui/settings/sectionedsettings.js");
/* harmony import */ var _exitbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exitbutton */ "./src/ui/settings/exitbutton.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel */ "./src/ui/settings/panel.js");
/* harmony import */ var _plugincard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugincard */ "./src/ui/settings/plugincard.js");
/* harmony import */ var _themecard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./themecard */ "./src/ui/settings/themecard.js");
/* harmony import */ var _icons_reload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/reload */ "./src/ui/icons/reload.js");
/* harmony import */ var _customcss_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customcss/editor */ "./src/ui/customcss/editor.js");















class V2_SettingsPanel {

    constructor(props) {
        this.sideBarOnClick = this.sideBarOnClick.bind(this);
        this.onChange = props.onChange;
        this.sidebar = new _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"](this.sideBarOnClick);
    }

    get root() {
        let _root = $("#bd-settingspane-container");
        if (!_root.length) {
            if (!this.injectRoot()) return null;
            return this.root;
        }
        return _root[0];
    }

    injectRoot() {
        if (!$(".layer-3QrUeG .standardSidebarView-3F1I7i, .layer-3QrUeG .ui-standard-sidebar-view").length) return false;
        const root = $("<div/>", {
            "class": "contentRegion-3nDuYy content-region",
            "id": "bd-settingspane-container"
        });
        $(".layer-3QrUeG .standardSidebarView-3F1I7i, .layer-3QrUeG .ui-standard-sidebar-view").append(root);

        modules__WEBPACK_IMPORTED_MODULE_1__["Utilities"].onRemoved(root[0], () => {
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.unmountComponentAtNode(root[0]);
        });
        return true;
    }

    get coreSettings() {
        const settings = this.getSettings("core");
        const categories = [...new Set(settings.map(s => s.category))];
        const sections = categories.map(c => {return {title: c, settings: settings.filter(s => s.category == c)};});
        return sections;
    }

    get emoteSettings() {
        return this.getSettings("emote");
    }
    getSettings(category) {
        return Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["SettingsInfo"]).reduce((arr, key) => {
            let setting = data__WEBPACK_IMPORTED_MODULE_0__["SettingsInfo"][key];
            if (setting.cat === category && setting.implemented && !setting.hidden) {
                setting.text = key;
                arr.push(setting);
            }
            return arr;
        }, []);
    }

    sideBarOnClick(id) {
        let self = this;
        $(".contentRegion-3nDuYy, .content-region").first().hide();
        $(self.root).show();
        switch (id) {
            case "core":
                self.renderCoreSettings();
                break;
            case "emotes":
                self.renderEmoteSettings();
                break;
            case "customcss":
                self.renderCustomCssEditor();
                break;
            case "plugins":
                self.renderPluginPane();
                break;
            case "themes":
                self.renderThemePane();
                break;
        }
    }

    renderSidebar() {
        let self = this;
        $("[class*='side-'] > [class*='item-']").off("click.v2settingspanel").on("click.v2settingspanel", () => {
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.unmountComponentAtNode(self.root);
            $(self.root).hide();
            $(".contentRegion-3nDuYy, .content-region").first().show();
        });
        self.sidebar.render();
    }

    get coreComponent() {
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_scroller__WEBPACK_IMPORTED_MODULE_3__["default"], {contentColumn: true, fade: true, dark: true, children: [
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_sectionedsettings__WEBPACK_IMPORTED_MODULE_6__["default"], {key: "cspanel", onChange: this.onChange, sections: this.coreSettings}),
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_exitbutton__WEBPACK_IMPORTED_MODULE_7__["default"], {key: "tools"})
        ]});
    }

    get emoteComponent() {
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_scroller__WEBPACK_IMPORTED_MODULE_3__["default"], {
            contentColumn: true, fade: true, dark: true, children: [
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_panel__WEBPACK_IMPORTED_MODULE_8__["default"], {key: "espanel", title: "Emote Settings", onChange: this.onChange, settings: this.emoteSettings, button: {
                    title: "Clear Emote Cache",
                    onClick: () => { modules__WEBPACK_IMPORTED_MODULE_1__["EmoteModule"].clearEmoteData(); modules__WEBPACK_IMPORTED_MODULE_1__["EmoteModule"].init(); modules__WEBPACK_IMPORTED_MODULE_1__["EmoteMenu"].init(); }
                }}),
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_exitbutton__WEBPACK_IMPORTED_MODULE_7__["default"], {key: "tools"})
        ]});
    }

    get customCssComponent() {
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_scroller__WEBPACK_IMPORTED_MODULE_3__["default"], {contentColumn: true, fade: true, dark: true, children: [modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_customcss_editor__WEBPACK_IMPORTED_MODULE_12__["default"], {key: "csseditor"}), modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_exitbutton__WEBPACK_IMPORTED_MODULE_7__["default"], {key: "tools"})]});
    }

    contentComponent(type) {
        const componentElement = type == "plugins" ? this.pluginsComponent : this.themesComponent;
        const prefix = type.replace("s", "");
        const settingsList = this;
        class ContentList extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.Component {
            constructor(props) {
                super(props);
                this.onChange = this.onChange.bind(this);
            }

            componentDidMount() {
                modules__WEBPACK_IMPORTED_MODULE_1__["Emitter"].on(`${prefix}-reloaded`, this.onChange);
                modules__WEBPACK_IMPORTED_MODULE_1__["Emitter"].on(`${prefix}-loaded`, this.onChange);
                modules__WEBPACK_IMPORTED_MODULE_1__["Emitter"].on(`${prefix}-unloaded`, this.onChange);
            }

            componentWillUnmount() {
                modules__WEBPACK_IMPORTED_MODULE_1__["Emitter"].off(`${prefix}-reloaded`, this.onChange);
                modules__WEBPACK_IMPORTED_MODULE_1__["Emitter"].off(`${prefix}-loaded`, this.onChange);
                modules__WEBPACK_IMPORTED_MODULE_1__["Emitter"].off(`${prefix}-unloaded`, this.onChange);
            }

            onChange() {
                settingsList.sideBarOnClick(type);
            }

            render() {return componentElement;}
        }
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(ContentList);
    }

    get pluginsComponent() {
        let plugins = Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["Plugins"]).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).reduce((arr, key) => {
            arr.push(modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_plugincard__WEBPACK_IMPORTED_MODULE_9__["default"], {key: key, plugin: data__WEBPACK_IMPORTED_MODULE_0__["Plugins"][key].plugin}));return arr;
        }, []);
        let list = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_list__WEBPACK_IMPORTED_MODULE_4__["default"], {key: "plugin-list", className: "bda-slist", children: plugins});
        let refreshIcon = !data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-5"] && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_11__["default"], {className: "bd-reload-header", size: "18px", onClick: async () => {
            modules__WEBPACK_IMPORTED_MODULE_1__["PluginManager"].updatePluginList();
            this.sideBarOnClick("plugins");
        }});
        let pfBtn = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("button", {key: "folder-button", className: "bd-pfbtn", onClick: () => { __webpack_require__(/*! electron */ "electron").shell.openItem(modules__WEBPACK_IMPORTED_MODULE_1__["ContentManager"].pluginsFolder); }}, "Open Plugin Folder");
        let contentColumn = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_contentcolumn__WEBPACK_IMPORTED_MODULE_5__["default"], {key: "pcolumn", title: "Plugins", children: [refreshIcon, pfBtn, list]});
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_scroller__WEBPACK_IMPORTED_MODULE_3__["default"], {contentColumn: true, fade: true, dark: true, children: [contentColumn, modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_exitbutton__WEBPACK_IMPORTED_MODULE_7__["default"], {key: "tools"})]});
    }

    get themesComponent() {
        let themes = Object.keys(data__WEBPACK_IMPORTED_MODULE_0__["Themes"]).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).reduce((arr, key) => {
            arr.push(modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_themecard__WEBPACK_IMPORTED_MODULE_10__["default"], {key: key, theme: data__WEBPACK_IMPORTED_MODULE_0__["Themes"][key]}));return arr;
        }, []);
        let list = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_list__WEBPACK_IMPORTED_MODULE_4__["default"], {key: "theme-list", className: "bda-slist", children: themes});
        let refreshIcon = !data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-5"] && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_11__["default"], {className: "bd-reload-header", size: "18px", onClick: async () => {
            modules__WEBPACK_IMPORTED_MODULE_1__["ThemeManager"].updateThemeList();
            this.sideBarOnClick("themes");
        }});
        let tfBtn = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("button", {key: "folder-button", className: "bd-pfbtn", onClick: () => { __webpack_require__(/*! electron */ "electron").shell.openItem(modules__WEBPACK_IMPORTED_MODULE_1__["ContentManager"].themesFolder); }}, "Open Theme Folder");
        let contentColumn = modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_contentcolumn__WEBPACK_IMPORTED_MODULE_5__["default"], {key: "tcolumn", title: "Themes", children: [refreshIcon, tfBtn, list]});
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_scroller__WEBPACK_IMPORTED_MODULE_3__["default"], {contentColumn: true, fade: true, dark: true, children: [contentColumn, modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_exitbutton__WEBPACK_IMPORTED_MODULE_7__["default"], {key: "tools"})]});
    }

    renderCoreSettings() {
        let root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(this.coreComponent, root);
    }

    renderEmoteSettings() {
        let root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(this.emoteComponent, root);
    }

    renderCustomCssEditor() {
        let root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(this.customCssComponent, root);
    }

    renderPluginPane() {
        let root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(this.contentComponent("plugins"), root);
    }

    renderThemePane() {
        let root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(this.contentComponent("themes"), root);
    }
}

/***/ }),

/***/ "./src/ui/settings/settingsgroup.js":
/*!******************************************!*\
  !*** ./src/ui/settings/settingsgroup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SettingsGroup; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "./src/ui/settings/title.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch */ "./src/ui/settings/switch.js");





class V2C_SettingsGroup extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, settings, button} = this.props;
        const buttonComponent = button ? modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("button", {key: "title-button", className: "bd-pfbtn", onClick: button.onClick}, button.title) : null;
        return [modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_title__WEBPACK_IMPORTED_MODULE_2__["default"], {text: title}),
                buttonComponent,
                settings.map(setting => {
                    return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {id: setting.id, key: setting.id, data: setting, checked: data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"][setting.id], onChange: (id, checked) => {
                        this.props.onChange(id, checked);
                    }});
                })];
    }
}

/***/ }),

/***/ "./src/ui/settings/sidebar.js":
/*!************************************!*\
  !*** ./src/ui/settings/sidebar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2_SettingsPanel_Sidebar; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _sidebarmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarmenu */ "./src/ui/settings/sidebarmenu.js");





class V2_SettingsPanel_Sidebar {

    constructor(onClick) {
        this.onClick = onClick;
    }

    get items() {
        return [{text: "Settings", id: "core"}, {text: "Emotes", id: "emotes"}, {text: "Plugins", id: "plugins"}, {text: "Themes", id: "themes"}, {text: "Custom CSS", id: "customcss"}];
    }

    get component() {
        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
            "span",
            null,
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_sidebarmenu__WEBPACK_IMPORTED_MODULE_2__["default"], {onClick: this.onClick, headerText: "Bandaged BD", items: this.items}),
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                "div",
                {style: {fontSize: "12px", fontWeight: "600", color: "#72767d", padding: "2px 10px"}},
                `BD v${data__WEBPACK_IMPORTED_MODULE_0__["Config"].version} by `,
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                    "a",
                    {href: "https://github.com/Jiiks/", target: "_blank"},
                    "Jiiks"
                )
            ),
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                "div",
                {style: {fontSize: "12px", fontWeight: "600", color: "#72767d", padding: "2px 10px"}},
                `BBD v${data__WEBPACK_IMPORTED_MODULE_0__["Config"].bbdVersion} by `,
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(
                    "a",
                    {href: "https://github.com/rauenzi/", target: "_blank"},
                    "Zerebos"
                )
            )
        );
    }

    get root() {
        let _root = $("#bd-settings-sidebar");
        if (!_root.length) {
            if (!this.injectRoot()) return null;
            return this.root;
        }
        return _root[0];
    }

    injectRoot() {
        let changeLog = $("[class*='side-'] > [class*='item-']:not([class*=Danger])").last();
        if (!changeLog.length) return false;
        $("<span/>", {id: "bd-settings-sidebar"}).insertBefore(changeLog.prev());
        return true;
    }

    render() {
        let root = this.root;
        if (!root) {
            console.log("FAILED TO LOCATE ROOT: [class*='side-'] > [class*='item-']:not([class*=Danger])");
            return;
        }
        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.render(this.component, root);
        modules__WEBPACK_IMPORTED_MODULE_1__["Utilities"].onRemoved(root, () => {
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactDom.unmountComponentAtNode(root);
        });
    }
}

/***/ }),

/***/ "./src/ui/settings/sidebarmenu.js":
/*!****************************************!*\
  !*** ./src/ui/settings/sidebarmenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SideBar; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _tabbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbar */ "./src/ui/settings/tabbar.js");



class V2C_SideBar extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        let self = this;
        const si = $("[class*=side] > [class*=selected]");
        if (si.length) self.scn = si.attr("class");
        const ns = $("[class*=side] > [class*=notSelected]");
        if (ns.length) self.nscn = ns.attr("class");
        $("[class*='side-'] > [class*='item-']").on("click", () => {
            self.setState({
                selected: null
            });
        });
        self.setInitialState();
        self.onClick = self.onClick.bind(self);
    }

    setInitialState() {
        let self = this;
        self.state = {
            selected: null,
            items: self.props.items
        };

        let initialSelection = self.props.items.find(item => {
            return item.selected;
        });
        if (initialSelection) {
            self.state.selected = initialSelection.id;
        }
    }

    render() {
        let self = this;
        let {headerText} = self.props;
        let {items, selected} = self.state;
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            null,
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_tabbar__WEBPACK_IMPORTED_MODULE_1__["default"].Separator, null),
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_tabbar__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {text: headerText}),
            items.map(item => {
                let {id, text} = item;
                return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_tabbar__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {key: id, selected: selected === id, text: text, id: id, onClick: self.onClick});
            })
        );
    }

    onClick(id) {
        let self = this;
        const si = $("[class*=side] > [class*=selected]");
        if (si.length) {
            si.off("click.bdsb").on("click.bsb", e => {
                $(e.target).attr("class", self.scn);
            });
            si.attr("class", self.nscn);
        }

        self.setState({selected: null});
        self.setState({selected: id});

        if (self.props.onClick) self.props.onClick(id);
    }
}

/***/ }),

/***/ "./src/ui/settings/switch.js":
/*!***********************************!*\
  !*** ./src/ui/settings/switch.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_Switch; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_Switch extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        this.setInitialState();
        this.onChange = this.onChange.bind(this);
    }

    setInitialState() {
        this.state = {
            checked: this.props.checked
        };
    }

    render() {
        let {text, info} = this.props.data;
        let {checked} = this.state;
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "ui-flex flex-vertical flex-justify-start flex-align-stretch flex-nowrap ui-switch-item"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {className: "ui-flex flex-horizontal flex-justify-start flex-align-stretch flex-nowrap"},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "h3",
                    {className: "ui-form-title h3 margin-reset margin-reset ui-flex-child"},
                    text
                ),
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                    "label",
                    {className: "ui-switch-wrapper ui-flex-child", style: {flex: "0 0 auto"}},
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("input", {className: "ui-switch-checkbox", type: "checkbox", checked: checked, onChange: e => this.onChange(e)}),
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: `ui-switch ${checked ? "checked" : ""}`})
                )
            ),
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {className: "ui-form-text style-description margin-top-4", style: {flex: "1 1 auto"}},
                info
            )
        );
    }

    onChange() {
        this.props.onChange(this.props.id, !this.state.checked);
        this.setState({
            checked: !this.state.checked
        });
    }
}

/***/ }),

/***/ "./src/ui/settings/tabbar.js":
/*!***********************************!*\
  !*** ./src/ui/settings/tabbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2Cs_TabBar; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_TabBarItem extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        this.setInitialState();
        this.onClick = this.onClick.bind(this);
    }

    setInitialState() {
        this.state = {
            selected: this.props.selected || false
        };
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: `ui-tab-bar-item${this.props.selected ? " selected" : ""}`, onClick: this.onClick},
            this.props.text
        );
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.id);
        }
    }
}

class V2C_TabBarSeparator extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "ui-tab-bar-separator margin-top-8 margin-bottom-8"});
    }
}

class V2C_TabBarHeader extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "ui-tab-bar-header"},
            this.props.text
        );
    }
}

class V2Cs_TabBar {
    static get Item() {
        return V2C_TabBarItem;
    }
    static get Header() {
        return V2C_TabBarHeader;
    }
    static get Separator() {
        return V2C_TabBarSeparator;
    }
}

/***/ }),

/***/ "./src/ui/settings/themecard.js":
/*!**************************************!*\
  !*** ./src/ui/settings/themecard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_ThemeCard; });
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data */ "./src/data/data.js");
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _icons_reload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/reload */ "./src/ui/icons/reload.js");




class V2C_ThemeCard extends modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
        this.setInitialState();
        this.onChange = this.onChange.bind(this);
        this.reload = this.reload.bind(this);
    }

    setInitialState() {
        this.state = {
            checked: data__WEBPACK_IMPORTED_MODULE_0__["ThemeCookie"][this.props.theme.name],
            reloads: 0
        };
    }

    // componentDidMount() {
    //     BDEvents.on("theme-reloaded", this.onReload);
    // }

    // componentWillUnmount() {
    //     BDEvents.off("theme-reloaded", this.onReload);
    // }

    onReload(themeName) {
        if (themeName !== this.props.theme.name) return;
        this.setState({reloads: this.state.reloads + 1});
    }

    reload() {
        const theme = this.props.theme.name;
        const error = modules__WEBPACK_IMPORTED_MODULE_1__["ThemeManager"].reloadTheme(theme);
        if (error) modules__WEBPACK_IMPORTED_MODULE_1__["Core"].showToast(`Could not reload ${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].name}. Check console for details.`, {type: "error"});
        else modules__WEBPACK_IMPORTED_MODULE_1__["Core"].showToast(`${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].name} v${data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme].version} has been reloaded.`, {type: "success"});
        // this.setState(this.state);
        this.props.theme = data__WEBPACK_IMPORTED_MODULE_0__["Themes"][theme];
        this.onReload(this.props.theme.name);
    }

    render() {
        let {theme} = this.props;
        let name = theme.name;
        let description = theme.description;
        let version = theme.version;
        let author = theme.author;
        let website = data__WEBPACK_IMPORTED_MODULE_0__["Themes"][name].website;
        let source = data__WEBPACK_IMPORTED_MODULE_0__["Themes"][name].source;

        return modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("li", {"data-name": name, "data-version": version, "className": "settings-closed ui-switch-item"},
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-header"},
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-header-title"},
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-name"}, name),
                        " v",
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-version"}, version),
                        " by ",
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-author"}, author)
                    ),
                    modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-controls"},
                        !data__WEBPACK_IMPORTED_MODULE_0__["SettingsCookie"]["fork-ps-5"] && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_2__["default"], {className: "bd-reload-card", onClick: this.reload}),
                        modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("label", {className: "ui-switch-wrapper ui-flex-child", style: {flex: "0 0 auto"}},
                            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("input", {checked: this.state.checked, onChange: this.onChange, className: "ui-switch-checkbox", type: "checkbox"}),
                            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: this.state.checked ? "ui-switch checked" : "ui-switch"})
                        )
                    )
            ),
            modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-description-wrap scroller-wrap fade"},
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-description scroller"}, description)
            ),
            (website || source) && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("div", {className: "bda-footer"},
                modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("span", {className: "bda-links"},
                    website && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("a", {className: "bda-link", href: website, target: "_blank"}, "Website"),
                    website && source && " | ",
                    source && modules__WEBPACK_IMPORTED_MODULE_1__["BDV2"].react.createElement("a", {className: "bda-link", href: source, target: "_blank"}, "Source")
                )
            )
        );
    }

    onChange() {
        this.setState({checked: !this.state.checked});
        modules__WEBPACK_IMPORTED_MODULE_1__["ThemeManager"].toggleTheme(this.props.theme.name);
    }
}

/***/ }),

/***/ "./src/ui/settings/title.js":
/*!**********************************!*\
  !*** ./src/ui/settings/title.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SettingsTitle; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");


class V2C_SettingsTitle extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {
    constructor(props) {
        super(props);
    }
//h2-2gWE-o title-3sZWYQ size16-14cGz5 height20-mO2eIN weightSemiBold-NJexzi da-h2 da-title da-size16 da-height20 da-weightSemiBold defaultColor-1_ajX0 da-defaultColor marginTop60-3PGbtK da-marginTop60 marginBottom20-32qID7 da-marginBottom20
    render() {
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "h2",
            {className: "ui-form-title h2 margin-reset margin-bottom-20 marginTop60-3PGbtK da-marginTop6"},
            this.props.text
        );
    }
}

/***/ }),

/***/ "./src/ui/sidebarview.js":
/*!*******************************!*\
  !*** ./src/ui/sidebarview.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return V2C_SidebarView; });
/* harmony import */ var modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules */ "./src/modules/modules.js");
/* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroller */ "./src/ui/scroller.js");



class V2C_SidebarView extends modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let {sidebar, content, tools} = this.props.children;
        return modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
            "div",
            {className: "standardSidebarView-3F1I7i ui-standard-sidebar-view"},
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(
                "div",
                {className: "sidebarRegion-VFTUkN sidebar-region"},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement(_scroller__WEBPACK_IMPORTED_MODULE_1__["default"], {key: "sidebarScroller", ref: "sidebarScroller", sidebar: true, fade: sidebar.fade || true, dark: sidebar.dark || true, children: sidebar.component})
            ),
            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "contentRegion-3nDuYy content-region"},
                modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "contentTransitionWrap-3hqOEW content-transition-wrap"},
                    modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "scrollerWrap-2lJEkd firefoxFixScrollFlex-cnI2ix contentRegionScrollerWrap-3YZXdm content-region-scroller-wrap scrollerThemed-2oenus themeGhost-28MSn0 scrollerTrack-1ZIpsv"},
                        modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix contentRegionScroller-26nc1e content-region-scroller scroller", ref: "contentScroller"},
                            modules__WEBPACK_IMPORTED_MODULE_0__["BDV2"].react.createElement("div", {className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"}, content.component),
                            tools.component
                        )
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./src/ui/ui.js":
/*!**********************!*\
  !*** ./src/ui/ui.js ***!
  \**********************/
/*! exports provided: SettingsPanel, PublicServers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/settings */ "./src/ui/settings/settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsPanel", function() { return _settings_settings__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _publicservers_publicservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicservers/publicservers */ "./src/ui/publicservers/publicservers.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PublicServers", function() { return _publicservers_publicservers__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "electron":
/*!****************************************!*\
  !*** external "require(\"electron\")" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/*!**************************************!*\
  !*** external "require(\"events\")" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!**********************************!*\
  !*** external "require(\"fs\")" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),

/***/ "path":
/*!************************************!*\
  !*** external "require(\"path\")" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "request":
/*!***************************************!*\
  !*** external "require(\"request\")" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ })

/******/ })["default"];