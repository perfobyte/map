export default (
    (b,x,y,sc,mw2,mh2,w_w2,h_h2) => {
        return (
            (b[0]=(mw2/sc)+x),
            (b[1]=(mh2/sc)+y),
            (b[2]=(w_w2/sc)+x),
            (b[3]=(h_h2/sc)+y),
            b
        );
    }
);
