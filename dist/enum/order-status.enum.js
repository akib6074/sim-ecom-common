"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 1] = "Pending";
    OrderStatus[OrderStatus["Confirmed"] = 2] = "Confirmed";
    OrderStatus[OrderStatus["OnTheWay"] = 3] = "OnTheWay";
    OrderStatus[OrderStatus["Delivered"] = 4] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 5] = "Cancelled";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
//# sourceMappingURL=order-status.enum.js.map