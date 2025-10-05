export default (
    (maxLat) => {
        return {
            isDragging:false,
            lastX:0,
            lastY:0,
            dirty:true,
            WORLD_W:360,
            WORLD_H:180,
            x: 0,
            y: 0,
            scale: 1,
            maxLat,
            mMaxLat:-maxLat,
        }
    }
)(85.05112878);
