import {
    on_canvas_resize,
    on_reset_click,
    on_canvas_wheel,

    on_window_mup,
    on_canvas_mdown,
    on_window_mmove,
} from './on/i.js';
import {url, STROKE_STYLE, BG_STYLE, passive_false} from './conf.js';

import {
  loop,
  response_json,
  prepare_features,
  compute_bbox,
} from "./f/i.js";

import {
  projected_af,
  poly_af,
  mpol_bbox_af,
  features_af,
} from './cycle/i.js'

import {bf} from './state/i.js';

import {
  canvas,
  ctx,
} from './elems.js';

(()=>{
  return (
    fetch(url)
    .then(response_json)
    .then(
      (gl) => {
        return (
          (
            bf
            .features =
              prepare_features(gl,projected_af,poly_af,mpol_bbox_af,features_af,compute_bbox)
          ),

          canvas.addEventListener('mousedown',on_canvas_mdown),
          canvas.addEventListener('wheel',on_canvas_wheel,passive_false),

          window.addEventListener('resize', on_canvas_resize),
          window.addEventListener('mouseup',on_window_mup),
          

          (document.getElementById('reset').onclick = on_reset_click),

          window.dispatchEvent(new Event("resize")),
          
          on_reset_click(),
          requestAnimationFrame(loop)
        )
      }
    )
  );
})();