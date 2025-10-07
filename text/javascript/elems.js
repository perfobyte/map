export var
    canvas = document.getElementById('main'),
    ctx = canvas.getContext('2d'),

    debug_panel = document.getElementById("debug_panel"),
    debug_panel_cl = debug_panel.classList,

    reset = document.getElementById("reset"),

    debug_x = debug_panel.querySelector('[data-a="x"]'),
    debug_y = debug_panel.querySelector('[data-a="y"]'),
    debug_s = debug_panel.querySelector('[data-a="s"]')
;