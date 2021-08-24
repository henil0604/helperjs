/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let $h = {};\r\n\r\n$h._ = {\r\n    is: __webpack_require__(/*! ./src/helpers/is */ \"./src/helpers/is.js\"),\r\n    validator: __webpack_require__(/*! ./src/helpers/validator */ \"./src/helpers/validator.js\")\r\n};\r\n\r\n$h.FileInput = __webpack_require__(/*! ./src/FileInput */ \"./src/FileInput.js\");\r\n$h.random = __webpack_require__(/*! ./src/random */ \"./src/random.js\");\r\n$h.put = __webpack_require__(/*! ./src/put */ \"./src/put.js\");\r\n$h.clone = __webpack_require__(/*! ./src/clone */ \"./src/clone.js\");\r\n$h.autoExpand = __webpack_require__(/*! ./src/autoExpand */ \"./src/autoExpand.js\");\r\n$h.buildQuery = __webpack_require__(/*! ./src/buildQuery */ \"./src/buildQuery.js\");\r\n$h.getContrastColor = __webpack_require__(/*! ./src/getContrastColor */ \"./src/getContrastColor.js\");\r\n$h.getParam = __webpack_require__(/*! ./src/getParam */ \"./src/getParam.js\");\r\n$h.isEqual = __webpack_require__(/*! ./src/isEqual */ \"./src/isEqual.js\");\r\n$h.timeDiff = __webpack_require__(/*! ./src/timeDiff */ \"./src/timeDiff.js\");\r\n$h.formatBytes = __webpack_require__(/*! ./src/formatBytes */ \"./src/formatBytes.js\");\r\n\r\n\r\ntry {\r\n    window.$h = $h;\r\n} catch (e) { }\r\n\r\nmodule.exports = $h;\n\n//# sourceURL=webpack://@henil0604/helperjs/./index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"v1\": () => (/* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"v3\": () => (/* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"v4\": () => (/* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"v5\": () => (/* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"NIL\": () => (/* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"version\": () => (/* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__.default),\n/* harmony export */   \"validate\": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__.default),\n/* harmony export */   \"stringify\": () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__.default),\n/* harmony export */   \"parse\": () => (/* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__.default)\n/* harmony export */ });\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/esm-browser/v1.js\");\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/esm-browser/v3.js\");\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/esm-browser/v5.js\");\n/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ \"./node_modules/uuid/dist/esm-browser/nil.js\");\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ \"./node_modules/uuid/dist/esm-browser/version.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * Browser-compatible JavaScript MD5\n *\n * Modification of JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\nfunction md5(bytes) {\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Uint8Array(msg.length);\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));\n}\n/*\n * Convert an array of little-endian words to an array of bytes\n */\n\n\nfunction md5ToHexEncodedArray(input) {\n  var output = [];\n  var length32 = input.length * 32;\n  var hexTab = '0123456789abcdef';\n\n  for (var i = 0; i < length32; i += 8) {\n    var x = input[i >> 5] >>> i % 32 & 0xff;\n    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);\n    output.push(hex);\n  }\n\n  return output;\n}\n/**\n * Calculate output length with padding and bit length\n */\n\n\nfunction getOutputLength(inputLength8) {\n  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;\n}\n/*\n * Calculate the MD5 of an array of little-endian words, and a bit length.\n */\n\n\nfunction wordsToMd5(x, len) {\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[getOutputLength(len) - 1] = len;\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n\n  for (var i = 0; i < x.length; i += 16) {\n    var olda = a;\n    var oldb = b;\n    var oldc = c;\n    var oldd = d;\n    a = md5ff(a, b, c, d, x[i], 7, -680876936);\n    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5gg(b, c, d, a, x[i], 20, -373897302);\n    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5hh(d, a, b, c, x[i], 11, -358537222);\n    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n    a = md5ii(a, b, c, d, x[i], 6, -198630844);\n    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n    a = safeAdd(a, olda);\n    b = safeAdd(b, oldb);\n    c = safeAdd(c, oldc);\n    d = safeAdd(d, oldd);\n  }\n\n  return [a, b, c, d];\n}\n/*\n * Convert an array bytes to an array of little-endian words\n * Characters >255 have their high-byte silently ignored.\n */\n\n\nfunction bytesToWords(input) {\n  if (input.length === 0) {\n    return [];\n  }\n\n  var length8 = input.length * 8;\n  var output = new Uint32Array(getOutputLength(length8));\n\n  for (var i = 0; i < length8; i += 8) {\n    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;\n  }\n\n  return output;\n}\n/*\n * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n * to work around bugs in some JS interpreters.\n */\n\n\nfunction safeAdd(x, y) {\n  var lsw = (x & 0xffff) + (y & 0xffff);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xffff;\n}\n/*\n * Bitwise rotate a 32-bit number to the left.\n */\n\n\nfunction bitRotateLeft(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n/*\n * These functions implement the four basic operations the algorithm uses.\n */\n\n\nfunction md5cmn(q, a, b, x, s, t) {\n  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n}\n\nfunction md5ff(a, b, c, d, x, s, t) {\n  return md5cmn(b & c | ~b & d, a, b, x, s, t);\n}\n\nfunction md5gg(a, b, c, d, x, s, t) {\n  return md5cmn(b & d | c & ~d, a, b, x, s, t);\n}\n\nfunction md5hh(a, b, c, d, x, s, t) {\n  return md5cmn(b ^ c ^ d, a, b, x, s, t);\n}\n\nfunction md5ii(a, b, c, d, x, s, t) {\n  return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('00000000-0000-0000-0000-000000000000');\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/nil.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction parse(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  var v;\n  var arr = new Uint8Array(16); // Parse ########-....-....-....-............\n\n  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;\n  arr[1] = v >>> 16 & 0xff;\n  arr[2] = v >>> 8 & 0xff;\n  arr[3] = v & 0xff; // Parse ........-####-....-....-............\n\n  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;\n  arr[5] = v & 0xff; // Parse ........-....-####-....-............\n\n  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;\n  arr[7] = v & 0xff; // Parse ........-....-....-####-............\n\n  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;\n  arr[9] = v & 0xff; // Parse ........-....-....-....-############\n  // (Use \"/\" to avoid 32-bit truncation when bit-shifting high-order bytes)\n\n  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;\n  arr[11] = v / 0x100000000 & 0xff;\n  arr[12] = v >>> 24 & 0xff;\n  arr[13] = v >>> 16 & 0xff;\n  arr[14] = v >>> 8 & 0xff;\n  arr[15] = v & 0xff;\n  return arr;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/parse.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Adapted from Chris Veness' SHA1 code at\n// http://www.movable-type.co.uk/scripts/sha1.html\nfunction f(s, x, y, z) {\n  switch (s) {\n    case 0:\n      return x & y ^ ~x & z;\n\n    case 1:\n      return x ^ y ^ z;\n\n    case 2:\n      return x & y ^ x & z ^ y & z;\n\n    case 3:\n      return x ^ y ^ z;\n  }\n}\n\nfunction ROTL(x, n) {\n  return x << n | x >>> 32 - n;\n}\n\nfunction sha1(bytes) {\n  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];\n  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];\n\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = [];\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes.push(msg.charCodeAt(i));\n    }\n  } else if (!Array.isArray(bytes)) {\n    // Convert Array-like to Array\n    bytes = Array.prototype.slice.call(bytes);\n  }\n\n  bytes.push(0x80);\n  var l = bytes.length / 4 + 2;\n  var N = Math.ceil(l / 16);\n  var M = new Array(N);\n\n  for (var _i = 0; _i < N; ++_i) {\n    var arr = new Uint32Array(16);\n\n    for (var j = 0; j < 16; ++j) {\n      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];\n    }\n\n    M[_i] = arr;\n  }\n\n  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);\n  M[N - 1][14] = Math.floor(M[N - 1][14]);\n  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;\n\n  for (var _i2 = 0; _i2 < N; ++_i2) {\n    var W = new Uint32Array(80);\n\n    for (var t = 0; t < 16; ++t) {\n      W[t] = M[_i2][t];\n    }\n\n    for (var _t = 16; _t < 80; ++_t) {\n      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);\n    }\n\n    var a = H[0];\n    var b = H[1];\n    var c = H[2];\n    var d = H[3];\n    var e = H[4];\n\n    for (var _t2 = 0; _t2 < 80; ++_t2) {\n      var s = Math.floor(_t2 / 20);\n      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;\n      e = d;\n      d = c;\n      c = ROTL(b, 30) >>> 0;\n      b = a;\n      a = T;\n    }\n\n    H[0] = H[0] + a >>> 0;\n    H[1] = H[1] + b >>> 0;\n    H[2] = H[2] + c >>> 0;\n    H[3] = H[3] + d >>> 0;\n    H[4] = H[4] + e >>> 0;\n  }\n\n  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sha1);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || new Array(16);\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(b);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/esm-browser/md5.js\");\n\n\nvar v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__.default)('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v3);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DNS\": () => (/* binding */ DNS),\n/* harmony export */   \"URL\": () => (/* binding */ URL),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n\n\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  var bytes = [];\n\n  for (var i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nvar DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nvar URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__.default)(namespace);\n    }\n\n    if (namespace.length !== 16) {\n      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');\n    } // Compute hash of namespace and value, Per 4.3\n    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =\n    // hashfunc([...namespace, ... value])`\n\n\n    var bytes = new Uint8Array(16 + value.length);\n    bytes.set(namespace);\n    bytes.set(value, namespace.length);\n    bytes = hashfunc(bytes);\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (var i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n}\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/esm-browser/sha1.js\");\n\n\nvar v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__.default)('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v5);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/v5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction version(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.substr(14, 1), 16);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);\n\n//# sourceURL=webpack://@henil0604/helperjs/./node_modules/uuid/dist/esm-browser/version.js?");

/***/ }),

