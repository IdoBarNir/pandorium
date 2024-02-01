/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PROJECT_NAME: () => (/* binding */ PROJECT_NAME),\n/* harmony export */   PROJECT_PATH: () => (/* binding */ PROJECT_PATH)\n/* harmony export */ });\nconst PROJECT_NAME = \"testproject\";\nconst PROJECT_PATH = `../${PROJECT_NAME}`;\n\n\n\n//# sourceURL=webpack://pandorium/./config/index.ts?");

/***/ }),

/***/ "./pandorium.ts":
/*!**********************!*\
  !*** ./pandorium.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @setups */ \"./setups/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_setups__WEBPACK_IMPORTED_MODULE_0__]);\n_setups__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst pandorium = async () => {\n    console.log(`\\nsetting up ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME}...\\n`);\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.initialSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.nextSetup)();\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.packageJsonSetup)();\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.tsconfigSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.muiSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.expressSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.supabaseSetup)();\n    console.log(`\\nbuilding ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME}...\\n`);\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n        command: `cd ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH} && yarn build`,\n        options: { stdio: \"inherit\" },\n    });\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.vercelSetup)();\n    console.log(`\\nstarting ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME}...\\n`);\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n        command: `cd ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH} && ../pandorium/utils/execution/start_project.exp`,\n        options: { stdio: \"inherit\" },\n    });\n};\npandorium().catch((error) => {\n    console.error(`\\n${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME} setup failed: ${error.message}\\n`);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://pandorium/./pandorium.ts?");

/***/ }),

/***/ "./setups/express/expressSetup.ts":
/*!****************************************!*\
  !*** ./setups/express/expressSetup.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressSetup: () => (/* binding */ expressSetup)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./setups/express/utils/index.ts\");\n/* harmony import */ var _heirloom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heirloom */ \"./setups/express/heirloom/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heirloom__WEBPACK_IMPORTED_MODULE_3__]);\n_heirloom__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst expressSetup = async () => {\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.expressInstall)();\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/server.ts`, _heirloom__WEBPACK_IMPORTED_MODULE_3__.serverContent);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://pandorium/./setups/express/expressSetup.ts?");

/***/ }),

/***/ "./setups/express/heirloom/index.ts":
/*!******************************************!*\
  !*** ./setups/express/heirloom/index.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serverContent: () => (/* binding */ serverContent)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst __filename = (0,url__WEBPACK_IMPORTED_MODULE_2__.fileURLToPath)(\"file:///Users/idobar-nir/Projects/pandorium/setups/express/heirloom/index.ts\");\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(__filename);\nconst serverContentPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, \"serverContent.ts\");\nconst serverContent = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(serverContentPath, \"utf8\");\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://pandorium/./setups/express/heirloom/index.ts?");

/***/ }),

/***/ "./setups/express/index.ts":
/*!*********************************!*\
  !*** ./setups/express/index.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressSetup: () => (/* binding */ expressSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _expressSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressSetup */ \"./setups/express/expressSetup.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_expressSetup__WEBPACK_IMPORTED_MODULE_1__]);\n_expressSetup__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst expressSetup = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _expressSetup__WEBPACK_IMPORTED_MODULE_1__.expressSetup,\n    childLabel: \"Express.js Setup\",\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://pandorium/./setups/express/index.ts?");

/***/ }),

