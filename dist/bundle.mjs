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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @setups */ \"./setups/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"./utils/index.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ \"./config/index.ts\");\n\n\n\nconst pandorium = async () => {\n    console.log(`\\nsetting up ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME}...\\n`);\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.initialSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.nextSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.muiSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.expressSetup)();\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.supabaseSetup)();\n    console.log(`\\nbuilding ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME}...\\n`);\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n        command: `cd ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH} && yarn build`,\n        options: { stdio: \"inherit\" },\n    });\n    await (0,_setups__WEBPACK_IMPORTED_MODULE_0__.vercelSetup)();\n    console.log(`\\nstarting ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME}...\\n`);\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n        command: `cd ${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH} && ../pandorium/utils/execution/start_project.exp`,\n        options: { stdio: \"inherit\" },\n    });\n    console.log(`\\n${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME} setup, host and launch complete!\\n`);\n};\npandorium().catch((error) => {\n    console.error(`\\n${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_NAME} setup failed: ${error.message}\\n`);\n});\n\n\n//# sourceURL=webpack://pandorium/./pandorium.ts?");

/***/ }),

/***/ "./setups/express/expressSetup.ts":
/*!****************************************!*\
  !*** ./setups/express/expressSetup.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressSetup: () => (/* binding */ expressSetup)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\n\nconst expressSetup = async () => {\n    console.log(\"\\nsetting up Express.js...\\n\");\n    try {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.execAsync)({\n            command: `cd ${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH} && yarn add express @types/express `,\n            options: {\n                stdio: \"inherit\",\n            },\n        });\n        const serverContent = `import express from 'express';\n\nconst app = express();\nconst port = 3000;\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(port, () => {\n  console.log(\\`Server running on http://localhost:\\${port}\\`);\n});\n`;\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/server.ts`, serverContent);\n        console.log(\"\\nExpress.js was setup successfully!\\n\");\n    }\n    catch (error) {\n        throw new Error(`\\nExpress setup failes: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/express/expressSetup.ts?");

/***/ }),

/***/ "./setups/express/index.ts":
/*!*********************************!*\
  !*** ./setups/express/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressSetup: () => (/* reexport safe */ _expressSetup__WEBPACK_IMPORTED_MODULE_0__.expressSetup)\n/* harmony export */ });\n/* harmony import */ var _expressSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressSetup */ \"./setups/express/expressSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./setups/express/index.ts?");

/***/ }),

/***/ "./setups/index.ts":
/*!*************************!*\
  !*** ./setups/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   expressSetup: () => (/* reexport safe */ _express__WEBPACK_IMPORTED_MODULE_0__.expressSetup),\n/* harmony export */   initialSetup: () => (/* reexport safe */ _initialSetup__WEBPACK_IMPORTED_MODULE_1__.initialSetup),\n/* harmony export */   muiSetup: () => (/* reexport safe */ _mui__WEBPACK_IMPORTED_MODULE_2__.muiSetup),\n/* harmony export */   nextSetup: () => (/* reexport safe */ _next__WEBPACK_IMPORTED_MODULE_3__.nextSetup),\n/* harmony export */   supabaseSetup: () => (/* reexport safe */ _supabase__WEBPACK_IMPORTED_MODULE_4__.supabaseSetup),\n/* harmony export */   vercelSetup: () => (/* reexport safe */ _vercel__WEBPACK_IMPORTED_MODULE_5__.vercelSetup)\n/* harmony export */ });\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ \"./setups/express/index.ts\");\n/* harmony import */ var _initialSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialSetup */ \"./setups/initialSetup/index.ts\");\n/* harmony import */ var _mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mui */ \"./setups/mui/index.ts\");\n/* harmony import */ var _next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./next */ \"./setups/next/index.ts\");\n/* harmony import */ var _supabase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supabase */ \"./setups/supabase/index.ts\");\n/* harmony import */ var _vercel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vercel */ \"./setups/vercel/index.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://pandorium/./setups/index.ts?");

/***/ }),

/***/ "./setups/initialSetup/index.ts":
/*!**************************************!*\
  !*** ./setups/initialSetup/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialSetup: () => (/* reexport safe */ _initialSetup__WEBPACK_IMPORTED_MODULE_0__.initialSetup)\n/* harmony export */ });\n/* harmony import */ var _initialSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialSetup */ \"./setups/initialSetup/initialSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./setups/initialSetup/index.ts?");

