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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PingButton\": function() { return /* binding */ PingButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/PingButton.module.css */ \"./styles/PingButton.module.css\");\n/* harmony import */ var _styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar PROGRAM_ID = \"ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa\";\nvar DATA_ACCOUNT_PUBKEY = \"Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod\";\nvar PingButton = function() {\n    _s();\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)().connection;\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)(), publicKey = ref.publicKey, sendTransaction = ref.sendTransaction;\n    var onClick = function() {\n        if (!connection || !publicKey) {\n            return;\n        }\n        var programId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(PROGRAM_ID);\n        var programDataAccount = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(DATA_ACCOUNT_PUBKEY);\n        var transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction();\n        var instruction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.TransactionInstruction({\n            keys: [\n                {\n                    pubkey: programDataAccount,\n                    isSigner: false,\n                    isWritable: true\n                }, \n            ],\n            programId: programId\n        });\n        transaction.add(instruction);\n        sendTransaction(transaction, connection).then(function(sig) {\n            console.log(sig);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonContainer),\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/main.png\",\n            height: 100,\n            width: 200\n        }, void 0, false, {\n            fileName: \"/home/bhawna/Desktop/SolAiMint/components/PingButton.tsx\",\n            lineNumber: 39,\n            columnNumber: 8\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/bhawna/Desktop/SolAiMint/components/PingButton.tsx\",\n        lineNumber: 38,\n        columnNumber: 3\n    }, _this);\n};\n_s(PingButton, \"nuT7ctT3oQyaLcmcqayfsnFPiOI=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet\n    ];\n});\n_c = PingButton;\nvar _c;\n$RefreshReg$(_c, \"PingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BpbmdCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNoQztBQUVhOztBQUVwRCxHQUFLLENBQUNJLFVBQVUsR0FBSSxDQUE0QztBQUNoRSxHQUFLLENBQUNDLG1CQUFtQixHQUFJLENBQTRDO0FBRWxFLEdBQUssQ0FBQ0MsVUFBVSxHQUFPLFFBQzlCLEdBRG9DLENBQUM7O0lBQ3BDLEdBQUssQ0FBR0MsVUFBVSxHQUFLUCwyRUFBYSxHQUE1Qk8sVUFBVTtJQUNsQixHQUFLLENBQWtDTixHQUFXLEdBQVhBLHVFQUFTLElBQXhDTyxTQUFTLEdBQXNCUCxHQUFXLENBQTFDTyxTQUFTLEVBQUVDLGVBQWUsR0FBS1IsR0FBVyxDQUEvQlEsZUFBZTtJQUVsQyxHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUNqQixHQUR1QixDQUFDO1FBQ3RCLEVBQUUsR0FBR0gsVUFBVSxLQUFLQyxTQUFTLEVBQUUsQ0FBQztZQUFDLE1BQU07UUFBQyxDQUFDO1FBRXpDLEdBQUssQ0FBQ0csU0FBUyxHQUFHLEdBQUcsQ0FBQ1Qsc0RBQWMsQ0FBQ0UsVUFBVTtRQUMvQyxHQUFLLENBQUNTLGtCQUFrQixHQUFHLEdBQUcsQ0FBQ1gsc0RBQWMsQ0FBQ0csbUJBQW1CO1FBQ2pFLEdBQUssQ0FBQ1MsV0FBVyxHQUFHLEdBQUcsQ0FBQ1osd0RBQWdCO1FBRXhDLEdBQUssQ0FBQ2MsV0FBVyxHQUFHLEdBQUcsQ0FBQ2QsbUVBQTJCLENBQUMsQ0FBQztZQUNwRGdCLElBQUksRUFBRSxDQUFDO2dCQUNOLENBQUM7b0JBQ0FDLE1BQU0sRUFBRU4sa0JBQWtCO29CQUMxQk8sUUFBUSxFQUFFLEtBQUs7b0JBQ2ZDLFVBQVUsRUFBRSxJQUFJO2dCQUNqQixDQUFDO1lBQ0YsQ0FBQztZQUNEVixTQUFTLEVBQVRBLFNBQVM7UUFDVixDQUFDO1FBRURHLFdBQVcsQ0FBQ1EsR0FBRyxDQUFDTixXQUFXO1FBQzNCUCxlQUFlLENBQUNLLFdBQVcsRUFBRVAsVUFBVSxFQUFFZ0IsSUFBSSxDQUFDQyxRQUFRLENBQVJBLEdBQUcsRUFBSSxDQUFDO1lBQ3JEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNoQixDQUFDO0lBQ0YsQ0FBQztJQUVELE1BQU0sNkVBQ0pHLENBQUc7UUFBQ0MsU0FBUyxFQUFFekIsc0ZBQXNCO1FBQUVPLE9BQU8sRUFBRUEsT0FBTzs4RkFDbERvQixDQUFHO1lBQUNDLEdBQUcsRUFBQyxDQUFXO1lBQUNDLE1BQU0sRUFBRSxHQUFHO1lBQUVDLEtBQUssRUFBRSxHQUFHOzs7Ozs7Ozs7OztBQUduRCxDQUFDO0dBakNZM0IsVUFBVTs7UUFDQ04sdUVBQWE7UUFDR0MsbUVBQVM7OztLQUZwQ0ssVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BpbmdCdXR0b24udHN4PzU5YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgKiBhcyB3ZWIzIGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9QaW5nQnV0dG9uLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFBST0dSQU1fSUQgPSBgQ2hUMUIzOVdLTFM4cVVya0x2RkRYTWhFSjRGMVhaendVTkhVdDRBVTlhVmFgXG5jb25zdCBEQVRBX0FDQ09VTlRfUFVCS0VZID0gYEFoOUs3ZFE4RUhhWnFjQXNnQlc4dzM3eU4yZUF5M2tvRm1VbjR4M0NKdG9kYFxuXG5leHBvcnQgY29uc3QgUGluZ0J1dHRvbjogRkMgPSAoKSA9PiB7XG5cdGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuXHRjb25zdCB7IHB1YmxpY0tleSwgc2VuZFRyYW5zYWN0aW9uIH0gPSB1c2VXYWxsZXQoKTtcblxuXHRjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuXHRcdGlmICghY29ubmVjdGlvbiB8fCAhcHVibGljS2V5KSB7IHJldHVybiB9XG5cblx0XHRjb25zdCBwcm9ncmFtSWQgPSBuZXcgd2ViMy5QdWJsaWNLZXkoUFJPR1JBTV9JRClcblx0XHRjb25zdCBwcm9ncmFtRGF0YUFjY291bnQgPSBuZXcgd2ViMy5QdWJsaWNLZXkoREFUQV9BQ0NPVU5UX1BVQktFWSlcblx0XHRjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyB3ZWIzLlRyYW5zYWN0aW9uKClcblxuXHRcdGNvbnN0IGluc3RydWN0aW9uID0gbmV3IHdlYjMuVHJhbnNhY3Rpb25JbnN0cnVjdGlvbih7XG5cdFx0XHRrZXlzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwdWJrZXk6IHByb2dyYW1EYXRhQWNjb3VudCxcblx0XHRcdFx0XHRpc1NpZ25lcjogZmFsc2UsXG5cdFx0XHRcdFx0aXNXcml0YWJsZTogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdHByb2dyYW1JZFxuXHRcdH0pO1xuXG5cdFx0dHJhbnNhY3Rpb24uYWRkKGluc3RydWN0aW9uKVxuXHRcdHNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgY29ubmVjdGlvbikudGhlbihzaWcgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coc2lnKVxuXHRcdH0pXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfSBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHQgICAgIDxpbWcgc3JjPVwiL21haW4ucG5nXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsyMDB9IC8+XG5cdFx0PC9kaXY+XG5cdClcbn0iXSwibmFtZXMiOlsidXNlQ29ubmVjdGlvbiIsInVzZVdhbGxldCIsIndlYjMiLCJzdHlsZXMiLCJQUk9HUkFNX0lEIiwiREFUQV9BQ0NPVU5UX1BVQktFWSIsIlBpbmdCdXR0b24iLCJjb25uZWN0aW9uIiwicHVibGljS2V5Iiwic2VuZFRyYW5zYWN0aW9uIiwib25DbGljayIsInByb2dyYW1JZCIsIlB1YmxpY0tleSIsInByb2dyYW1EYXRhQWNjb3VudCIsInRyYW5zYWN0aW9uIiwiVHJhbnNhY3Rpb24iLCJpbnN0cnVjdGlvbiIsIlRyYW5zYWN0aW9uSW5zdHJ1Y3Rpb24iLCJrZXlzIiwicHVia2V5IiwiaXNTaWduZXIiLCJpc1dyaXRhYmxlIiwiYWRkIiwidGhlbiIsInNpZyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b25Db250YWluZXIiLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PingButton.tsx\n");

/***/ })

});