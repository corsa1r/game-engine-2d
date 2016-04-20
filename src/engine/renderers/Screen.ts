export class Screen {
    
    public width: number;
    public heigth: number;
    public halfWidth: number;
    public halfHeight: number;

    static defaultWidth: number = 640;
    static defaultHeight: number = 480;

    constructor(width: number = Screen.defaultWidth, height: number = Screen.defaultHeight) {
        this.width = width;
        this.heigth = height;

        this.halfWidth = this.width >> 1;
        this.halfHeight = this.heigth >> 1;
    }
}
