import {
    main,
    style_color,
} from '../state/i.js';
import {
    canvas,
    ctx,
} from '../elems.js';
import draw from './draw.js';
import screen_rect from './screen_rect.js';
import bbox_intersects from './bbox_intersects.js';
import response_json from './response_json.js';


export default (
    (m,draw,screen_rect,canvas,ctx,style_color,response_json) => {
        var
            controller = new AbortController(),
            o = {
                method: "GET",
                signal: controller.signal,
            },
            e = (
                (e) => {
                    return (
                        (e.name === "AbortError")
                        ||
                        0//console.error(e)
                    );
                }
            ),
            F=null,
            then = (
                (features) => {
                    return (
                        draw(
                            (features),
                            canvas,
                            ctx,
                            m.width,m.height,m.s,
                            m.x,m.y, m.w2, m.h2,
                
                            style_color,m.lineWidth,
                        )
                    );
                }
            ),
            a = (n) => {
                var
                    x = 0,
                    y = 0,
                    sc = 0,
                    signal = null
                ;
                return (
                    (main.dirty)
                    &&
                    (
                        ((o.signal.aborted) || (controller.abort())),
                        (o.signal = (controller = new AbortController()).signal),

                        F
                        ? then(F)
                        :
                        fetch(`/_/${m.x}/${m.y}/${m.s}`,o)
                        .then(response_json)
                        .then((features)=>{
                            then(F=features)
                        })
                        .catch(e),

                        (main.dirty = false)
                    ),

                    requestAnimationFrame(a)
                );
            }
        ;
        return a;
    }
)(
    main,
    draw,
    screen_rect,
    canvas,
    ctx,
    style_color,
    response_json
);