/***/ "./setups/express/utils/expressInstall.ts":
/*!************************************************!*\
  !*** ./setups/express/utils/expressInstall.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressInstall: () => (/* binding */ expressInstall)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst expressInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n    command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH} && yarn add express @types/express `,\n    options: {\n        stdio: \"inherit\",\n    },\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/express/utils/expressInstall.ts?");

/***/ }),

/***/ "./setups/express/utils/index.ts":
/*!***************************************!*\
  !*** ./setups/express/utils/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressInstall: () => (/* binding */ expressInstall)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _expressInstall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressInstall */ \"./setups/express/utils/expressInstall.ts\");\n\n\nconst expressInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _expressInstall__WEBPACK_IMPORTED_MODULE_1__.expressInstall,\n    childLabel: \"Express.js Installation\",\n    onlyTryCatch: true,\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/express/utils/index.ts?");

/***/ }),

/***/ "./setups/index.ts":
/*!*************************!*\
  !*** ./setups/index.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressSetup: () => (/* reexport safe */ _express__WEBPACK_IMPORTED_MODULE_0__.expressSetup),\n/* harmony export */   initialSetup: () => (/* reexport safe */ _initialSetup__WEBPACK_IMPORTED_MODULE_1__.initialSetup),\n/* harmony export */   muiSetup: () => (/* reexport safe */ _mui__WEBPACK_IMPORTED_MODULE_2__.muiSetup),\n/* harmony export */   nextSetup: () => (/* reexport safe */ _next__WEBPACK_IMPORTED_MODULE_3__.nextSetup),\n/* harmony export */   supabaseSetup: () => (/* reexport safe */ _supabase__WEBPACK_IMPORTED_MODULE_4__.supabaseSetup),\n/* harmony export */   vercelSetup: () => (/* reexport safe */ _vercel__WEBPACK_IMPORTED_MODULE_5__.vercelSetup)\n/* harmony export */ });\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ \"./setups/express/index.ts\");\n/* harmony import */ var _initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialSetup */ \"./setups/initialSetup/index.ts\");\n/* harmony import */ var _mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mui */ \"./setups/mui/index.ts\");\n/* harmony import */ var _next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./next */ \"./setups/next/index.ts\");\n/* harmony import */ var _supabase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supabase */ \"./setups/supabase/index.ts\");\n/* harmony import */ var _vercel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vercel */ \"./setups/vercel/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_express__WEBPACK_IMPORTED_MODULE_0__, _supabase__WEBPACK_IMPORTED_MODULE_4__]);\n([_express__WEBPACK_IMPORTED_MODULE_0__, _supabase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://pandorium/./setups/index.ts?");

/***/ }),

/***/ "./setups/initialSetup/index.ts":
/*!**************************************!*\
  !*** ./setups/initialSetup/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialSetup: () => (/* binding */ initialSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialSetup */ \"./setups/initialSetup/initialSetup.ts\");\n\n\nconst initialSetup = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _initialSetup__WEBPACK_IMPORTED_MODULE_1__.initialSetup,\n    childLabel: \"Initial Setup\",\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/initialSetup/index.ts?");

/***/ }),

/***/ "./setups/initialSetup/initialSetup.ts":
/*!*********************************************!*\
  !*** ./setups/initialSetup/initialSetup.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialSetup: () => (/* binding */ initialSetup)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./setups/initialSetup/utils/index.ts\");\n\n\n\nconst initialSetup = async () => {\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDirectory)({ directoryPath: _config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH });\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.yarnInstall)();\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/initialSetup/initialSetup.ts?");

/***/ }),

/***/ "./setups/initialSetup/utils/index.ts":
/*!********************************************!*\
  !*** ./setups/initialSetup/utils/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   yarnInstall: () => (/* binding */ yarnInstall)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _yarnInstall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yarnInstall */ \"./setups/initialSetup/utils/yarnInstall.ts\");\n\n\nconst yarnInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _yarnInstall__WEBPACK_IMPORTED_MODULE_1__.yarnInstall,\n    childLabel: \"Yarn Installation\",\n    onlyTryCatch: true,\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/initialSetup/utils/index.ts?");

/***/ }),

/***/ "./setups/initialSetup/utils/yarnInstall.ts":
/*!**************************************************!*\
  !*** ./setups/initialSetup/utils/yarnInstall.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   yarnInstall: () => (/* binding */ yarnInstall)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\nconst yarnInstall = async () => {\n    const yarnInstalled = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isLibraryInstalled)({ libraryName: \"yarn\" });\n    if (!yarnInstalled) {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.installLibrary)({ libraryName: \"yarn\" });\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/initialSetup/utils/yarnInstall.ts?");

/***/ }),

/***/ "./setups/mui/index.ts":
/*!*****************************!*\
  !*** ./setups/mui/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiSetup: () => (/* binding */ muiSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _muiSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./muiSetup */ \"./setups/mui/muiSetup.ts\");\n\n\nconst muiSetup = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _muiSetup__WEBPACK_IMPORTED_MODULE_1__.muiSetup,\n    childLabel: \"MUI Setup\",\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/index.ts?");

/***/ }),

/***/ "./setups/mui/muiSetup.ts":
/*!********************************!*\
  !*** ./setups/mui/muiSetup.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiSetup: () => (/* binding */ muiSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./setups/mui/utils/index.ts\");\n\nconst muiSetup = async () => {\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.muiInstall)();\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.muiFoldersSetup)();\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/muiSetup.ts?");

/***/ }),

/***/ "./setups/mui/utils/index.ts":
/*!***********************************!*\
  !*** ./setups/mui/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiFoldersSetup: () => (/* binding */ muiFoldersSetup),\n/* harmony export */   muiInstall: () => (/* binding */ muiInstall)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _muiFoldersSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./muiFoldersSetup */ \"./setups/mui/utils/muiFoldersSetup.ts\");\n/* harmony import */ var _muiInstall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./muiInstall */ \"./setups/mui/utils/muiInstall.ts\");\n\n\n\nconst muiFoldersSetup = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _muiFoldersSetup__WEBPACK_IMPORTED_MODULE_1__.muiFoldersSetup,\n    childLabel: \"MUI Folder Setup\",\n    onlyTryCatch: true,\n});\nconst muiInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _muiInstall__WEBPACK_IMPORTED_MODULE_2__.muiInstall,\n    childLabel: \"MUI Installation\",\n    onlyTryCatch: true,\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/utils/index.ts?");

/***/ }),

/***/ "./setups/mui/utils/muiFolders.ts":
/*!****************************************!*\
  !*** ./setups/mui/utils/muiFolders.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiFolders: () => (/* binding */ muiFolders)\n/* harmony export */ });\nconst muiFolders = {\n    \"@app/*\": [\"./src/app/app/*\"],\n    \"@components/*\": [\"./src/app/components/*\"],\n    \"@pages/*\": [\"./src/app/pages/*\"],\n    \"@hooks/*\": [\"./src/app/hooks/*\"],\n    \"@layouts/*\": [\"./src/app/layouts/*\"],\n    \"@styles/*\": [\"./src/app/styles/*\"],\n    \"@theme/*\": [\"./src/app/theme/*\"],\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/utils/muiFolders.ts?");

/***/ }),

/***/ "./setups/mui/utils/muiFoldersSetup.ts":
/*!*********************************************!*\
  !*** ./setups/mui/utils/muiFoldersSetup.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiFoldersSetup: () => (/* binding */ muiFoldersSetup)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _muiFolders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./muiFolders */ \"./setups/mui/utils/muiFolders.ts\");\n\n\n\nconst muiFoldersSetup = async () => {\n    const updatedTsconfig = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTsconfigContent)();\n    updatedTsconfig.compilerOptions.paths = { ..._muiFolders__WEBPACK_IMPORTED_MODULE_2__.muiFolders };\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.updateTsconfig)({ updatedTsconfig });\n    await Promise.all(Object.values(_muiFolders__WEBPACK_IMPORTED_MODULE_2__.muiFolders).flatMap((paths) => paths.map((path) => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDirectory)({\n        directoryPath: `${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH}/${path.replace(\"/*\", \"\")}`,\n    }))));\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/utils/muiFoldersSetup.ts?");

/***/ }),

