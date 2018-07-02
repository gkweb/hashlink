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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * @license\n * Copyright 2018 Glade Kettle\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nvar HashLink = function () {\n\n    /** \n     * Init\n     * @param {Object} options\n     */\n    function HashLink() {\n        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n        _classCallCheck(this, HashLink);\n\n        this.handle = this.handle.bind(this);\n        this.run = this.run.bind(this);\n        this.assignEvents();\n        this.onChange = null;\n        this.prefix = options.prefix || '/';\n        this.triggers = {};\n\n        if (options.onChange) this.onChange = options.onChange;\n    }\n\n    /**\n     * Adds trigger to the this.triggers object. Provided it's valid\n     * @param {Object} trigger Trigger object\n     * @param {String} [trigger.slug] Call back slug to launch the trigger from\n     * @param {Function} [trigger.callback] callback to launch when trigger slug match found\n     * @param {Boolean} [trigger.preventDefault] prevents default of the hashchange event if toggled\n     */\n\n\n    _createClass(HashLink, [{\n        key: 'add',\n        value: function add(trigger) {\n            if (!trigger) return;\n            // Only add trigger if it's valid and has a callback\n            if (typeof trigger.callback === 'function' && trigger.slug) this.triggers[trigger.slug] = trigger;\n        }\n\n        /**\n         * Removes trigger\n         * @param {String} slug \n         */\n\n    }, {\n        key: 'remove',\n        value: function remove(slug) {\n            if (!slug) return;\n            if (this.triggers[slug]) delete this.triggers[slug];\n        }\n\n        /**\n         * Extracts params from hash url\n         * @param {*} url \n         */\n\n    }, {\n        key: 'gatherParams',\n        value: function gatherParams(url) {\n            var clean = url.replace('#' + this.prefix, '');\n            return clean.split(this.prefix);\n        }\n\n        /**\n         * Runs the trigger detection based off document.location.hash\n         * @param {HashChangeEvent} event \n         */\n\n    }, {\n        key: 'run',\n        value: function run(event) {\n            var hash = document.location.hash;\n            var params = this.gatherParams(hash);\n\n            if (params.length > 0) {\n                var trigger = this.triggers[params[0]];\n\n                // Trigger the slug callback\n                if (trigger) {\n                    trigger.callback(params);\n                    if (event && trigger.preventDefault) event.preventDefault();\n                }\n            }\n        }\n\n        /**\n         * Handles the hashchange event\n         * @param {HashChangeEvent} event \n         */\n\n    }, {\n        key: 'handle',\n        value: function handle(event) {\n            var params = this.gatherParams(document.location.hash);\n            if (typeof this.onChange === 'function') this.onChange(event, params);\n        }\n\n        /**\n         * Assign any associated events\n         */\n\n    }, {\n        key: 'assignEvents',\n        value: function assignEvents() {\n            window.addEventListener('hashchange', this.handle);\n        }\n\n        /**\n         * Remove events\n         */\n\n    }, {\n        key: 'removeEvents',\n        value: function removeEvents() {\n            window.removeEventListener('hashchange', this.handle);\n        }\n    }]);\n\n    return HashLink;\n}();\n\nmodule.exports = HashLink;\n\n\n//# sourceURL=webpack:///./dist/main.js?");

/***/ }),

/***/ "./example/src/index.js":
/*!******************************!*\
  !*** ./example/src/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Hashlink = __webpack_require__(/*! ../../dist/main.js */ \"./dist/main.js\");\n\nmodule.exports = (function () {\n    window.addEventListener('load', function () {\n        var triggerDisplay = document.getElementById('trigger_display');\n\n        // Intantiate the Hashlink class\n        var hashlink = new HashLink({onChange: event => {\n            console.log(event, 'Hash has changed...');\n        }}); // Default options\n\n        var cb = function (params) {\n            triggerDisplay.innerText = `[ ${params[0]} ] trigger callback has run`;\n        };\n\n        // Trigger callbacks added here\n        hashlink.add({\n            slug: 'something',\n            callback: (params) => (cb(params))\n        });\n\n        hashlink.add({\n            slug: 'deep',\n            callback: (params) => (cb(params))\n        });\n\n        hashlink.add({\n            slug: 'test',\n            callback: (params) => (cb(params))\n        });\n\n        // run on first load\n        hashlink.run(document.location.hash);\n    });\n})();\n\n\n\n\n//# sourceURL=webpack:///./example/src/index.js?");

/***/ })

/******/ });