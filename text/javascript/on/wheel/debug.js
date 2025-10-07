import {debug_s} from '../../elems.js';
import {main} from '../../state/i.js';


export default (
    (e) => {
        return (
            (debug_s.textContent = main.s)
        )
    }
);
