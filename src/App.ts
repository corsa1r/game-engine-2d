import {CanvasRenderer} from './engine/renderers/CanvasRenderer';
import {Vector} from './engine/math/Vector';

let renderer = new CanvasRenderer(500, 300);

renderer.canvas.addEventListener('mousemove', (event) => {
    let position = new Vector(event.clientX, event.clientY);
    
    console.log(position);
});