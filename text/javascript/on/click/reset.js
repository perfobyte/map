import {main} from '../../state/i.js';
import {canvas} from '../../elems.js';


export default (
    () => {
        return (
            (main.x=main.y=0),
            (main.dirty=true),
            (main.s=Math.min(
                (canvas.clientWidth / main.WORLD_W),
                (canvas.clientHeight / main.WORLD_H)
            ))
        );
    }
);



