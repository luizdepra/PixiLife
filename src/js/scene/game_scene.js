'use strict';

var BaseScene = require('./base_scene');

var PIXI = require('pixi');

function GameScene(manager) {
    BaseScene.call(this, manager);

    this._stage = new PIXI.Stage(0xFFAAFF);
}

GameScene.prototype = {
  constructor: GameScene,

  update: function(delta) {
    
  },

  render: function() {
    this._manager.renderer.render(this._stage);
  }
};

module.exports = GameScene;