/***/ "./setups/mui/utils/muiInstall.ts":
/*!****************************************!*\
  !*** ./setups/mui/utils/muiInstall.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiInstall: () => (/* binding */ muiInstall)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst muiInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n    command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH} && yarn add @mui/material @emotion/react @emotion/styled`,\n    options: { stdio: \"inherit\" },\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/utils/muiInstall.ts?");

/***/ }),

/***/ "./setups/next/index.ts":
/*!******************************!*\
  !*** ./setups/next/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextSetup: () => (/* binding */ nextSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _nextSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextSetup */ \"./setups/next/nextSetup.ts\");\n\n\nconst nextSetup = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _nextSetup__WEBPACK_IMPORTED_MODULE_1__.nextSetup,\n    childLabel: \"MUI Setup\",\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/next/index.ts?");

/***/ }),

/***/ "./setups/next/nextSetup.ts":
/*!**********************************!*\
  !*** ./setups/next/nextSetup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextSetup: () => (/* binding */ nextSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./setups/next/utils/index.ts\");\n\nconst nextSetup = async () => {\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createNextApp)();\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/next/nextSetup.ts?");

/***/ }),

/***/ "./setups/next/utils/createNextApp.ts":
/*!********************************************!*\
  !*** ./setups/next/utils/createNextApp.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNextApp: () => (/* binding */ createNextApp)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./setups/next/utils/index.ts\");\n\n\n\nconst createNextApp = async () => {\n    const childProcess = (0,child_process__WEBPACK_IMPORTED_MODULE_0__.spawn)(\"yarn\", [\"create\", \"next-app\", \"--typescript\", _config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH], { stdio: [\"pipe\", \"pipe\", \"pipe\"] });\n    childProcess.stdout.on(\"data\", (data) => (0,___WEBPACK_IMPORTED_MODULE_2__.handleNextOutput)({ data, childProcess }));\n    childProcess.stderr.on(\"data\", (data) => console.error(data.toString()));\n    return new Promise((resolve, reject) => {\n        childProcess.on(\"close\", (code) => {\n            code === 0\n                ? resolve()\n                : reject(new Error(`setupNext exited with code ${code}`));\n        });\n    });\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/next/utils/createNextApp.ts?");

/***/ }),

/***/ "./setups/next/utils/handleNextOutput.ts":
/*!***********************************************!*\
  !*** ./setups/next/utils/handleNextOutput.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleNextOutput: () => (/* binding */ handleNextOutput)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./setups/next/utils/index.ts\");\n\nconst handleNextOutput = async ({ data, childProcess }) => {\n    const output = data.toString();\n    Object.entries(___WEBPACK_IMPORTED_MODULE_0__.nextPrompts).forEach(([prompt, response]) => {\n        if (output.includes(prompt)) {\n            childProcess.stdin.write(response);\n        }\n    });\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/next/utils/handleNextOutput.ts?");

/***/ }),

/***/ "./setups/next/utils/index.ts":
/*!************************************!*\
  !*** ./setups/next/utils/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNextApp: () => (/* binding */ createNextApp),\n/* harmony export */   handleNextOutput: () => (/* binding */ handleNextOutput),\n/* harmony export */   nextPrompts: () => (/* reexport default export from named module */ _nextPrompts_json__WEBPACK_IMPORTED_MODULE_1__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _nextPrompts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextPrompts.json */ \"./setups/next/utils/nextPrompts.json\");\n/* harmony import */ var _handleNextOutput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleNextOutput */ \"./setups/next/utils/handleNextOutput.ts\");\n/* harmony import */ var _createNextApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createNextApp */ \"./setups/next/utils/createNextApp.ts\");\n\n\n\n\nconst handleNextOutput = async ({ data, childProcess }) => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _handleNextOutput__WEBPACK_IMPORTED_MODULE_2__.handleNextOutput,\n    childLabel: \"Next Creation Prompts\",\n    args: { data, childProcess },\n    onlyTryCatch: true,\n});\nconst createNextApp = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _createNextApp__WEBPACK_IMPORTED_MODULE_3__.createNextApp,\n    childLabel: \"Create Next App\",\n    onlyTryCatch: true,\n});\n\n\n\n//# sourceURL=webpack://pandorium/./setups/next/utils/index.ts?");

/***/ }),

/***/ "./setups/supabase/heirloom/envContent.ts":
/*!************************************************!*\
  !*** ./setups/supabase/heirloom/envContent.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   envContent: () => (/* binding */ envContent)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./setups/supabase/utils/index.ts\");\n\nconst envContent = `SUPABASE_URL=${_utils__WEBPACK_IMPORTED_MODULE_0__.supabaseConfig.url}\nSUPABASE_ANON_KEY=${_utils__WEBPACK_IMPORTED_MODULE_0__.supabaseConfig.anonKey}\n`;\n\n\n//# sourceURL=webpack://pandorium/./setups/supabase/heirloom/envContent.ts?");

/***/ }),

/***/ "./setups/supabase/heirloom/index.ts":
/*!*******************************************!*\
  !*** ./setups/supabase/heirloom/index.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   configContent: () => (/* binding */ configContent),\n/* harmony export */   envContent: () => (/* reexport safe */ _envContent__WEBPACK_IMPORTED_MODULE_3__.envContent)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _envContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./envContent */ \"./setups/supabase/heirloom/envContent.ts\");\n\n\n\nconst __filename = (0,url__WEBPACK_IMPORTED_MODULE_2__.fileURLToPath)(\"file:///Users/idobar-nir/Projects/pandorium/setups/supabase/heirloom/index.ts\");\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(__filename);\nconst configContentPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, \"configContent.ts\");\nconst configContent = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(configContentPath, \"utf8\");\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://pandorium/./setups/supabase/heirloom/index.ts?");

/***/ }),

/***/ "./setups/supabase/index.ts":
/*!**********************************!*\
  !*** ./setups/supabase/index.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseSetup: () => (/* binding */ supabaseSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _supabaseSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabaseSetup */ \"./setups/supabase/supabaseSetup.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_supabaseSetup__WEBPACK_IMPORTED_MODULE_1__]);\n_supabaseSetup__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst supabaseSetup = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _supabaseSetup__WEBPACK_IMPORTED_MODULE_1__.supabaseSetup,\n    childLabel: \"Supabase Setup\",\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://pandorium/./setups/supabase/index.ts?");

/***/ }),

/***/ "./setups/supabase/supabaseSetup.ts":
/*!******************************************!*\
  !*** ./setups/supabase/supabaseSetup.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseSetup: () => (/* binding */ supabaseSetup)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./setups/supabase/utils/index.ts\");\n/* harmony import */ var _heirloom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heirloom */ \"./setups/supabase/heirloom/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heirloom__WEBPACK_IMPORTED_MODULE_3__]);\n_heirloom__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst supabaseSetup = async () => {\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.supabaseInstall)();\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/.env`, _heirloom__WEBPACK_IMPORTED_MODULE_3__.envContent);\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/supabaseConfig.ts`, _heirloom__WEBPACK_IMPORTED_MODULE_3__.configContent);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://pandorium/./setups/supabase/supabaseSetup.ts?");

/***/ }),

/***/ "./setups/supabase/utils/index.ts":
/*!****************************************!*\
  !*** ./setups/supabase/utils/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseConfig: () => (/* reexport default export from named module */ _supabaseConfig_json__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   supabaseInstall: () => (/* binding */ supabaseInstall)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _supabaseConfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabaseConfig.json */ \"./setups/supabase/utils/supabaseConfig.json\");\n/* harmony import */ var _supabaseInstall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supabaseInstall */ \"./setups/supabase/utils/supabaseInstall.ts\");\n\n\n\nconst supabaseInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _supabaseInstall__WEBPACK_IMPORTED_MODULE_2__.supabaseInstall,\n    childLabel: \"Supabase Installation\",\n    onlyTryCatch: true,\n});\n\n\n\n//# sourceURL=webpack://pandorium/./setups/supabase/utils/index.ts?");

/***/ }),

/***/ "./setups/supabase/utils/supabaseInstall.ts":
/*!**************************************************!*\
  !*** ./setups/supabase/utils/supabaseInstall.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseInstall: () => (/* binding */ supabaseInstall)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst supabaseInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n    command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH} && yarn add @supabase/supabase-js dotenv`,\n    options: {\n        stdio: \"inherit\",\n    },\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/supabase/utils/supabaseInstall.ts?");

