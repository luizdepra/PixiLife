'use strict';

var Cell = require('./cell');

var PIXI = require('pixi');
var _ = require('underscore');

function CellMap(manager, stage, rows, cols) {
  this._rows = rows;
  this._cols = cols;

  var textureNames = [
    "tile_empty.png",
    "tile_normal01.png",
    "tile_normal02.png",
    "tile_normal03.png",
    "tile_normal04.png",
    "tile_blink01.png",
    "tile_blink02.png",
    "tile_surprise01.png",
    "tile_surprise02.png"
  ];

  var textures = [];
  _.each(textureNames, function(element, index, list) {
    var tex = PIXI.Texture.fromFrame(element);
    textures.push(tex);
  });

  this._map = new Array(cols);
  for(var i = 0; i < cols; i++) {
    this._map[i] = new Array(rows);
    for(var j = 0; j < rows; j++) {
      this._map[i][j] = new Cell(manager, textures);

      this._map[i][j].movieclip.position.x = j * this._map[i][j].movieclip.width;
      this._map[i][j].movieclip.position.y = i * this._map[i][j].movieclip.height;

      stage.addChild(this._map[i][j].movieclip);
    }
  }
}

CellMap.prototype = {
  constructor: CellMap,

  update: function(delta) {

  }
};

module.exports = CellMap;