/***/ "./src/FileInput.js":
/*!**************************!*\
  !*** ./src/FileInput.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const FileInputInterface = __webpack_require__(/*! ./interfaces/FileInput */ \"./src/interfaces/FileInput.js\");\r\n\r\nconst FileInput = (config) => {\r\n    config = FileInputInterface(config);\r\n    return new Promise(resolve => {\r\n\r\n        let input = document.createElement(\"input\");\r\n        input.type = \"file\";\r\n        input.style.width = 0;\r\n        input.style.height = 0;\r\n        input.style.position = \"fixed\";\r\n        input.style.top = 0;\r\n        input.style.left = 0;\r\n\r\n        if (config.multiple) {\r\n            input.setAttribute(\"multiple\", \"\");\r\n        }\r\n        if (config.directory) {\r\n            input.setAttribute(\"webkitdirectory\", \"\");\r\n            input.setAttribute(\"directory\", \"\");\r\n            input.setAttribute(\"multiple\", \"\");\r\n        }\r\n\r\n        if (config.accept) {\r\n            input.setAttribute(\"accept\", config.accept);\r\n        }\r\n\r\n        let timeout = null;\r\n\r\n        input.onclick = (e) => {\r\n            timeout = setTimeout(() => {\r\n                resolve(input.files);\r\n                input.remove();\r\n            }, config.timeout || 60000)\r\n        }\r\n\r\n        input.onchange = (e) => {\r\n            e.preventDefault();\r\n            clearTimeout(timeout);\r\n            resolve(e.target.files);\r\n            input.remove();\r\n        }\r\n\r\n        document.body.appendChild(input);\r\n\r\n        input.click();\r\n\r\n    })\r\n}\r\n\r\nmodule.exports = FileInput;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/FileInput.js?");

