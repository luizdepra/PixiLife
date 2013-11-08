'use strict';

var BaseScene = require('./base_scene');
var CellMap = require('../entity/cell_map');

var PIXI = require('pixi');

function GameScene(manager) {
    BaseScene.call(this, manager);

    this._stage = new PIXI.Stage(0x000000);

    this._cellMap = new CellMap(manager, this._stage, 80, 45);
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
