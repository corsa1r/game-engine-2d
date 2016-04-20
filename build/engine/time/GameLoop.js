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
//# sourceMappingURL=GameLoop.js.map