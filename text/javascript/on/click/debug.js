import {
    settings,
} from '../../state/i.js';
import {
    on_debug_wheel,
    on_debug_mdown,
    on_debug_mup,
    on_debug_mmove,
    on_debug_reset_click,
} from '../i.js'
import {
    debug_panel_cl,
    canvas,
    reset,
} from '../../elems.js';
import {
    passive_false,
} from '../../conf.js';


export default (
    (e) => {
        var
            use = e.currentTarget.querySelector("use"),
            mode = settings.mode,
            w = e.view
        ;
        return (
            (mode === 1)
            ? (
                reset.removeEventListener("click", on_debug_reset_click),
                canvas.removeEventListener('wheel',on_debug_wheel,passive_false),

                w.removeEventListener("mousedown", on_debug_mdown),
                w.removeEventListener("mouseup", on_debug_mup),

                (settings.mode = 0),
                debug_panel_cl.remove("a"),
                use.setAttribute("href", "#pause_i")
            )
            : (
                on_debug_mmove(e),
                on_debug_wheel(e),

                reset.addEventListener("click", on_debug_reset_click),
                canvas.addEventListener('wheel',on_debug_wheel,passive_false),

                w.addEventListener("mousedown", on_debug_mdown),
                w.addEventListener("mouseup", on_debug_mup),

                (settings.mode = 1),
                debug_panel_cl.add("a"),
                use.setAttribute("href", "#play_i")
            )
        );
    }
);
