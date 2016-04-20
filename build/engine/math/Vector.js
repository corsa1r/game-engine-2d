"use strict";
var Vector = (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector.prototype.len = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Vector.prototype.distance = function (other) {
        var dist = new Vector(this.x - other.x, this.y - other.y);
        return Math.abs(dist.len());
    };
    Vector.prototype.angle = function () {
        var angleInRadians = Math.atan2(this.y, this.x);
        var angleInDegrees = (angleInRadians / Math.PI) * 180.0;
        var result = {
            radians: angleInRadians,
            degrees: angleInDegrees
        };
        return result;
    };
    return Vector;
}());
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map