/***/ }),

/***/ "./setups/initialSetup/initialSetup.ts":
/*!*********************************************!*\
  !*** ./setups/initialSetup/initialSetup.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialSetup: () => (/* binding */ initialSetup)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst initialSetup = async () => {\n    console.log(\"\\nsetting up initial setup...\\n\");\n    try {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDirectory)({ directoryPath: _config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH });\n        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isLibraryInstalled)({ libraryName: \"yarn\" })) {\n            await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.installLibrary)({ libraryName: \"yarn\" });\n        }\n        console.log(\"\\ninitial setup was setup successfully!\\n\");\n    }\n    catch (error) {\n        throw new Error(`\\ninitial setup failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/initialSetup/initialSetup.ts?");

/***/ }),

/***/ "./setups/mui/index.ts":
/*!*****************************!*\
  !*** ./setups/mui/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiSetup: () => (/* reexport safe */ _muiSetup__WEBPACK_IMPORTED_MODULE_0__.muiSetup)\n/* harmony export */ });\n/* harmony import */ var _muiSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muiSetup */ \"./setups/mui/muiSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/index.ts?");

/***/ }),

/***/ "./setups/mui/muiSetup.ts":
/*!********************************!*\
  !*** ./setups/mui/muiSetup.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiSetup: () => (/* binding */ muiSetup)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./setups/mui/utils/index.ts\");\n\n\n\nconst muiSetup = async () => {\n    try {\n        console.log(\"\\nsetting up MUI...\\n\");\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n            command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH} && yarn add @mui/material @emotion/react @emotion/styled`,\n            options: { stdio: \"inherit\" },\n        });\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.muiFoldersSetup)();\n        console.log(\"\\nMUI was setup successfully!\\n\");\n    }\n    catch (error) {\n        throw new Error(`\\nMUI setup failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/muiSetup.ts?");

/***/ }),

/***/ "./setups/mui/utils/index.ts":
/*!***********************************!*\
  !*** ./setups/mui/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiFoldersSetup: () => (/* reexport safe */ _muiFoldersSetup__WEBPACK_IMPORTED_MODULE_0__.muiFoldersSetup)\n/* harmony export */ });\n/* harmony import */ var _muiFoldersSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muiFoldersSetup */ \"./setups/mui/utils/muiFoldersSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/utils/index.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   muiFoldersSetup: () => (/* binding */ muiFoldersSetup)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _muiFolders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./muiFolders */ \"./setups/mui/utils/muiFolders.ts\");\n\n\n\n\nconst muiFoldersSetup = async () => {\n    const tsConfigPath = `${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/tsconfig.json`;\n    try {\n        const tsConfig = JSON.parse(await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(tsConfigPath, \"utf8\"));\n        tsConfig.compilerOptions = tsConfig.compilerOptions || {};\n        tsConfig.compilerOptions.paths = { ..._muiFolders__WEBPACK_IMPORTED_MODULE_3__.muiFolders };\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(tsConfigPath, JSON.stringify(tsConfig, null, 2));\n        await Promise.all(Object.values(_muiFolders__WEBPACK_IMPORTED_MODULE_3__.muiFolders).flatMap((paths) => paths.map((path) => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDirectory)({\n            directoryPath: `${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/${path.replace(\"/*\", \"\")}`,\n        }))));\n    }\n    catch (error) {\n        throw new Error(`Failed to update tsconfig.json and create directories: ${error.message}`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/mui/utils/muiFoldersSetup.ts?");

/***/ }),

/***/ "./setups/next/index.ts":
/*!******************************!*\
  !*** ./setups/next/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextSetup: () => (/* reexport safe */ _nextSetup__WEBPACK_IMPORTED_MODULE_0__.nextSetup)\n/* harmony export */ });\n/* harmony import */ var _nextSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextSetup */ \"./setups/next/nextSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./setups/next/index.ts?");

/***/ }),

