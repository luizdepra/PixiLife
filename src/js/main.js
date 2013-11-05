"use strict";

var pixi = require('pixi');

var renderer = pixi.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

var stage = new pixi.Stage(0x66FF00);

function animate() {
    renderer.render(stage);

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
