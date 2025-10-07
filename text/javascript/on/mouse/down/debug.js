import {on_debug_mmove} from "../move/i.js";

export default (
    (e) => {
        var
            w = e.view
        ;
        return (
            w.addEventListener('mousemove',on_debug_mmove)
        );
    }
);
