import {RendererInterface} from './RendererInterface';
import {Screen} from './Screen';

export class CanvasRenderer implements RendererInterface {
    screen: Screen;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor() {
        this.create();
    }

    create() {
        this.screen = new Screen();

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.screen.width;
        this.canvas.height = this.screen.heigth;

        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
}
