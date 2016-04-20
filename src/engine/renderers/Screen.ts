export class Screen {

    public width: number;
    public heigth: number;
    public halfWidth: number;
    public halfHeight: number;

    static defaultWidth: number = 640;
    static defaultHeight: number = 480;

    constructor() {
        this.width = Screen.defaultWidth;
        this.heigth = Screen.defaultHeight;

        this.halfWidth = this.width >> 1;
        this.halfHeight = this.heigth >> 1;
    }

}
