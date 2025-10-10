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
import _null from './_null.js';
import tile_x from './tile_x.js';
import tile_y from './tile_y.js';

import {tile_url, PI_180,PI, length} from '../conf.js';





export default (
    (m,draw,screen_rect,canvas,ctx,style_color,response_json) => {
        var
            controller = new AbortController(),
            o = {
                method: "GET",
                signal: controller.signal,
            },
            rect = [0,0,0,0],
            e = (
                (e) => {
                    return (
                        (e.name === "AbortError")
                        ||
                        (
                            console.error(e)
                        )
                    );
                }
            ),
            
            then = (
                (fs) => {
                    var
                        i = 0,
                        l = fs.length,
                        f = null,

                        w = m.width,
                        h = m.height,
                        scale = m.s,
                        x = m.x,
                        y = m.y,
                        w2 = m.w2,
                        
                        h2 = m.h2,
                        lineWidth = m.lineWidth
                    ;
                    for (;i<l;i++) {
                        (f=fs[i])
                        &&
                        draw(
                            f,
                            canvas,
                            ctx,
                            w,h,scale,
                            x,y,w2,h2,
                            style_color,
                            lineWidth,
                        );
                    }
                    return undefined;
                }
            ),

            on_response = (
                (r) => (
                    r.ok
                    ? r.json()
                    : null
                )
            ),

            a = (n) => {
                return (
                    (main.dirty)
                    &&
                    (
                        

                        (
                            (scale) => {
                                var
                                    bbox =
                                        screen_rect(
                                            [0,0,0,0],
                                            m.x,
                                            m.y,
                                            scale,
                                            m.mw2,
                                            m.mh2,
                                            m.w_w2,
                                            m.h_h2
                                        )
                                    ,
                                    z = Math.floor(Math.log2(scale)),

                                    n = Math.pow(2, z),

                                    x = tile_x(bbox[0],n),
                                    y = 0,

                                    maxY = tile_y(bbox[1]*PI_180,n,PI),

                                    maxX = tile_x(bbox[2],n),
                                    minY = tile_x(bbox[3]*PI_180,n,PI),

                                    i = 0,

                                    promises = (
                                        (length.length=((maxX - x + 1) * (maxY - minY + 1))),
                                        Array.from(length, _null)
                                    )
                                ;

                                (o.signal.aborted) || (controller.abort()),
                                o.signal = (controller = new AbortController()).signal;

                                for (; x <= maxX; x++) {
                                    y = minY;
                                    for (; y <= maxY; y++) {
                                        promises[i++] = (
                                            fetch(tile_url(x,y,z),o)
                                            .then(on_response)
                                        );
                                    }
                                }

                                return (
                                    Promise.all(promises)
                                );
                            }
                        )(
                            m.s,
                        )
                        .then(then)
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