/***/ }),

/***/ "./src/autoExpand.js":
/*!***************************!*\
  !*** ./src/autoExpand.js ***!
  \***************************/
/***/ ((module) => {

eval("function autoExpand(field) {\r\n\r\n    // Reset field height\r\n    field.style.height = 'inherit';\r\n\r\n    // Get the computed styles for the element\r\n    let computed = window.getComputedStyle(field);\r\n\r\n    // Calculate the height\r\n    let height =\r\n        parseFloat(computed.paddingTop) +\r\n        field.scrollHeight +\r\n        parseFloat(computed.paddingBottom);\r\n\r\n    field.style.height = height + 'px';\r\n\r\n}\r\n\r\nmodule.exports = autoExpand;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/autoExpand.js?");

/***/ }),

/***/ "./src/buildQuery.js":
/*!***************************!*\
  !*** ./src/buildQuery.js ***!
  \***************************/
/***/ ((module) => {

eval("/*!\r\n * Build a query string from an object of data\r\n * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com\r\n * @param  {Object} data The data to turn into a query string\r\n * @return {String}      The query string\r\n */\r\nfunction buildQuery(data) {\r\n    return new URLSearchParams(data).toString();\r\n}\r\n\r\nmodule.exports = buildQuery;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/buildQuery.js?");

/***/ }),