/***/ "./setups/next/nextSetup.ts":
/*!**********************************!*\
  !*** ./setups/next/nextSetup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextSetup: () => (/* binding */ nextSetup)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./setups/next/utils/index.ts\");\n\n\n\n\nconst nextSetup = async () => {\n    console.log(\"\\nsetting up Next.js...\\n\");\n    try {\n        return new Promise((resolve, reject) => {\n            const child = (0,child_process__WEBPACK_IMPORTED_MODULE_0__.spawn)(\"yarn\", [\"create\", \"next-app\", \"--typescript\", _config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH], {\n                stdio: [\"pipe\", \"pipe\", \"pipe\"],\n            });\n            child.stdout.on(\"data\", (data) => {\n                const output = data.toString();\n                Object.entries(_utils__WEBPACK_IMPORTED_MODULE_3__.nextPrompts).forEach(([prompt, response]) => {\n                    if (output.includes(prompt)) {\n                        child.stdin.write(response);\n                    }\n                });\n            });\n            child.stderr.on(\"data\", (data) => console.error(data.toString()));\n            child.on(\"close\", async (code) => {\n                if (code !== 0) {\n                    return reject(new Error(`setupNext exited with code ${code}`));\n                }\n                try {\n                    const packageJsonPath = `${_config__WEBPACK_IMPORTED_MODULE_2__.PROJECT_PATH}/package.json`;\n                    const packageJson = JSON.parse(await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.readFile)(packageJsonPath, \"utf8\"));\n                    packageJson.license = \"MIT\";\n                    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(packageJsonPath, JSON.stringify(packageJson, null, 2));\n                    resolve();\n                }\n                catch (error) {\n                    reject(new Error(`Failed to add MIT license to package.json: ${error.message}`));\n                }\n            });\n            console.log(\"\\nNext.js was setup successfully!\\n\");\n        });\n    }\n    catch (error) {\n        throw new Error(`\\nNext.js setup failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/next/nextSetup.ts?");

/***/ }),

/***/ "./setups/next/utils/index.ts":
/*!************************************!*\
  !*** ./setups/next/utils/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextPrompts: () => (/* reexport default export from named module */ _nextPrompts_json__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _nextPrompts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextPrompts.json */ \"./setups/next/utils/nextPrompts.json\");\n\n\n\n\n//# sourceURL=webpack://pandorium/./setups/next/utils/index.ts?");

/***/ }),

/***/ "./setups/supabase/index.ts":
/*!**********************************!*\
  !*** ./setups/supabase/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseSetup: () => (/* reexport safe */ _supabaseSetup__WEBPACK_IMPORTED_MODULE_0__.supabaseSetup)\n/* harmony export */ });\n/* harmony import */ var _supabaseSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supabaseSetup */ \"./setups/supabase/supabaseSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./setups/supabase/index.ts?");

/***/ }),

/***/ "./setups/supabase/supabaseSetup.ts":
/*!******************************************!*\
  !*** ./setups/supabase/supabaseSetup.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseSetup: () => (/* binding */ supabaseSetup)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./setups/supabase/utils/index.ts\");\n\n\n\n\nconst supabaseSetup = async () => {\n    console.log(\"\\nsetting up Supabase...\\n\");\n    try {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.execAsync)({\n            command: `cd ${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH} && yarn add @supabase/supabase-js dotenv`,\n            options: {\n                stdio: \"inherit\",\n            },\n        });\n        const envContent = `SUPABASE_URL=${_utils__WEBPACK_IMPORTED_MODULE_3__.supabaseConfig.url}\nSUPABASE_ANON_KEY=${_utils__WEBPACK_IMPORTED_MODULE_3__.supabaseConfig.anonKey}\n`;\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/.env`, envContent);\n        const configContent = `import { createClient } from '@supabase/supabase-js';\nimport dotenv from 'dotenv';\n\ndotenv.config();\n\nconst supabaseUrl = process.env.SUPABASE_URL ?? \"\";\nconst supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? \"\";\n\nexport const supabase = createClient(supabaseUrl, supabaseAnonKey);\n`;\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.writeFile)(`${_config__WEBPACK_IMPORTED_MODULE_1__.PROJECT_PATH}/supabaseConfig.ts`, configContent);\n        console.log(\"\\nSupabase was setup successfully!\\n\");\n    }\n    catch (error) {\n        throw new Error(`\\nSupabase setup failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/supabase/supabaseSetup.ts?");

/***/ }),

/***/ "./setups/supabase/utils/index.ts":
/*!****************************************!*\
  !*** ./setups/supabase/utils/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseConfig: () => (/* reexport default export from named module */ _supabaseConfig_json__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _supabaseConfig_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supabaseConfig.json */ \"./setups/supabase/utils/supabaseConfig.json\");\n\n\n\n\n//# sourceURL=webpack://pandorium/./setups/supabase/utils/index.ts?");

/***/ }),

