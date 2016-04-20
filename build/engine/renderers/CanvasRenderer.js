"use strict";
var Screen_1 = require('./Screen');
var CanvasRenderer = (function () {
    function CanvasRenderer(width, height) {
        if (width === void 0) { width = Screen_1.Screen.defaultWidth; }
        if (height === void 0) { height = Screen_1.Screen.defaultHeight; }
        this.create(width, height);
    }
    CanvasRenderer.prototype.create = function (width, height) {
        this.screen = new Screen_1.Screen(width, height);
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.screen.width;
        this.canvas.height = this.screen.heigth;
        this.canvas.oncontextmenu = function () {
            return false;
        };
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    };
    return CanvasRenderer;
}());
exports.CanvasRenderer = CanvasRenderer;
//# sourceMappingURL=CanvasRenderer.js.map