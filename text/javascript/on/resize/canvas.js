import {main} from '../../state/i.js';
import {canvas} from "../../elems.js";

export default (
    (e) => {
        var
            t = e.currentTarget,
            w = t.innerWidth,
            h = t.innerHeight,
            w2 = 0,
            h2 = 0,

            scale = main.scale,

            WORLD_W = main.WORLD_W,
            WORLD_H = main.WORLD_H
        ;
        return (
            (main.max_x = (WORLD_W - (w / scale))),
            (main.max_y = (WORLD_H - (h / scale))),
            (main.min_scale = Math.min((w / WORLD_W), (h / WORLD_H))),
            
            (main.w_w2=(w-(w2=(main.width=canvas.width=w)/2))),
            (main.h_h2=(h-(h2=(main.height=canvas.height=h)/2))),

            (main.mw2=-(main.w2=w2)),
            (main.mh2=-(main.h2=h2)),
            (main.dirty = true)
        );
    }
);