/***/ "./setups/vercel/index.ts":
/*!********************************!*\
  !*** ./setups/vercel/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelSetup: () => (/* reexport safe */ _vercelSetup__WEBPACK_IMPORTED_MODULE_0__.vercelSetup)\n/* harmony export */ });\n/* harmony import */ var _vercelSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vercelSetup */ \"./setups/vercel/vercelSetup.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/index.ts?");

/***/ }),

/***/ "./setups/vercel/utils/index.ts":
/*!**************************************!*\
  !*** ./setups/vercel/utils/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   installVercelCli: () => (/* reexport safe */ _installVercelCli__WEBPACK_IMPORTED_MODULE_0__.installVercelCli),\n/* harmony export */   vercelDeploy: () => (/* reexport safe */ _vercelDeploy__WEBPACK_IMPORTED_MODULE_1__.vercelDeploy),\n/* harmony export */   vercelLogin: () => (/* reexport safe */ _vercelLogin__WEBPACK_IMPORTED_MODULE_2__.vercelLogin)\n/* harmony export */ });\n/* harmony import */ var _installVercelCli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./installVercelCli */ \"./setups/vercel/utils/installVercelCli.ts\");\n/* harmony import */ var _vercelDeploy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vercelDeploy */ \"./setups/vercel/utils/vercelDeploy.ts\");\n/* harmony import */ var _vercelLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vercelLogin */ \"./setups/vercel/utils/vercelLogin.ts\");\n\n\n\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/index.ts?");

/***/ }),

/***/ "./setups/vercel/utils/installVercelCli.ts":
/*!*************************************************!*\
  !*** ./setups/vercel/utils/installVercelCli.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   installVercelCli: () => (/* binding */ installVercelCli)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\nconst installVercelCli = async () => {\n    console.log(\"\\nInstalling Vercel CLI...\\n\");\n    await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.execAsync)({\n        command: \"yarn global add vercel\",\n        options: { stdio: \"inherit\" },\n    });\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/installVercelCli.ts?");

/***/ }),

/***/ "./setups/vercel/utils/vercelDeploy.ts":
/*!*********************************************!*\
  !*** ./setups/vercel/utils/vercelDeploy.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelDeploy: () => (/* binding */ vercelDeploy)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst vercelDeploy = async () => {\n    console.log(\"\\ndeploying to Vercel...\\n\");\n    try {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n            command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH} && ../pandorium/setups/vercel/utils/vercel_deploy.exp`,\n            options: { stdio: \"inherit\" },\n        });\n        console.log(\"\\ndeploying to Vercel completed successfully!\\n\");\n    }\n    catch (error) {\n        throw new Error(`\\ndeploying to Vercel failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/vercelDeploy.ts?");

/***/ }),

/***/ "./setups/vercel/utils/vercelLogin.ts":
/*!********************************************!*\
  !*** ./setups/vercel/utils/vercelLogin.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelLogin: () => (/* binding */ vercelLogin)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config */ \"./config/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n\n\nconst vercelLogin = async () => {\n    console.log(\"\\nPlease log in to your Vercel account...\\n\");\n    try {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n            command: `cd ${_config__WEBPACK_IMPORTED_MODULE_0__.PROJECT_PATH}`,\n            options: { stdio: \"inherit\" },\n        });\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.execAsync)({\n            command: `./setups/vercel/utils/vercel_login.exp`,\n            options: { stdio: \"inherit\" },\n        });\n        console.log(\"\\nLogin to Vercel completed successfully!\\n\");\n    }\n    catch (error) {\n        throw new Error(`\\nLogin to Vercel failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/utils/vercelLogin.ts?");

/***/ }),

/***/ "./setups/vercel/vercelSetup.ts":
/*!**************************************!*\
  !*** ./setups/vercel/vercelSetup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vercelSetup: () => (/* binding */ vercelSetup)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ \"./utils/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./setups/vercel/utils/index.ts\");\n\n\nconst vercelSetup = async () => {\n    console.log(\"\\nsetting up Vercel...\\n\");\n    try {\n        const isVercelCliInstalled = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isLibraryInstalled)({\n            libraryName: \"vercel\",\n        });\n        if (!isVercelCliInstalled) {\n            await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.installVercelCli)();\n        }\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.vercelLogin)();\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.vercelDeploy)();\n        console.log(\"\\nVercel was setup successfully!\\n\");\n    }\n    catch (error) {\n        throw new Error(`\\nVercel setup failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./setups/vercel/vercelSetup.ts?");

