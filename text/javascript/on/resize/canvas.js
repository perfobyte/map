import {main} from '../../state/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget
        ;
        return (
            (t.width = t.clientWidth),
            (t.height = t.clientHeight),
            (main.dirty = true)
        );
    }
);
