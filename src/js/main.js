'use strict';

var PIXI = require('pixi');

var SceneManager = require('./scene/scene_manager');
var LoadingScene = require('./scene/loading_scene');

var renderer = PIXI.autoDetectRenderer(640, 360);
document.body.appendChild(renderer.view);

var manager = new SceneManager(renderer);

var loadingScene = new LoadingScene(manager);
manager.changeScene(loadingScene);

function animate() {
    manager.update(0.0);

    manager.render();

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
