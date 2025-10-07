import {EA} from '../../conf.js';


export default (
    (e) => {
        var
            k = e.geometry.type,
            p = e.properties
        ;
        return {
            k:(
                (k==='Polygon')
                ? 0
                :
                (k==='MultiPolygon')
                ? 1
                : 2
            ),
            projected:EA,
            bboxes:EA,
            n:(p && p.NAME_EN)||"",
            nx:0,
            ny:0,
        }
    }
)