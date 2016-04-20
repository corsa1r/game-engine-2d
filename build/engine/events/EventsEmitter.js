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
        if (param1 === void 0) { param1 = void 0; }
        if (param2 === void 0) { param2 = void 0; }
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
//# sourceMappingURL=EventsEmitter.js.map