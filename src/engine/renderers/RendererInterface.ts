import {Screen} from './Screen';

export interface RendererInterface {
    screen: Screen;
    create: () => void;
    
    canvas: any;
    context: any;
}
