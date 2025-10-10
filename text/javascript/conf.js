
export var
    PI = Math.PI,
    PI_180 = PI/180,
    PI_180_2 = PI_180/2,
    PI_2 = PI/2,

    PI_4 = PI/4,
    _180_PI = 180/PI,
    
    EA = [],

    length = {length:0},

    MAX_SCALE=1024,//4194304,
    MIN_SCALE=1,

    tile_url = (x,y,z) => (
        `/f/application/json/tiles/${z}/${x}/${y}.json`
    ),

    passive_false = {passive:false}
;