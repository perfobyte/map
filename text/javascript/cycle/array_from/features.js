import {EA} from '../../conf.js';


export default (
    (f) => {
        var
            k = f.geometry.type
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
        }
    }
)