(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var GameLoop_1 = require('./engine/time/GameLoop');
var loop = new GameLoop_1.GameLoop();
loop.on('tick', function (delta) {
    console.log('delta is:', delta);
});
loop.start();
setInterval(function () {
    loop.stop();
}, 3000);

},{"./engine/time/GameLoop":3}],2:[function(require,module,exports){
"use strict";
var EventsEmitter = (function () {
    function EventsEmitter() {
        this.events = {};
    }
    EventsEmitter.prototype.on = function (name, callback, handler) {
        if (handler === void 0) { handler = null; }
        if (!this.events[name]) {
            this.events[name] = [];
        }
        var event = {
            callback: callback,
            handler: handler
        };
        this.events[name].push(event);
        return this;
    };
    EventsEmitter.prototype.off = function (name, handler) {
        var _this = this;
        if (handler === void 0) { handler = null; }
        if (this.events[name]) {
            if (handler === null) {
                this.events[name] = [];
            }
            else {
                var deletes_1 = 0;
                this.each(name, function (event, index) {
                    if (event.handler === handler) {
                        deletes_1++;
                        delete _this.events[name][index];
                    }
                });
                if (deletes_1 > 0) {
                    this.clean(name);
                }
            }
        }
        return this;
    };
    EventsEmitter.prototype.emit = function (name, param1, param2, options) {
        if (param1 === void 0) { param1 = undefined; }
        if (param2 === void 0) { param2 = undefined; }
        if (options === void 0) { options = {}; }
        if (this.events[name]) {
            this.each(name, function (event) {
                event.callback(param1, param2, options);
            });
        }
        return this;
    };
    EventsEmitter.prototype.clean = function (name) {
        if (this.events[name]) {
            this.events[name] = this.events[name].filter(function (value) {
                return value ? true : false;
            });
        }
    };
    EventsEmitter.prototype.each = function (name, iterator) {
        if (this.events[name]) {
            for (var i = 0, len = this.events[name].length; i < len; i++) {
                if (iterator(this.events[name][i], i) === false) {
                    break;
                }
            }
        }
    };
    return EventsEmitter;
}());
exports.EventsEmitter = EventsEmitter;

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventsEmitter_1 = require('../events/EventsEmitter');
var GameLoop = (function (_super) {
    __extends(GameLoop, _super);
    function GameLoop() {
        _super.call(this);
        this.fps = GameLoop.defaultFps;
        this.clock = null;
        this.lastTime = 0;
    }
    GameLoop.prototype.start = function () {
        var _this = this;
        if (!this.clock) {
            this.lastTime = Date.now();
            this.clock = setInterval(function () { _this.loop(); }, this.fps);
            this.emit('start', this.lastTime);
        }
        return this;
    };
    GameLoop.prototype.stop = function () {
        if (this.clock) {
            clearInterval(this.clock);
            this.clock = null;
            this.emit('stop', Date.now());
        }
        return this;
    };
    GameLoop.prototype.loop = function () {
        var now = Date.now();
        var delta = now - this.lastTime;
        this.lastTime = now;
        this.emit('tick', delta, this.lastTime);
    };
    GameLoop.defaultFps = 1000 / 60;
    return GameLoop;
}(EventsEmitter_1.EventsEmitter));
exports.GameLoop = GameLoop;

},{"../events/EventsEmitter":2}]},{},[1]);
