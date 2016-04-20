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
//# sourceMappingURL=App.js.map