/***/ "./src/clone.js":
/*!**********************!*\
  !*** ./src/clone.js ***!
  \**********************/
/***/ ((module) => {

eval("/*!\r\n * Create an immutable clone of data (an array, object, map, set, etc.)\r\n * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com\r\n * @param  {*} obj The data object to copy\r\n * @return {*}     The clone of the array or object\r\n */\r\nfunction copy(obj) {\r\n\r\n    //\r\n    // Methods\r\n    //\r\n\r\n    /**\r\n     * Copy properties from the original object to the clone\r\n     * @param {Object|Function} clone The cloned object\r\n     */\r\n    function copyProps(clone) {\r\n        for (let key in obj) {\r\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\r\n                clone[key] = copy(obj[key]);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Create an immutable copy of an object\r\n     * @return {Object}\r\n     */\r\n    function cloneObj() {\r\n        let clone = {};\r\n        copyProps(clone);\r\n        return clone;\r\n    }\r\n\r\n    /**\r\n     * Create an immutable copy of an array\r\n     * @return {Array}\r\n     */\r\n    function cloneArr() {\r\n        return obj.map(function (item) {\r\n            return copy(item);\r\n        });\r\n    }\r\n\r\n    /**\r\n     * Create an immutable copy of a Map\r\n     * @return {Map}\r\n     */\r\n    function cloneMap() {\r\n        let clone = new Map();\r\n        for (let [key, val] of obj) {\r\n            clone.set(key, copy(val));\r\n        }\r\n        return clone;\r\n    }\r\n\r\n    /**\r\n     * Create an immutable clone of a Set\r\n     * @return {Set}\r\n     */\r\n    function cloneSet() {\r\n        let clone = new Set();\r\n        for (let item of set) {\r\n            clone.add(copy(item));\r\n        }\r\n        return clone;\r\n    }\r\n\r\n    /**\r\n     * Create an immutable copy of a function\r\n     * @return {Function}\r\n     */\r\n    function cloneFunction() {\r\n        let clone = obj.bind(this);\r\n        copyProps(clone);\r\n        return clone;\r\n    }\r\n\r\n\r\n    //\r\n    // Inits\r\n    //\r\n\r\n    // Get object type\r\n    let type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();\r\n\r\n    // Return a clone based on the object type\r\n    if (type === 'object') return cloneObj();\r\n    if (type === 'array') return cloneArr();\r\n    if (type === 'map') return cloneMap();\r\n    if (type === 'set') return cloneSet();\r\n    if (type === 'function') return cloneFunction();\r\n    return obj;\r\n\r\n}\r\n\r\n\r\nmodule.exports = copy;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/clone.js?");

/***/ }),

