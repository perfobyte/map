import {on_debug_mmove, on_debug_wheel} from '../i.js';

export default (
    (e) => {
        return (
            on_debug_mmove(e),
            on_debug_wheel(e)
        );
    }
);