/***/ }),

/***/ "./setups/vercel/index.ts":
/*!********************************!*\
  !*** ./setups/vercel/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelSetup: () => (/* binding */ vercelSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _vercelSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vercelSetup */ \"./setups/vercel/vercelSetup.ts\");\n\n\nconst vercelSetup = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _vercelSetup__WEBPACK_IMPORTED_MODULE_1__.vercelSetup,\n    childLabel: \"Vercel Setup\",\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/index.ts?");

/***/ }),

/***/ "./setups/vercel/utils/index.ts":
/*!**************************************!*\
  !*** ./setups/vercel/utils/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelDeploy: () => (/* binding */ vercelDeploy),\n/* harmony export */   vercelInstall: () => (/* binding */ vercelInstall),\n/* harmony export */   vercelLogin: () => (/* binding */ vercelLogin)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _vercelDeploy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vercelDeploy */ \"./setups/vercel/utils/vercelDeploy.ts\");\n/* harmony import */ var _vercelInstall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vercelInstall */ \"./setups/vercel/utils/vercelInstall.ts\");\n/* harmony import */ var _vercelLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vercelLogin */ \"./setups/vercel/utils/vercelLogin.ts\");\n\n\n\n\nconst vercelDeploy = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _vercelDeploy__WEBPACK_IMPORTED_MODULE_1__.vercelDeploy,\n    childLabel: \"Vercel Deployment\",\n});\nconst vercelInstall = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _vercelInstall__WEBPACK_IMPORTED_MODULE_2__.vercelInstall,\n    childLabel: \"Vercel Installation\",\n    onlyTryCatch: true,\n});\nconst vercelLogin = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _vercelLogin__WEBPACK_IMPORTED_MODULE_3__.vercelLogin,\n    childLabel: \"Vercel Login\",\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/index.ts?");

