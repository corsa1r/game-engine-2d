"use strict";
var Screen_1 = require('./Screen');
var CanvasRenderer = (function () {
    function CanvasRenderer() {
        this.create();
    }
    CanvasRenderer.prototype.create = function () {
        this.screen = new Screen_1.Screen();
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.screen.width;
        this.canvas.height = this.screen.heigth;
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    };
    return CanvasRenderer;
}());
exports.CanvasRenderer = CanvasRenderer;
//# sourceMappingURL=CanvasRenderer.js.map