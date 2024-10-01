/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/enums/action-keys.enum.ts":
/*!***************************************!*\
  !*** ./src/enums/action-keys.enum.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionKeys = void 0;
var ActionKeys;
(function (ActionKeys) {
    ActionKeys["CLEAR"] = "C";
    ActionKeys["EQUALS"] = "=";
    ActionKeys["DOT"] = ".";
})(ActionKeys || (exports.ActionKeys = ActionKeys = {}));


/***/ }),

/***/ "./src/models/calculator.model.ts":
/*!****************************************!*\
  !*** ./src/models/calculator.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalculatorModel = void 0;
const action_keys_enum_1 = __webpack_require__(/*! ../enums/action-keys.enum */ "./src/enums/action-keys.enum.ts");
class CalculatorModel {
    constructor() {
        this._buffer = '';
    }
    pressNumericKey(key) {
        this._buffer += key;
    }
    pressOperatorKey(key) {
        this._buffer += key;
    }
    pressActionKey(key) {
        switch (key) {
            case action_keys_enum_1.ActionKeys.CLEAR:
                this._buffer = '';
                break;
            case action_keys_enum_1.ActionKeys.DOT:
                this._buffer += '.';
                break;
            case action_keys_enum_1.ActionKeys.EQUALS:
                // eslint-disable-next-line no-eval
                this._buffer = eval(this._buffer).toString();
                break;
            default:
                throw new Error('Invalid Action');
        }
    }
    display() {
        return this._buffer;
    }
}
exports.CalculatorModel = CalculatorModel;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalculatorModel = void 0;
var calculator_model_1 = __webpack_require__(/*! ./models/calculator.model */ "./src/models/calculator.model.ts");
Object.defineProperty(exports, "CalculatorModel", ({ enumerable: true, get: function () { return calculator_model_1.CalculatorModel; } }));

})();

module.exports.myLib = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=week-5-creational-DP.js.map