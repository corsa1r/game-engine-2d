(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var CanvasRenderer_1 = require('./engine/renderers/CanvasRenderer');
var Vector_1 = require('./engine/math/Vector');
var renderer = new CanvasRenderer_1.CanvasRenderer(500, 300);
renderer.canvas.addEventListener('mousemove', function (event) {
    var position = new Vector_1.Vector(event.clientX, event.clientY);
    console.log(position);
});

},{"./engine/math/Vector":2,"./engine/renderers/CanvasRenderer":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./Screen":4}],4:[function(require,module,exports){
"use strict";
var Screen = (function () {
    function Screen(width, height) {
        if (width === void 0) { width = Screen.defaultWidth; }
        if (height === void 0) { height = Screen.defaultHeight; }
        this.width = width;
        this.heigth = height;
        this.halfWidth = this.width >> 1;
        this.halfHeight = this.heigth >> 1;
    }
    Screen.defaultWidth = 640;
    Screen.defaultHeight = 480;
    return Screen;
}());
exports.Screen = Screen;

},{}]},{},[1]);
