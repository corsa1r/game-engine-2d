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
//# sourceMappingURL=Screen.js.map