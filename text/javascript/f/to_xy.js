
export default (
    (b,lon, lat, maxLat, mMaxLat, PI_180, PI_4, _180_PI) => {
        return (
            (b[0] = lon),
            (b[1] = (
                -(
                    Math.log(
                        Math.tan(
                            PI_4 + (
                                (
                                    (
                                        (lat > maxLat)
                                        ? maxLat
                                        :
                                        (lat < mMaxLat)
                                        ? mMaxLat
                                        : lat
                                    )
                                )
                                * PI_180
                            )
                            / 2
                        )
                    )
                    * _180_PI
                )
            )),
            b
        );
    }
);
