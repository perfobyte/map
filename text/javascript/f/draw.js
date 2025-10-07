
export default (
    (features, canvas, ctx, w, h, sc, x, y, w2, h2, style_color, lineWidth) => {
        var
            p = 0,
            l = 0,
            I = 0,
            L = 0,
            ring_i = 0,
            ring_l = 0,
            ring_el_i = 0,
            ring_el_l = 0,
            ring = null,
            ring_el = null,
            projected = null,
            projected_p = null,
            f = null,
            n = ""
        ;
        
        ctx.fillStyle = style_color.sea;
        ctx.fillRect(0,0,w,h);

        ctx.strokeStyle = style_color.border_country;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
    
        L = features.length;

        for (;I<L;I++) {
            f = features[I];
    
            if (f.k === 0) {
                ring_i = 0;
                ring_l = (projected = f.projected).length;

                for (; ring_i < ring_l; ring_i++) {
                    ctx.moveTo(
                        (((ring_el=(ring = projected[ring_i])[0])[0] - x) * sc + w2),
                        ((ring_el[1] - y) * sc + h2)
                    );

                    ring_el_i = 1;
                    ring_el_l = ring.length;
                    for (; ring_el_i < ring_el_l; ring_el_i++) {
                        ctx.lineTo(
                            ((((ring_el=ring[ring_el_i])[0]-x)*sc)+w2),
                            (((ring_el[1]-y)*sc)+h2)
                        );
                    }
                    ctx.closePath();
                }
            }
            else {
                l = (projected = f.projected).length;
                p = 0;
                for (; p < l; p++) {
                    ring_i = 0;
                    ring_l = (projected_p = projected[p]).length;
                    for (; ring_i < ring_l; ring_i++) {
                        
                        ctx.moveTo(
                            ((((ring_el=(ring = projected_p[ring_i])[0])[0]-x)*sc)+w2),
                            (((ring_el[1]-y)*sc)+h2)
                        );
                        ring_el_i = 1;
                        ring_el_l = ring.length;
                        for (; ring_el_i < ring_el_l; ring_el_i++) {
                            ctx.lineTo(
                                (((ring[ring_el_i][0]-x)*sc)+w2),
                                (((ring[ring_el_i][1]-y)*sc)+h2)
                            );
                        }
                        ctx.closePath();
                    }
                }
            }
            
            // if (n=f.n) {
            //     ctx.fillStyle = "black";
            //     ctx.fillText(
            //         n,
            //         ((f.nx - x) * sc + w2),
            //         ((f.ny - y) * sc + h2)
            //     );
            // }
        }
        
        return (
            (ctx.fillStyle = style_color.bg_country),
            ctx.fill(),
            ctx.stroke()
        );
    }
  )
  