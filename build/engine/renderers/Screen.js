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
//# sourceMappingURL=Screen.js.map