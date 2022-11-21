"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Recangle = /** @class */ (function (_super) {
    __extends(Recangle, _super);
    function Recangle(theX, theY, _l, _b) {
        var _this = _super.call(this, theX, theY) || this;
        _this._l = _l;
        _this._b = _b;
        return _this;
    }
    Object.defineProperty(Recangle.prototype, "l", {
        get: function () {
            return this._l;
        },
        set: function (v) {
            this._l = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recangle.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (v) {
            this._b = v;
        },
        enumerable: true,
        configurable: true
    });
    Recangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", l=" + this._l + "  b=" + this._b);
    };
    return Recangle;
}(Shape_1.Shape));
exports.Recangle = Recangle;
