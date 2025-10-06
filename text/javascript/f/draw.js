export default (
    (features,rect,canvas,ctx,w,h,sc,x,y,w2,h2,BG_STYLE,STROKE_STYLE,lineWidth, bbox_intersects) => {
        var
            k = 0,
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

            f = null
        ;
        ctx.fillStyle = BG_STYLE;
        ctx.fillRect(0,0,w,h);

        ctx.strokeStyle = STROKE_STYLE;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();

        L = features.length;
        
        for(;I<L;I++){
            
            if ((k=(f = features[I]).k) === 0) {
                if (
                    !(bbox_intersects(f.bboxes[0],rect))
                ) {
                    continue;
                };
                
                ring_i = 0;
                ring_l = (projected = f.projected).length;

                for (;ring_i<ring_l;ring_i++) {
                    ring_el_i = 1;
                    ring_el_l = (ring = projected[ring_i]).length;
                    
                    ctx.moveTo(
                        ((((ring_el = ring[0])[0]-x)*sc)+w2),
                        (((ring_el[1]-y)*sc)+h2)
                    );

                    for (;ring_el_i<ring_el_l;ring_el_i++) {
                        ctx.lineTo(
                            ((((ring_el = ring[ring_el_i])[0]-x)*sc)+w2),
                            (((ring_el[1]-y)*sc)+h2)
                        );
                    }
                    ctx.closePath();
                }
            }
            else if (k===1) {
                p=0;
                l=(projected=f.projected).length;
                for (;p<l;p++) {
                    if (
                        !(bbox_intersects(f.bboxes[p],rect))
                    ) {
                        continue;
                    };
                    ring_i = 0;
                    ring_l = (projected_p=projected[p]).length;

                    for(;ring_i<ring_l;ring_i++){
                        

                        ring_el_i = 1;
                        ring_el_l = (ring = projected_p[ring_i]).length;

                        ctx.moveTo(((((ring_el = ring[0])[0]-x)*sc)+w2),(((ring_el[1]-y)*sc)+h2));

                        for (;ring_el_i<ring_el_l;ring_el_i++) {
                            ctx.lineTo(
                                ((((ring_el = ring[ring_el_i])[0]-x)*sc)+w2),
                                (((ring_el[1]-y)*sc)+h2)
                            );
                        }
                        ctx.closePath();
                    }
                }
            }
        }
        return (
            ctx.stroke()
        );
    }
)