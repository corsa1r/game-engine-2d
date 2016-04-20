import {Renderer} from './RendererInterface';
import {Screen} from './Screen';

export class CanvasRenderer implements Renderer {
    screen: Screen;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(width: number = Screen.defaultWidth, height: number = Screen.defaultHeight) {
        this.create(width, height);
    }

    create(width: number, height: number) {
        this.screen = new Screen(width, height);

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.screen.width;
        this.canvas.height = this.screen.heigth;
        
        //prevent browser context menu
        this.canvas.oncontextmenu = function () {
            return false;
        };

        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
}
