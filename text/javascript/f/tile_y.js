
// y * PI_180
// n = Math.pow(2, z),

export default (
    (lat_PI_180, n, PI) => (
        Math.floor(
            (1 - Math.log(Math.tan(lat_PI_180) + 1/Math.cos(lat_PI_180)) / PI) / 2 * n
        )
    )
);