/***/ "./src/formatBytes.js":
/*!****************************!*\
  !*** ./src/formatBytes.js ***!
  \****************************/
/***/ ((module) => {

eval("function formatBytes(bytes, decimals = 2) {\n    if (bytes === 0) return '0 Bytes';\n    const k = 1024;\n    const dm = decimals < 0 ? 0 : decimals;\n    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n    const i = Math.floor(Math.log(bytes) / Math.log(k));\n    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];\n}\n\nmodule.exports = formatBytes;\n\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/formatBytes.js?");

/***/ }),

/***/ "./src/getContrastColor.js":
/*!*********************************!*\
  !*** ./src/getContrastColor.js ***!
  \*********************************/
/***/ ((module) => {

eval("function getContrastColor (hexcolor){\r\n\r\n\t// If a leading # is provided, remove it\r\n\tif (hexcolor.slice(0, 1) === '#') {\r\n\t\thexcolor = hexcolor.slice(1);\r\n\t}\r\n\r\n\t// If a three-character hexcode, make six-character\r\n\tif (hexcolor.length === 3) {\r\n\t\thexcolor = hexcolor.split('').map(function (hex) {\r\n\t\t\treturn hex + hex;\r\n\t\t}).join('');\r\n\t}\r\n\r\n\t// Convert to RGB value\r\n\tlet r = parseInt(hexcolor.substr(0,2),16);\r\n\tlet g = parseInt(hexcolor.substr(2,2),16);\r\n\tlet b = parseInt(hexcolor.substr(4,2),16);\r\n\r\n\t// Get YIQ ratio\r\n\tlet yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;\r\n\r\n\t// Check contrast\r\n\treturn (yiq >= 128) ? 'black' : 'white';\r\n\r\n}\r\n\r\n\r\nmodule.exports = getContrastColor;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/getContrastColor.js?");

/***/ }),

/***/ "./src/getParam.js":
/*!*************************!*\
  !*** ./src/getParam.js ***!
  \*************************/
/***/ ((module) => {

eval("\r\nfunction getParam(param, url = window.location) {\r\n    let params = new URL(url).searchParams;\r\n    let val = params.getAll(param);\r\n    if (val.length > 1) return val;\r\n    return val[0];\r\n}\r\n\r\ngetParam.__proto__.all = (url = window.location) => {\r\n    let params = {};\r\n    new URL(url).searchParams.forEach(function (val, key) {\r\n        if (params[key] !== undefined) {\r\n            if (!Array.isArray(params[key])) {\r\n                params[key] = [params[key]];\r\n            }\r\n            params[key].push(val);\r\n        } else {\r\n            params[key] = val;\r\n        }\r\n    });\r\n    return params;\r\n};\r\n\r\n\r\nmodule.exports = getParam;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/getParam.js?");

/***/ }),

/***/ "./src/helpers/is.js":
/*!***************************!*\
  !*** ./src/helpers/is.js ***!
  \***************************/
/***/ ((module) => {

eval("let is = {};\r\n\r\nis.object = (data) => {\r\n    return typeof data == \"object\" && !Array.isArray(data);\r\n}\r\n\r\nis.Array = (data) => {\r\n    return Array.isArray(data);\r\n}\r\n\r\nis.string = (data) => {\r\n    return typeof data == \"string\";\r\n}\r\n\r\nis.number = (data) => {\r\n    return typeof data == \"number\";\r\n}\r\n\r\nis.not = (data) => {\r\n    return (data == null || data == \"null\") || (data == undefined || data == \"undefined\");\r\n}\r\n\r\nis.odd = (data) => {\r\n    if (!is.number(data)) {\r\n        return false;\r\n    }\r\n    return data % 2 != 0;\r\n}\r\n\r\nis.even = (data) => {\r\n    if (!is.number(data)) {\r\n        return false;\r\n    }\r\n    return data % 2 == 0;\r\n}\r\n\r\n\r\n\r\n\r\nmodule.exports = is;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/helpers/is.js?");

/***/ }),

