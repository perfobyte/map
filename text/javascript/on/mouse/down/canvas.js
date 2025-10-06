import {main} from '../../../state/i.js';
import {on_window_mmove} from '../move/i.js';


export default (
    (e) => {
        return (
            (main.lastX=e.clientX),
            (main.lastY=e.clientY),
            e.view.addEventListener('mousemove',on_window_mmove)
        )
    }
)