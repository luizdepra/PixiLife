'use strict';

var PIXI = require('pixi');

var GameManager = require('./game_manager');
var SceneManager = require('./scene/scene_manager');
var LoadingScene = require('./scene/loading_scene');

var renderer = PIXI.autoDetectRenderer(640, 360);
document.body.appendChild(renderer.view);

var gameManager = new GameManager();

gameManager.renderer = renderer;
gameManager.sceneManager = new SceneManager(gameManager);

var loadingScene = new LoadingScene(gameManager);
gameManager.sceneManager.changeScene(loadingScene);

function animate() {
    gameManager.sceneManager.update(0.0);

    gameManager.sceneManager.render();

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
