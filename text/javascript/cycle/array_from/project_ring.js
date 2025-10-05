
import {to_xy} from '../../f/i.js';
import {main} from '../../state/i.js';

import {PI_180,PI_4,_180_PI} from '../../conf.js';

export default (
    (a) => {
        return (
            to_xy(
                a,
                a[0],
                a[1],
                main.maxLat,
                main.mMaxLat,
                PI_180,
                PI_4,
                _180_PI,
            )
        )
    }
);
