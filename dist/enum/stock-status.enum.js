"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockStatus = void 0;
var StockStatus;
(function (StockStatus) {
    StockStatus[StockStatus["IN_HAND"] = 0] = "IN_HAND";
    StockStatus[StockStatus["IN_CART"] = 1] = "IN_CART";
    StockStatus[StockStatus["SOLD"] = 2] = "SOLD";
    StockStatus[StockStatus["RETURNED"] = 3] = "RETURNED";
    StockStatus[StockStatus["DEFECTED"] = 4] = "DEFECTED";
})(StockStatus = exports.StockStatus || (exports.StockStatus = {}));
//# sourceMappingURL=stock-status.enum.js.map