"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PingButton.tsx":
/*!***********************************!*\
  !*** ./components/PingButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PingButton\": function() { return /* binding */ PingButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar PROGRAM_ID = \"ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa\";\nvar DATA_ACCOUNT_PUBKEY = \"Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod\";\nvar PingButton = function() {\n    _s();\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)().connection;\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)(), publicKey = ref.publicKey, sendTransaction = ref.sendTransaction;\n    var onClick = function() {\n        if (!connection || !publicKey) {\n            return;\n        }\n        var programId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(PROGRAM_ID);\n        var programDataAccount = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(DATA_ACCOUNT_PUBKEY);\n        var transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction();\n        var instruction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.TransactionInstruction({\n            keys: [\n                {\n                    pubkey: programDataAccount,\n                    isSigner: false,\n                    isWritable: true\n                }, \n            ],\n            programId: programId\n        });\n        transaction.add(instruction);\n        sendTransaction(transaction, connection).then(function(sig) {\n            console.log(sig);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" onClick=\",\n            onClick,\n            \">\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/main.png\",\n                height: 600,\n                width: 700\n            }, void 0, false, {\n                fileName: \"/home/bhawna/Desktop/SolAiMint/components/PingButton.tsx\",\n                lineNumber: 39,\n                columnNumber: 8\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bhawna/Desktop/SolAiMint/components/PingButton.tsx\",\n        lineNumber: 38,\n        columnNumber: 3\n    }, _this);\n};\n_s(PingButton, \"nuT7ctT3oQyaLcmcqayfsnFPiOI=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet\n    ];\n});\n_c = PingButton;\nvar _c;\n$RefreshReg$(_c, \"PingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BpbmdCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7QUFDaEM7O0FBSXZDLEdBQUssQ0FBQ0csVUFBVSxHQUFJLENBQTRDO0FBQ2hFLEdBQUssQ0FBQ0MsbUJBQW1CLEdBQUksQ0FBNEM7QUFFbEUsR0FBSyxDQUFDQyxVQUFVLEdBQU8sUUFDOUIsR0FEb0MsQ0FBQzs7SUFDcEMsR0FBSyxDQUFHQyxVQUFVLEdBQUtOLDJFQUFhLEdBQTVCTSxVQUFVO0lBQ2xCLEdBQUssQ0FBa0NMLEdBQVcsR0FBWEEsdUVBQVMsSUFBeENNLFNBQVMsR0FBc0JOLEdBQVcsQ0FBMUNNLFNBQVMsRUFBRUMsZUFBZSxHQUFLUCxHQUFXLENBQS9CTyxlQUFlO0lBRWxDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7UUFDdEIsRUFBRSxHQUFHSCxVQUFVLEtBQUtDLFNBQVMsRUFBRSxDQUFDO1lBQUMsTUFBTTtRQUFDLENBQUM7UUFFekMsR0FBSyxDQUFDRyxTQUFTLEdBQUcsR0FBRyxDQUFDUixzREFBYyxDQUFDQyxVQUFVO1FBQy9DLEdBQUssQ0FBQ1Msa0JBQWtCLEdBQUcsR0FBRyxDQUFDVixzREFBYyxDQUFDRSxtQkFBbUI7UUFDakUsR0FBSyxDQUFDUyxXQUFXLEdBQUcsR0FBRyxDQUFDWCx3REFBZ0I7UUFFeEMsR0FBSyxDQUFDYSxXQUFXLEdBQUcsR0FBRyxDQUFDYixtRUFBMkIsQ0FBQyxDQUFDO1lBQ3BEZSxJQUFJLEVBQUUsQ0FBQztnQkFDTixDQUFDO29CQUNBQyxNQUFNLEVBQUVOLGtCQUFrQjtvQkFDMUJPLFFBQVEsRUFBRSxLQUFLO29CQUNmQyxVQUFVLEVBQUUsSUFBSTtnQkFDakIsQ0FBQztZQUNGLENBQUM7WUFDRFYsU0FBUyxFQUFUQSxTQUFTO1FBQ1YsQ0FBQztRQUVERyxXQUFXLENBQUNRLEdBQUcsQ0FBQ04sV0FBVztRQUMzQlAsZUFBZSxDQUFDSyxXQUFXLEVBQUVQLFVBQVUsRUFBRWdCLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQztZQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7UUFDaEIsQ0FBQztJQUNGLENBQUM7SUFFRCxNQUFNLDZFQUNKRyxDQUFHOztZQUFDLENBQVM7WUFBQ2pCLE9BQU87WUFBQyxDQUNsQjt3RkFBQ2tCLENBQUc7Z0JBQUNDLEdBQUcsRUFBQyxDQUFXO2dCQUFDQyxNQUFNLEVBQUUsR0FBRztnQkFBRUMsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7OztBQUduRCxDQUFDO0dBakNZekIsVUFBVTs7UUFDQ0wsdUVBQWE7UUFDR0MsbUVBQVM7OztLQUZwQ0ksVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BpbmdCdXR0b24udHN4PzU5YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgKiBhcyB3ZWIzIGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9QaW5nQnV0dG9uLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFBST0dSQU1fSUQgPSBgQ2hUMUIzOVdLTFM4cVVya0x2RkRYTWhFSjRGMVhaendVTkhVdDRBVTlhVmFgXG5jb25zdCBEQVRBX0FDQ09VTlRfUFVCS0VZID0gYEFoOUs3ZFE4RUhhWnFjQXNnQlc4dzM3eU4yZUF5M2tvRm1VbjR4M0NKdG9kYFxuXG5leHBvcnQgY29uc3QgUGluZ0J1dHRvbjogRkMgPSAoKSA9PiB7XG5cdGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuXHRjb25zdCB7IHB1YmxpY0tleSwgc2VuZFRyYW5zYWN0aW9uIH0gPSB1c2VXYWxsZXQoKTtcblxuXHRjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuXHRcdGlmICghY29ubmVjdGlvbiB8fCAhcHVibGljS2V5KSB7IHJldHVybiB9XG5cblx0XHRjb25zdCBwcm9ncmFtSWQgPSBuZXcgd2ViMy5QdWJsaWNLZXkoUFJPR1JBTV9JRClcblx0XHRjb25zdCBwcm9ncmFtRGF0YUFjY291bnQgPSBuZXcgd2ViMy5QdWJsaWNLZXkoREFUQV9BQ0NPVU5UX1BVQktFWSlcblx0XHRjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyB3ZWIzLlRyYW5zYWN0aW9uKClcblxuXHRcdGNvbnN0IGluc3RydWN0aW9uID0gbmV3IHdlYjMuVHJhbnNhY3Rpb25JbnN0cnVjdGlvbih7XG5cdFx0XHRrZXlzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwdWJrZXk6IHByb2dyYW1EYXRhQWNjb3VudCxcblx0XHRcdFx0XHRpc1NpZ25lcjogZmFsc2UsXG5cdFx0XHRcdFx0aXNXcml0YWJsZTogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdHByb2dyYW1JZFxuXHRcdH0pO1xuXG5cdFx0dHJhbnNhY3Rpb24uYWRkKGluc3RydWN0aW9uKVxuXHRcdHNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgY29ubmVjdGlvbikudGhlbihzaWcgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coc2lnKVxuXHRcdH0pXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+IG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdCAgICAgPGltZyBzcmM9XCIvbWFpbi5wbmdcIiBoZWlnaHQ9ezYwMH0gd2lkdGg9ezcwMH0gLz5cblx0XHQ8L2Rpdj5cblx0KVxufSJdLCJuYW1lcyI6WyJ1c2VDb25uZWN0aW9uIiwidXNlV2FsbGV0Iiwid2ViMyIsIlBST0dSQU1fSUQiLCJEQVRBX0FDQ09VTlRfUFVCS0VZIiwiUGluZ0J1dHRvbiIsImNvbm5lY3Rpb24iLCJwdWJsaWNLZXkiLCJzZW5kVHJhbnNhY3Rpb24iLCJvbkNsaWNrIiwicHJvZ3JhbUlkIiwiUHVibGljS2V5IiwicHJvZ3JhbURhdGFBY2NvdW50IiwidHJhbnNhY3Rpb24iLCJUcmFuc2FjdGlvbiIsImluc3RydWN0aW9uIiwiVHJhbnNhY3Rpb25JbnN0cnVjdGlvbiIsImtleXMiLCJwdWJrZXkiLCJpc1NpZ25lciIsImlzV3JpdGFibGUiLCJhZGQiLCJ0aGVuIiwic2lnIiwiY29uc29sZSIsImxvZyIsImRpdiIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PingButton.tsx\n");

/***/ })

});