import {Screen} from './Screen';

export interface Renderer {
    screen: Screen;
    create: (width: number, height: number) => void;

    canvas: any;
    context: any;
}