/***/ }),

/***/ "./setups/vercel/utils/vercelDeploy.ts":
/*!*********************************************!*\
  !*** ./setups/vercel/utils/vercelDeploy.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelDeploy: () => (/* binding */ vercelDeploy)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst vercelDeploy = async () => await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n    command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH} && ../pandorium/setups/vercel/utils/vercel_deploy.exp`,\n    options: { stdio: \"inherit\" },\n});\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/vercelDeploy.ts?");

/***/ }),

/***/ "./setups/vercel/utils/vercelInstall.ts":
/*!**********************************************!*\
  !*** ./setups/vercel/utils/vercelInstall.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelInstall: () => (/* binding */ vercelInstall)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\nconst vercelInstall = async () => {\n    const isVercelCliInstalled = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isLibraryInstalled)({\n        libraryName: \"vercel\",\n    });\n    if (!isVercelCliInstalled) {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.installLibrary)({ libraryName: \"vercel\" });\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/vercelInstall.ts?");

/***/ }),

/***/ "./setups/vercel/utils/vercelLogin.ts":
/*!********************************************!*\
  !*** ./setups/vercel/utils/vercelLogin.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelLogin: () => (/* binding */ vercelLogin)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst vercelLogin = async () => {\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n        command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH}`,\n        options: { stdio: \"inherit\" },\n    });\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n        command: `./setups/vercel/utils/vercel_login.exp`,\n        options: { stdio: \"inherit\" },\n    });\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/vercelLogin.ts?");

/***/ }),

/***/ "./setups/vercel/vercelSetup.ts":
/*!**************************************!*\
  !*** ./setups/vercel/vercelSetup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelSetup: () => (/* binding */ vercelSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./setups/vercel/utils/index.ts\");\n\nconst vercelSetup = async () => {\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.vercelInstall)();\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.vercelLogin)();\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.vercelDeploy)();\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/vercelSetup.ts?");

/***/ }),

/***/ "./utils/execution/execAsync.ts":
/*!**************************************!*\
  !*** ./utils/execution/execAsync.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   execAsync: () => (/* binding */ execAsync)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n\nconst execAsync = ({ command, options, }) => {\n    const executionPromise = new Promise((resolve, reject) => {\n        const childProcess = (0,child_process__WEBPACK_IMPORTED_MODULE_0__.exec)(command, options, (error, stdout, stderr) => {\n            if (error) {\n                reject(error);\n            }\n            else {\n                resolve({ stdout, stderr });\n            }\n        });\n        if (options.stdio === \"inherit\") {\n            if (childProcess.stdout)\n                childProcess.stdout.pipe(process.stdout);\n            if (childProcess.stderr)\n                childProcess.stderr.pipe(process.stderr);\n        }\n    });\n    return executionPromise;\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/execution/execAsync.ts?");

/***/ }),

/***/ "./utils/execution/index.ts":
/*!**********************************!*\
  !*** ./utils/execution/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   execAsync: () => (/* binding */ execAsync)\n/* harmony export */ });\n/* harmony import */ var _utils_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/logging */ \"./utils/logging/index.ts\");\n/* harmony import */ var _execAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./execAsync */ \"./utils/execution/execAsync.ts\");\n\n\nconst execAsync = async ({ command, options, }) => await (0,_utils_logging__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _execAsync__WEBPACK_IMPORTED_MODULE_1__.execAsync,\n    childLabel: \"Command Async Execution\",\n    args: { command, options },\n    onlyTryCatch: true,\n});\n\n\n//# sourceURL=webpack://pandorium/./utils/execution/index.ts?");

