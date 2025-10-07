import {main} from '../../state/i.js';
import {MAX_SCALE, MIN_SCALE} from '../../conf.js';


export default (
    (e) => {
        var
            t = e.currentTarget,
            r = t.getBoundingClientRect(),

            cx = e.clientX - r.left,
            cy = e.clientY - r.top,

            sc=0,

            cx_w2=cx-main.w2,
            cy_h2=cy-main.h2,

            x=main.x,
            y=main.y,

            before_x = ((cx_w2/(sc=main.s))+x),
            before_y = ((cy_h2/sc)+y),

            after_x = ((cx_w2/(main.s=sc=(
                Math.max(
                    MIN_SCALE,
                Math.min(
                    MAX_SCALE,
                    (
                        sc
                        * (
                            e.deltaY > 0
                            ? main.scale_step_back
                            : main.scale_step
                        )
                    )
                ))
            )))+x),
            after_y = ((cy_h2/sc)+y)
        ;
        
        return (
            e.preventDefault(),
            (main.x=(
                (x+(before_x-after_x))
            )),
            (main.y=(
                (y+(before_y-after_y))
            )),
            (main.dirty=true)
        );
    }
)