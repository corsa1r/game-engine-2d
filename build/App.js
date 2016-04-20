"use strict";
var CanvasRenderer_1 = require('./engine/renderers/CanvasRenderer');
var Vector_1 = require('./engine/math/Vector');
var renderer = new CanvasRenderer_1.CanvasRenderer(500, 300);
renderer.canvas.addEventListener('mousemove', function (event) {
    var position = new Vector_1.Vector(event.clientX, event.clientY);
    console.log(position);
});
//# sourceMappingURL=App.js.map