/***/ }),

/***/ "./utils/file/checkDirectoryExists.ts":
/*!********************************************!*\
  !*** ./utils/file/checkDirectoryExists.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkDirectoryExists: () => (/* binding */ checkDirectoryExists)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst checkDirectoryExists = async ({ directoryPath, }) => {\n    try {\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.access)(directoryPath, fs__WEBPACK_IMPORTED_MODULE_1__.constants.F_OK);\n        return true;\n    }\n    catch {\n        return false;\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/file/checkDirectoryExists.ts?");

/***/ }),

/***/ "./utils/file/createDirectory.ts":
/*!***************************************!*\
  !*** ./utils/file/createDirectory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDirectory: () => (/* binding */ createDirectory)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createDirectory = async ({ directoryPath, }) => {\n    await fs__WEBPACK_IMPORTED_MODULE_0__.promises.mkdir(directoryPath, { recursive: true });\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/file/createDirectory.ts?");

/***/ }),

/***/ "./utils/file/index.ts":
/*!*****************************!*\
  !*** ./utils/file/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkDirectoryExists: () => (/* reexport safe */ _checkDirectoryExists__WEBPACK_IMPORTED_MODULE_2__.checkDirectoryExists),\n/* harmony export */   createDirectory: () => (/* binding */ createDirectory)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _createDirectory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDirectory */ \"./utils/file/createDirectory.ts\");\n/* harmony import */ var _checkDirectoryExists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkDirectoryExists */ \"./utils/file/checkDirectoryExists.ts\");\n\n\nconst createDirectory = async ({ directoryPath }) => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _createDirectory__WEBPACK_IMPORTED_MODULE_1__.createDirectory,\n    childLabel: \"Directory Creation\",\n    args: { directoryPath },\n    onlyTryCatch: true,\n});\n\n\n\n//# sourceURL=webpack://pandorium/./utils/file/index.ts?");

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkDirectoryExists: () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_1__.checkDirectoryExists),\n/* harmony export */   createDirectory: () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_1__.createDirectory),\n/* harmony export */   execAsync: () => (/* reexport safe */ _execution__WEBPACK_IMPORTED_MODULE_0__.execAsync),\n/* harmony export */   getTsconfigContent: () => (/* reexport safe */ _smallSetups__WEBPACK_IMPORTED_MODULE_4__.getTsconfigContent),\n/* harmony export */   installLibrary: () => (/* reexport safe */ _installation__WEBPACK_IMPORTED_MODULE_2__.installLibrary),\n/* harmony export */   isLibraryInstalled: () => (/* reexport safe */ _installation__WEBPACK_IMPORTED_MODULE_2__.isLibraryInstalled),\n/* harmony export */   loggerDogger: () => (/* reexport safe */ _logging__WEBPACK_IMPORTED_MODULE_3__.loggerDogger),\n/* harmony export */   packageJsonSetup: () => (/* reexport safe */ _smallSetups__WEBPACK_IMPORTED_MODULE_4__.packageJsonSetup),\n/* harmony export */   tsconfigSetup: () => (/* reexport safe */ _smallSetups__WEBPACK_IMPORTED_MODULE_4__.tsconfigSetup),\n/* harmony export */   updateTsconfig: () => (/* reexport safe */ _smallSetups__WEBPACK_IMPORTED_MODULE_4__.updateTsconfig)\n/* harmony export */ });\n/* harmony import */ var _execution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./execution */ \"./utils/execution/index.ts\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ \"./utils/file/index.ts\");\n/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ \"./utils/installation/index.ts\");\n/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logging */ \"./utils/logging/index.ts\");\n/* harmony import */ var _smallSetups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smallSetups */ \"./utils/smallSetups/index.ts\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://pandorium/./utils/index.ts?");

/***/ }),

/***/ "./utils/installation/index.ts":
/*!*************************************!*\
  !*** ./utils/installation/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   installLibrary: () => (/* binding */ installLibrary),\n/* harmony export */   isLibraryInstalled: () => (/* reexport safe */ _isLibraryInstalled__WEBPACK_IMPORTED_MODULE_2__.isLibraryInstalled)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _installLibrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./installLibrary */ \"./utils/installation/installLibrary.ts\");\n/* harmony import */ var _isLibraryInstalled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLibraryInstalled */ \"./utils/installation/isLibraryInstalled.ts\");\n\n\nconst installLibrary = async ({ libraryName }) => await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)({\n    child: _installLibrary__WEBPACK_IMPORTED_MODULE_1__.installLibrary,\n    childLabel: \"Install Library\",\n    args: { libraryName },\n    onlyTryCatch: true,\n});\n\n\n\n//# sourceURL=webpack://pandorium/./utils/installation/index.ts?");