/***/ "./src/helpers/validator.js":
/*!**********************************!*\
  !*** ./src/helpers/validator.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const is = __webpack_require__(/*! ./is */ \"./src/helpers/is.js\");\r\n\r\nlet validator = {};\r\n\r\nvalidator.setDefault = (data, key, value) => {\r\n    if (!is.object(data)) return data;\r\n    if (is.not(data[key])) {\r\n        data[key] = value;\r\n    }\r\n    return data;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nmodule.exports = validator;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/helpers/validator.js?");

/***/ }),

/***/ "./src/interfaces/FileInput.js":
/*!*************************************!*\
  !*** ./src/interfaces/FileInput.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const validator = __webpack_require__(/*! ../helpers/validator */ \"./src/helpers/validator.js\");\r\nconst is = __webpack_require__(/*! ../helpers/is */ \"./src/helpers/is.js\");\r\n\r\nmodule.exports = (config) => {\r\n\r\n    if (!is.object(config)) { config = {} };\r\n\r\n    config = validator.setDefault(config, \"multiple\", false);\r\n    config = validator.setDefault(config, \"directory\", false);\r\n    config = validator.setDefault(config, \"timeout\", 60000);\r\n    config = validator.setDefault(config, \"accept\", null);\r\n\r\n    return config;\r\n}\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/interfaces/FileInput.js?");

/***/ }),

/***/ "./src/isEqual.js":
/*!************************!*\
  !*** ./src/isEqual.js ***!
  \************************/
/***/ ((module) => {

eval("/*!\r\n * Check if two objects or arrays are equal\r\n * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com\r\n * @param  {*}       obj1 The first item\r\n * @param  {*}       obj2 The second item\r\n * @return {Boolean}       Returns true if they're equal in value\r\n */\r\nfunction isEqual(obj1, obj2) {\r\n\r\n    /**\r\n     * More accurately check the type of a JavaScript object\r\n     * @param  {Object} obj The object\r\n     * @return {String}     The object type\r\n     */\r\n    function getType(obj) {\r\n        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();\r\n    }\r\n\r\n    function areArraysEqual() {\r\n\r\n        // Check length\r\n        if (obj1.length !== obj2.length) return false;\r\n\r\n        // Check each item in the array\r\n        for (let i = 0; i < obj1.length; i++) {\r\n            if (!isEqual(obj1[i], obj2[i])) return false;\r\n        }\r\n\r\n        // If no errors, return true\r\n        return true;\r\n\r\n    }\r\n\r\n    function areObjectsEqual() {\r\n\r\n        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;\r\n\r\n        // Check each item in the object\r\n        for (let key in obj1) {\r\n            if (Object.prototype.hasOwnProperty.call(obj1, key)) {\r\n                if (!isEqual(obj1[key], obj2[key])) return false;\r\n            }\r\n        }\r\n\r\n        // If no errors, return true\r\n        return true;\r\n\r\n    }\r\n\r\n    function areFunctionsEqual() {\r\n        return obj1.toString() === obj2.toString();\r\n    }\r\n\r\n    function arePrimativesEqual() {\r\n        return obj1 === obj2;\r\n    }\r\n\r\n    // Get the object type\r\n    let type = getType(obj1);\r\n\r\n    // If the two items are not the same type, return false\r\n    if (type !== getType(obj2)) return false;\r\n\r\n    // Compare based on type\r\n    if (type === 'array') return areArraysEqual();\r\n    if (type === 'object') return areObjectsEqual();\r\n    if (type === 'function') return areFunctionsEqual();\r\n    return arePrimativesEqual();\r\n\r\n}\r\n\r\n\r\nmodule.exports = isEqual;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/isEqual.js?");

/***/ }),

