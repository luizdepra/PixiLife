'use strict';

var BaseScene = require('./base_scene');

var PIXI = require('pixi');

function LoadingScene(manager) {
  BaseScene.call(this, manager);

  var json = ['../res/sprite_sheet.json'];

  this._stage = new PIXI.Stage(0x005500);

  this._isLoading = false;
  this._loader = new PIXI.AssetLoader(json);

  var self = this;

  function _onAssetsLoaded() {
    var cell = PIXI.Sprite.fromFrame('tile_normal01.png');

    cell.position.x = 0;
    cell.position.y = 0;

    self._stage.addChild(cell);

    //this._manager.changeScene();
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
