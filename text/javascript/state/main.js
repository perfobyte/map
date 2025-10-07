import {PI_4, PI_180_2, _180_PI} from '../conf.js';


export default (
    (maxLat) => {
        var
            mMaxLat = -maxLat,
            scale_step_start = 1.15,
            v = {
                scale_step: scale_step_start,
                scale_step_back:1/scale_step_start,

                max_scale:50,
                min_scale:0,

                min_x:0,
                min_y:0,

                max_x:0,
                max_y:0,

                lineWidth:.2,
                lastX:0,
                lastY:0,
                dirty:true,

                WORLD_W:360,
                WORLD_H:180,

                width:0,
                height:0,
                w2:0,
                h2:0,
                mw2:0,
                mh2:0,
                w_w2:0,
                h_h2:0,
                
                x: 0,
                y: 0,
                s: 1,

                maxLat,
                mMaxLat,

                maxLatMore: -(Math.log(Math.tan(PI_4 + (maxLat * PI_180_2))) * _180_PI),
                maxLatLess: -(Math.log(Math.tan(PI_4 + (mMaxLat * PI_180_2))) * _180_PI),
            }
        ;
        return (
            v
        )
    }
)(85.05112878);