/***/ "./src/put.js":
/*!********************!*\
  !*** ./src/put.js ***!
  \********************/
/***/ ((module) => {

eval("/*!\r\n * Add items to an object at a specific path\r\n * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com\r\n * @param  {Object}       obj  The object\r\n * @param  {String|Array} path The path to assign the value to\r\n * @param  {*}            val  The value to assign\r\n */\r\nfunction put(obj, path, val) {\r\n\r\n    /**\r\n     * If the path is a string, convert it to an array\r\n     * @param  {String|Array} path The path\r\n     * @return {Array}             The path array\r\n     */\r\n    function stringToPath(path) {\r\n\r\n        // If the path isn't a string, return it\r\n        if (typeof path !== 'string') return path;\r\n\r\n        // Create new array\r\n        let output = [];\r\n\r\n        // Split to an array with dot notation\r\n        path.split('.').forEach(function (item) {\r\n\r\n            // Split to an array with bracket notation\r\n            item.split(/\\[([^}]+)\\]/g).forEach(function (key) {\r\n\r\n                // Push to the new array\r\n                if (key.length > 0) {\r\n                    output.push(key);\r\n                }\r\n\r\n            });\r\n\r\n        });\r\n\r\n        return output;\r\n\r\n    }\r\n\r\n    // Convert the path to an array if not already\r\n    path = stringToPath(path);\r\n\r\n    // Cache the path length and current spot in the object\r\n    let length = path.length;\r\n    let current = obj;\r\n\r\n    // Loop through the path\r\n    path.forEach(function (key, index) {\r\n\r\n        // Check if the assigned key should be an array\r\n        let isArray = key.slice(-2) === '[]';\r\n\r\n        // If so, get the true key name by removing the trailing []\r\n        key = isArray ? key.slice(0, -2) : key;\r\n\r\n        // If the key should be an array and isn't, create an array\r\n        if (isArray && !Array.isArray(current[key])) {\r\n            current[key] = [];\r\n        }\r\n\r\n        // If this is the last item in the loop, assign the value\r\n        if (index === length - 1) {\r\n\r\n            // If it's an array, push the value\r\n            // Otherwise, assign it\r\n            if (isArray) {\r\n                current[key].push(val);\r\n            } else {\r\n                current[key] = val;\r\n            }\r\n        }\r\n\r\n        // Otherwise, update the current place in the object\r\n        else {\r\n\r\n            // If the key doesn't exist, create it\r\n            if (!current[key]) {\r\n                current[key] = {};\r\n            }\r\n\r\n            // Update the current place in the object\r\n            current = current[key];\r\n\r\n        }\r\n\r\n    });\r\n\r\n}\r\n\r\n\r\nmodule.exports = put;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/put.js?");

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let uuid = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\r\n\r\nlet random = (n = 10) => {\r\n    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\r\n    var token = '';\r\n    for (var i = 0; i < n; i++) {\r\n        token += chars[Math.floor(Math.random() * chars.length)];\r\n    }\r\n    return token;\r\n}\r\n\r\nrandom.__proto__.uuid = () => {\r\n    return uuid.v4();\r\n}\r\n\r\nrandom.__proto__.number = (min = 0, max = 100) => {\r\n    return Math.floor(Math.random() * (max - min + 1) + min)\r\n}\r\n    /*!\r\n * Create a random color value.\r\n * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com\r\n * @return {String} A random six-digit color hexcode\r\n */\r\nrandom.__proto__.color = ()=>{\r\n\r\n\t// The available hex options\r\n\tlet hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];\r\n\r\n\t/**\r\n\t * Randomly shuffle an array\r\n\t * https://stackoverflow.com/a/2450976/1293256\r\n\t */\r\n\tlet shuffle = function () {\r\n\r\n\t\tlet currentIndex = hex.length;\r\n\t\tlet temporaryValue, randomIndex;\r\n\r\n\t\t// While there remain elements to shuffle...\r\n\t\twhile (0 !== currentIndex) {\r\n\t\t\t// Pick a remaining element...\r\n\t\t\trandomIndex = Math.floor(Math.random() * currentIndex);\r\n\t\t\tcurrentIndex -= 1;\r\n\r\n\t\t\t// And swap it with the current element.\r\n\t\t\ttemporaryValue = hex[currentIndex];\r\n\t\t\thex[currentIndex] = hex[randomIndex];\r\n\t\t\thex[randomIndex] = temporaryValue;\r\n\t\t}\r\n\r\n\t};\r\n\r\n\t/**\r\n\t * Create a six-digit hex color\r\n\t */\r\n\tlet hexColor = function () {\r\n\r\n\t\t// Create the color\r\n\t\tlet color = '#';\r\n\r\n\t\t// Shuffle the hex values and append\r\n\t\tfor (let i = 0; i < 6; i++) {\r\n\t\t\tshuffle(hex);\r\n\t\t\tcolor += hex[0];\r\n\t\t}\r\n\r\n\t\treturn color;\r\n\r\n\t};\r\n\r\n\t// Return the color string\r\n\treturn hexColor();\r\n}\r\n\r\n\r\nmodule.exports = random;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/random.js?");

/***/ }),

/***/ "./src/timeDiff.js":
/*!*************************!*\
  !*** ./src/timeDiff.js ***!
  \*************************/
/***/ ((module) => {

eval("/*!\r\n * Get the amount of time from now for a date\r\n * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com\r\n * @param  {String|Date} time The date to get the time from now for\r\n * @return {Object}           The time from now data\r\n */\r\nfunction timeDiff(time, nowTime = Date.now()) {\r\n\r\n    // Get timestamps\r\n    let unixTime = new Date(time).getTime();\r\n    if (!unixTime) return;\r\n    let now = new Date(nowTime).getTime();\r\n\r\n    // Calculate difference\r\n    let difference = (unixTime / 1000) - (now / 1000);\r\n\r\n    // Setup return object\r\n    let tfn = {};\r\n\r\n    // Check if time is in the past, present, or future\r\n    tfn.when = 'now';\r\n    if (difference > 0) {\r\n        tfn.when = 'future';\r\n    } else if (difference < -1) {\r\n        tfn.when = 'past';\r\n    }\r\n\r\n    // Convert difference to absolute\r\n    difference = Math.abs(difference);\r\n\r\n    // Calculate time unit\r\n    if (difference / (60 * 60 * 24 * 365) > 1) {\r\n        // Years\r\n        tfn.unitOfTime = 'years';\r\n        tfn.time = Math.floor(difference / (60 * 60 * 24 * 365));\r\n    } else if (difference / (60 * 60 * 24 * 45) > 1) {\r\n        // Months\r\n        tfn.unitOfTime = 'months';\r\n        tfn.time = Math.floor(difference / (60 * 60 * 24 * 45));\r\n    } else if (difference / (60 * 60 * 24) > 1) {\r\n        // Days\r\n        tfn.unitOfTime = 'days';\r\n        tfn.time = Math.floor(difference / (60 * 60 * 24));\r\n    } else if (difference / (60 * 60) > 1) {\r\n        // Hours\r\n        tfn.unitOfTime = 'hours';\r\n        tfn.time = Math.floor(difference / (60 * 60));\r\n    } else {\r\n        // Seconds\r\n        tfn.unitOfTime = 'seconds';\r\n        tfn.time = Math.floor(difference);\r\n    }\r\n\r\n    // Return time from now data\r\n    return tfn;\r\n\r\n}\r\n\r\n\r\nmodule.exports = timeDiff;\n\n//# sourceURL=webpack://@henil0604/helperjs/./src/timeDiff.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;