'use strict';

var PIXI = require('pixi');

var SceneManager = require('./scene/scene_manager');
var GameScene = require('./scene/game_scene');

var renderer = PIXI.autoDetectRenderer(640, 360);
document.body.appendChild(renderer.view);

var manager = new SceneManager(renderer);

var gameScene = new GameScene(manager);
manager.changeScene(gameScene);

function animate() {
    manager.update(0.0);

    manager.render();

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

var test = new GameScene(null);
test.update(0);
