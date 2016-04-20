import {EventsEmitter} from '../events/EventsEmitter';

export class GameLoop extends EventsEmitter {
    private fps: number;//current fps
    private clock: any;// this determines if the loop is currently running or not
    private lastTime: number;//this is the last loop time, its used to calculate delta time

    private static defaultFps: number = 1000 / 60;//60 frames per second

    constructor() {
        super();

        this.fps = GameLoop.defaultFps;
        this.clock = null;
        this.lastTime = 0;
    }

    /**
     * This method allows you to start the GameLoop
     * 
     * @returns self instance
     */
    start() {
        if (!this.clock) {
            this.lastTime = Date.now();
            this.clock = setInterval(() => { this.loop(); }, this.fps);
            this.emit('start', this.lastTime);
        }

        return this;
    }

    /**
     * This method allows you to stop/pause the loop
     * 
     * @returns self instance
     */
    stop() {
        if (this.clock) {
            clearInterval(this.clock);
            this.clock = null;
            this.emit('stop', Date.now());
        }

        return this;
    }

    private loop() {
        let now = Date.now();
        let delta = now - this.lastTime;
        this.lastTime = now;
        this.emit('tick', delta, this.lastTime);
    }
}
