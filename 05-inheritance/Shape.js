"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Shape.prototype.getInfo = function () {
        return "x=" + this._x + " y=" + this._y;
    };
    return Shape;
}());
exports.Shape = Shape;
