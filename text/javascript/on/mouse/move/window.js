import {main} from '../../../state/i.js';


export default (
    (e) => {
        var
            x = 0,
            y = 0,
            sc = 0
        ;
        return (
            (main.x=(
                (main.x-(((x=e.clientX)-main.lastX)/(sc=main.scale)))
            )),
            (main.y=(
                (main.y-(((y=e.clientY)-main.lastY)/sc))
            )),

            (main.lastX = x),
            (main.lastY = y),
            (main.dirty = true)
        );
    }
);
