export default (
    (x,n) => {
        return (
            Math.floor((x + 180) / 360 * n)
        );
    }
);