/***/ }),

/***/ "./utils/execution/execAsync.ts":
/*!**************************************!*\
  !*** ./utils/execution/execAsync.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   execAsync: () => (/* binding */ execAsync)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n\nconst execAsync = ({ command, options, }) => {\n    try {\n        const executionPromise = new Promise((resolve, reject) => {\n            const childProcess = (0,child_process__WEBPACK_IMPORTED_MODULE_0__.exec)(command, options, (error, stdout, stderr) => {\n                if (error) {\n                    reject(error);\n                }\n                else {\n                    resolve({ stdout, stderr });\n                }\n            });\n            if (options.stdio === \"inherit\") {\n                if (childProcess.stdout)\n                    childProcess.stdout.pipe(process.stdout);\n                if (childProcess.stderr)\n                    childProcess.stderr.pipe(process.stderr);\n            }\n        });\n        return executionPromise;\n    }\n    catch (error) {\n        throw new Error(`command execution failed: ${error.message}`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/execution/execAsync.ts?");

/***/ }),

/***/ "./utils/execution/index.ts":
/*!**********************************!*\
  !*** ./utils/execution/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   execAsync: () => (/* reexport safe */ _execAsync__WEBPACK_IMPORTED_MODULE_0__.execAsync)\n/* harmony export */ });\n/* harmony import */ var _execAsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./execAsync */ \"./utils/execution/execAsync.ts\");\n\n\n\n//# sourceURL=webpack://pandorium/./utils/execution/index.ts?");

/***/ }),

/***/ "./utils/file/createDirectory.ts":
/*!***************************************!*\
  !*** ./utils/file/createDirectory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDirectory: () => (/* binding */ createDirectory)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createDirectory = async ({ directoryPath, }) => {\n    try {\n        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.mkdir(directoryPath, { recursive: true });\n    }\n    catch (error) {\n        throw new Error(`Error creating directory at ${directoryPath}: ${error.message}`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/file/createDirectory.ts?");

/***/ }),

/***/ "./utils/file/index.ts":
/*!*****************************!*\
  !*** ./utils/file/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDirectory: () => (/* reexport safe */ _createDirectory__WEBPACK_IMPORTED_MODULE_0__.createDirectory),\n/* harmony export */   readJsonFile: () => (/* reexport safe */ _readJsonFile__WEBPACK_IMPORTED_MODULE_1__.readJsonFile),\n/* harmony export */   readValidatedJsonFile: () => (/* reexport safe */ _readValidatedJsonFile__WEBPACK_IMPORTED_MODULE_2__.readValidatedJsonFile),\n/* harmony export */   validateJson: () => (/* reexport safe */ _validateJson__WEBPACK_IMPORTED_MODULE_3__.validateJson)\n/* harmony export */ });\n/* harmony import */ var _createDirectory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDirectory */ \"./utils/file/createDirectory.ts\");\n/* harmony import */ var _readJsonFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readJsonFile */ \"./utils/file/readJsonFile.ts\");\n/* harmony import */ var _readValidatedJsonFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readValidatedJsonFile */ \"./utils/file/readValidatedJsonFile.ts\");\n/* harmony import */ var _validateJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateJson */ \"./utils/file/validateJson.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://pandorium/./utils/file/index.ts?");

/***/ }),

/***/ "./utils/file/readJsonFile.ts":
/*!************************************!*\
  !*** ./utils/file/readJsonFile.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   readJsonFile: () => (/* binding */ readJsonFile)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst readJsonFile = async ({ jsonFilePath, }) => {\n    try {\n        const jsonFile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(jsonFilePath, \"utf8\");\n        const jsonContent = JSON.parse(jsonFile);\n        return jsonContent;\n    }\n    catch (error) {\n        throw new Error(`Failed to read json file at ${jsonFilePath}: ${error.message}`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/file/readJsonFile.ts?");

/***/ }),

/***/ "./utils/file/readValidatedJsonFile.ts":
/*!*********************************************!*\
  !*** ./utils/file/readValidatedJsonFile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   readValidatedJsonFile: () => (/* binding */ readValidatedJsonFile)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./utils/index.ts\");\n\nconst readValidatedJsonFile = async ({ jsonFilePath, }) => {\n    try {\n        const jsonContent = await (0,___WEBPACK_IMPORTED_MODULE_0__.readJsonFile)({ jsonFilePath });\n        await (0,___WEBPACK_IMPORTED_MODULE_0__.validateJson)({ jsonContent });\n        return jsonContent;\n    }\n    catch (error) {\n        throw new Error(`failed to read validated json file at ${jsonFilePath}: ${error.message}`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/file/readValidatedJsonFile.ts?");

