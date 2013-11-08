'use strict';

var BaseScene = require('./base_scene');
var GameScene = require('./game_scene');

var PIXI = require('pixi');

function LoadingScene(manager) {
  BaseScene.call(this, manager);

  var json = ['../res/sprite_sheet.json'];

  this._stage = new PIXI.Stage(0x000000);

  this._isLoading = false;
  this._loader = new PIXI.AssetLoader(json);

  var self = this;

  function _onAssetsLoaded() {
    self._manager.sceneManager.changeScene(new GameScene(self._manager));
  }

  this._loader.onComplete = _onAssetsLoaded;
}

LoadingScene.prototype = {
  constructor: LoadingScene,

  update: function(delta) {
    if (!this._isLoading) {
      this._loader.load();

      this._isLoading = true;
    }
  },

  render: function() {
    this._manager.renderer.render(this._stage);
  }
};

module.exports = LoadingScene;
