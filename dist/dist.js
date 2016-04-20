(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var CanvasRenderer_1 = require('./engine/renderers/CanvasRenderer');
var renderer = new CanvasRenderer_1.CanvasRenderer();

},{"./engine/renderers/CanvasRenderer":2}],2:[function(require,module,exports){
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

},{"./Screen":3}],3:[function(require,module,exports){
"use strict";
var Screen = (function () {
    function Screen() {
        this.width = Screen.defaultWidth;
        this.heigth = Screen.defaultHeight;
        this.halfWidth = this.width >> 1;
        this.halfHeight = this.heigth >> 1;
    }
    Screen.defaultWidth = 640;
    Screen.defaultHeight = 480;
    return Screen;
}());
exports.Screen = Screen;

},{}]},{},[1]);