/***/ }),

/***/ "./utils/file/validateJson.ts":
/*!************************************!*\
  !*** ./utils/file/validateJson.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateJson: () => (/* binding */ validateJson)\n/* harmony export */ });\nconst validateJson = async ({ jsonContent, }) => {\n    const requiredFields = Object.keys(jsonContent);\n    const missingFields = requiredFields.filter((field) => !(field in jsonContent));\n    if (missingFields.length > 0) {\n        throw new Error(`Missing required config fields: ${missingFields.join(\", \")}`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/file/validateJson.ts?");

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDirectory: () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_1__.createDirectory),\n/* harmony export */   execAsync: () => (/* reexport safe */ _execution__WEBPACK_IMPORTED_MODULE_0__.execAsync),\n/* harmony export */   installLibrary: () => (/* reexport safe */ _installation__WEBPACK_IMPORTED_MODULE_2__.installLibrary),\n/* harmony export */   isLibraryInstalled: () => (/* reexport safe */ _installation__WEBPACK_IMPORTED_MODULE_2__.isLibraryInstalled),\n/* harmony export */   readJsonFile: () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_1__.readJsonFile),\n/* harmony export */   readValidatedJsonFile: () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_1__.readValidatedJsonFile),\n/* harmony export */   validateJson: () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_1__.validateJson)\n/* harmony export */ });\n/* harmony import */ var _execution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./execution */ \"./utils/execution/index.ts\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ \"./utils/file/index.ts\");\n/* harmony import */ var _installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation */ \"./utils/installation/index.ts\");\n\n\n\n\n\n//# sourceURL=webpack://pandorium/./utils/index.ts?");

/***/ }),

/***/ "./utils/installation/index.ts":
/*!*************************************!*\
  !*** ./utils/installation/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   installLibrary: () => (/* reexport safe */ _installLibrary__WEBPACK_IMPORTED_MODULE_0__.installLibrary),\n/* harmony export */   isLibraryInstalled: () => (/* reexport safe */ _isLibraryInstalled__WEBPACK_IMPORTED_MODULE_1__.isLibraryInstalled)\n/* harmony export */ });\n/* harmony import */ var _installLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./installLibrary */ \"./utils/installation/installLibrary.ts\");\n/* harmony import */ var _isLibraryInstalled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLibraryInstalled */ \"./utils/installation/isLibraryInstalled.ts\");\n\n\n\n\n//# sourceURL=webpack://pandorium/./utils/installation/index.ts?");

/***/ }),

/***/ "./utils/installation/installLibrary.ts":
/*!**********************************************!*\
  !*** ./utils/installation/installLibrary.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   installLibrary: () => (/* binding */ installLibrary)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./utils/index.ts\");\n\nconst installLibrary = async ({ libraryName, }) => {\n    console.log(`\\nInstalling ${libraryName}...\\n`);\n    const packageManager = libraryName === \"yarn\" ? \"npm\" : \"yarn\";\n    try {\n        const installCommand = `${packageManager} ${packageManager === \"npm\" ? \"install -g\" : \"add global\"} ${libraryName}`;\n        await (0,___WEBPACK_IMPORTED_MODULE_0__.execAsync)({\n            command: installCommand,\n            options: { stdio: \"inherit\" },\n        });\n    }\n    catch (error) {\n        throw new Error(`\\n${libraryName} installation failed: ${error.message}\\n`);\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/installation/installLibrary.ts?");

/***/ }),

/***/ "./utils/installation/isLibraryInstalled.ts":
/*!**************************************************!*\
  !*** ./utils/installation/isLibraryInstalled.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isLibraryInstalled: () => (/* binding */ isLibraryInstalled)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./utils/index.ts\");\n\nconst isLibraryInstalled = async ({ libraryName, }) => {\n    try {\n        await (0,___WEBPACK_IMPORTED_MODULE_0__.execAsync)({ command: `${libraryName} --version` });\n        return true;\n    }\n    catch (error) {\n        return false;\n    }\n};\n\n\n//# sourceURL=webpack://pandorium/./utils/installation/isLibraryInstalled.ts?");

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
/******/ 
