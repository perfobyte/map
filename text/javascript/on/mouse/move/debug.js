import {debug_x, debug_y} from '../../../elems.js';
import {main} from '../../../state/i.js';

export default (
    (e) => {
        return (
            (debug_x.textContent = main.x),
            (debug_y.textContent = main.y)
        )
    }
);
