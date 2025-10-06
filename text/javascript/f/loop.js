import {main, bf} from '../state/i.js';
import {canvas,ctx} from '../elems.js';
import draw from './draw.js';
import {BG_STYLE, STROKE_STYLE} from '../conf.js';
import screen_rect from './screen_rect.js';
import bbox_intersects from './bbox_intersects.js';


export default (
    (m,draw,screen_rect,canvas,ctx,BG_STYLE,STROKE_STYLE,) => {
        var
            a = (n) => {
                var
                    x = 0,
                    y = 0,
                    sc = 0
                ;
                return (
                    (main.dirty)
                    &&
                    (
                        draw(
                            bf.features,
                            screen_rect(
                                bf.rect,
                                (x=m.x),(y=m.y),(sc=m.scale),
                                m.mw2, m.mh2,
                                m.w_w2, m.h_h2,
                            ),
                            canvas,
                            ctx,
                            m.width,m.height,sc,
                            x,y, m.w2, m.h2,

                            BG_STYLE,STROKE_STYLE,m.lineWidth,bbox_intersects,
                        ),
                        (main.dirty=false)
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
    BG_STYLE,
    STROKE_STYLE,
);