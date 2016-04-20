import {GameLoop} from './engine/time/GameLoop';

let loop = new GameLoop();

loop.on('tick', (delta: number) => {
    console.log('delta is:', delta);
});

loop.start();

setInterval(() => {
    loop.stop();
}, 3000);