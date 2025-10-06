
export default (
    (
        b,
        lon,
        lat,
        maxLat,
        mMaxLat,
        PI_180_2,
        PI_4,
        _180_PI,
        maxLatMore,
        maxLatLess
    ) => {
        return (
            (b[0] = lon),
            (b[1] = (
                (lat > maxLat)
                ? maxLatMore
                :
                (lat < mMaxLat)
                ? maxLatLess
                : -(Math.log(Math.tan(PI_4 + (lat * PI_180_2))) * _180_PI)
            )),
            b
        );
    }
);