/***/ }),

/***/ "./utils/installation/installLibrary.ts":
/*!**********************************************!*\
  !*** ./utils/installation/installLibrary.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   installLibrary: () => (/* binding */ installLibrary)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./utils/index.ts\");\n\nconst installLibrary = async ({ libraryName, }) => {\n    const packageManager = libraryName === \"yarn\" ? \"npm\" : \"yarn\";\n    const installCommand = `${packageManager} ${packageManager === \"npm\" ? \"install\" : \"add global\"} ${libraryName}`;\n    await (0,___WEBPACK_IMPORTED_MODULE_0__.execAsync)({\n        command: installCommand,\n        options: { stdio: \"inherit\" },\n    });\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/installation/installLibrary.ts?");

/***/ }),

/***/ "./utils/installation/isLibraryInstalled.ts":
/*!**************************************************!*\
  !*** ./utils/installation/isLibraryInstalled.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isLibraryInstalled: () => (/* binding */ isLibraryInstalled)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./utils/index.ts\");\n\nconst isLibraryInstalled = async ({ libraryName, }) => {\n    try {\n        await (0,___WEBPACK_IMPORTED_MODULE_0__.execAsync)({ command: `${libraryName} --version` });\n        return true;\n    }\n    catch (error) {\n        return false;\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/installation/isLibraryInstalled.ts?");

/***/ }),

/***/ "./utils/logging/index.ts":
/*!********************************!*\
  !*** ./utils/logging/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loggerDogger: () => (/* reexport safe */ _loggerDogger__WEBPACK_IMPORTED_MODULE_0__.loggerDogger)\n/* harmony export */ });\n/* harmony import */ var _loggerDogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggerDogger */ \"./utils/logging/loggerDogger.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./utils/logging/index.ts?");

/***/ }),

