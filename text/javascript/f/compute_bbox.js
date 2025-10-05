
export default (
    (b,points) => {
        let
            minX = Infinity,
            minY = Infinity,
            maxX = -Infinity,
            maxY = -Infinity,
            p=null,
            i=0,
            l=points.length,
            p_0=0,
            p_1=0
        ;
        for(
            ;
            i<l;
            i++
        ){
            ((p_0=(p=points[i])[0])<minX)&&(minX=p_0);
            (p_0>maxX)&&(maxX=p_0);
            ((p_1=p[1])<minY) && (minY=p_1);
            (p_1>maxY) && (maxY=p_1);
        }
        b[0]=minX;
        b[1]=minY;
        b[2]=maxX;
        b[3]=maxY;

        return b;
    }
)