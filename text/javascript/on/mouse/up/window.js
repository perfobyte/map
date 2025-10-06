import {main} from '../../../state/i.js';
import {on_window_mmove} from '../move/i.js';

export default (
    (e) => {
        return (
            e.view.removeEventListener('mousemove',on_window_mmove)
        );
    }
);