/***/ "./utils/logging/loggerDogger.ts":
/*!***************************************!*\
  !*** ./utils/logging/loggerDogger.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loggerDogger: () => (/* binding */ loggerDogger)\n/* harmony export */ });\nconst loggerDogger = async ({ child, childLabel, args, onlyTryCatch = false, }) => {\n    !onlyTryCatch && console.log(`\\n\\nStarting ${childLabel}...\\n\\n`);\n    try {\n        const result = await child(args);\n        !onlyTryCatch &&\n            console.log(`\\n\\n${childLabel} finished successfully! :)\\n\\n`);\n        return result;\n    }\n    catch (error) {\n        throw new Error(`\\n\\n${childLabel} failed: ${error.message}\\n\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/logging/loggerDogger.ts?");

/***/ }),

/***/ "./utils/smallSetups/index.ts":
/*!************************************!*\
  !*** ./utils/smallSetups/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTsconfigContent: () => (/* reexport safe */ _tsconfig__WEBPACK_IMPORTED_MODULE_1__.getTsconfigContent),\n/* harmony export */   packageJsonSetup: () => (/* reexport safe */ _packageJson__WEBPACK_IMPORTED_MODULE_0__.packageJsonSetup),\n/* harmony export */   tsconfigSetup: () => (/* reexport safe */ _tsconfig__WEBPACK_IMPORTED_MODULE_1__.tsconfigSetup),\n/* harmony export */   updateTsconfig: () => (/* reexport safe */ _tsconfig__WEBPACK_IMPORTED_MODULE_1__.updateTsconfig)\n/* harmony export */ });\n/* harmony import */ var _packageJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageJson */ \"./utils/smallSetups/packageJson/index.ts\");\n/* harmony import */ var _tsconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tsconfig */ \"./utils/smallSetups/tsconfig/index.ts\");\n\n\n\n\n//# sourceURL=webpack://pandorium/./utils/smallSetups/index.ts?");

/***/ }),

/***/ "./utils/smallSetups/packageJson/index.ts":
/*!************************************************!*\
  !*** ./utils/smallSetups/packageJson/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   packageJsonSetup: () => (/* reexport safe */ _packageJsonSetup__WEBPACK_IMPORTED_MODULE_0__.packageJsonSetup)\n/* harmony export */ });\n/* harmony import */ var _packageJsonSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageJsonSetup */ \"./utils/smallSetups/packageJson/packageJsonSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./utils/smallSetups/packageJson/index.ts?");

/***/ }),

/***/ "./utils/smallSetups/packageJson/packageJsonSetup.ts":
/*!***********************************************************!*\
  !*** ./utils/smallSetups/packageJson/packageJsonSetup.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   packageJsonSetup: () => (/* binding */ packageJsonSetup)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n\n\n\nconst packageJsonSetup = async () => {\n    const pathToPackageJson = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), _config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH);\n    const packageJsonPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(pathToPackageJson, \"package.json\");\n    const packageJsonContent = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(packageJsonPath, \"utf8\");\n    const packageJson = JSON.parse(packageJsonContent);\n    packageJson.license = \"MIT\";\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(packageJsonPath, JSON.stringify(packageJson, null, 2));\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/smallSetups/packageJson/packageJsonSetup.ts?");

/***/ }),

/***/ "./utils/smallSetups/tsconfig/index.ts":
/*!*********************************************!*\
  !*** ./utils/smallSetups/tsconfig/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTsconfigContent: () => (/* reexport safe */ _tsconfigUtils__WEBPACK_IMPORTED_MODULE_1__.getTsconfigContent),\n/* harmony export */   tsconfigSetup: () => (/* reexport safe */ _tsconfigSetup__WEBPACK_IMPORTED_MODULE_0__.tsconfigSetup),\n/* harmony export */   updateTsconfig: () => (/* reexport safe */ _tsconfigUtils__WEBPACK_IMPORTED_MODULE_1__.updateTsconfig)\n/* harmony export */ });\n/* harmony import */ var _tsconfigSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tsconfigSetup */ \"./utils/smallSetups/tsconfig/tsconfigSetup.ts\");\n/* harmony import */ var _tsconfigUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tsconfigUtils */ \"./utils/smallSetups/tsconfig/tsconfigUtils.ts\");\n\n\n\n\n//# sourceURL=webpack://pandorium/./utils/smallSetups/tsconfig/index.ts?");

/***/ }),

/***/ "./utils/smallSetups/tsconfig/tsconfigSetup.ts":
/*!*****************************************************!*\
  !*** ./utils/smallSetups/tsconfig/tsconfigSetup.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tsconfigSetup: () => (/* binding */ tsconfigSetup)\n/* harmony export */ });\n/* harmony import */ var _tsconfigUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tsconfigUtils */ \"./utils/smallSetups/tsconfig/tsconfigUtils.ts\");\n\nconst tsconfigSetup = async () => {\n    const updatedTsconfig = await (0,_tsconfigUtils__WEBPACK_IMPORTED_MODULE_0__.getTsconfigContent)();\n    updatedTsconfig.compilerOptions = updatedTsconfig.compilerOptions || {};\n    (0,_tsconfigUtils__WEBPACK_IMPORTED_MODULE_0__.updateTsconfig)({ updatedTsconfig });\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/smallSetups/tsconfig/tsconfigSetup.ts?");

/***/ }),

/***/ "./utils/smallSetups/tsconfig/tsconfigUtils.ts":
/*!*****************************************************!*\
  !*** ./utils/smallSetups/tsconfig/tsconfigUtils.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTsconfigContent: () => (/* binding */ getTsconfigContent),\n/* harmony export */   updateTsconfig: () => (/* binding */ updateTsconfig)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\n\n\nconst pathToTsconfig = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), _config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH);\nconst tsconfigPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(pathToTsconfig, \"tsconfig.json\");\nconst getTsconfigContent = async () => {\n    if (await (0,_utils__WEBPACK_IMPORTED_MODULE_3__.checkDirectoryExists)({ directoryPath: _config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH })) {\n        const content = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(tsconfigPath, \"utf8\");\n        return JSON.parse(content);\n    }\n};\nconst updateTsconfig = async ({ updatedTsconfig }) => {\n    if (await (0,_utils__WEBPACK_IMPORTED_MODULE_3__.checkDirectoryExists)({ directoryPath: _config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH })) {\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(tsconfigPath, JSON.stringify(updatedTsconfig, null, 2));\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/smallSetups/tsconfig/tsconfigUtils.ts?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("url");

/***/ }),

/***/ "./setups/next/utils/nextPrompts.json":
/*!********************************************!*\
  !*** ./setups/next/utils/nextPrompts.json ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Would you like to use ESLint?\":\"\\\\n\",\"Would you like to use Tailwind CSS?\":\"\\\\n\",\"Would you like to use `src/` directory?\":\"\\\\n\",\"Would you like to use App Router?\":\"\\\\n\",\"Would you like to customize the default import alias (@/*)?\":\"\\\\\\\\x1B[C\\\\n\"}');\n\n//# sourceURL=webpack://pandorium/./setups/next/utils/nextPrompts.json?");

/***/ }),

/***/ "./setups/supabase/utils/supabaseConfig.json":
/*!***************************************************!*\
  !*** ./setups/supabase/utils/supabaseConfig.json ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"url\":\"https://gogwdhvblgxhglkeakjb.supabase.co\",\"anonKey\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvZ3dkaHZibGd4aGdsa2Vha2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2OTEyMzEsImV4cCI6MjAxNjI2NzIzMX0.Kel71iUzcFJPZMSkYh3sskGaNqX8aZ1cMrZmNCMGK4Q\"}');\n\n//# sourceURL=webpack://pandorium/./setups/supabase/utils/supabaseConfig.json?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && queue.d < 1) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = -1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && queue.d < 0 && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./pandorium.ts");
/******/ __webpack_exports__ = await __webpack_exports__;
/******/ 
