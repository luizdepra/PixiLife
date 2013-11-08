'use strict';

var PIXI = require('pixi');

function BaseEntity(manager, textures) {
  this._manager = manager;

  this.movieclip = new PIXI.MovieClip(textures);
  //this.movieclip.gotoAndStop(0);
}

BaseEntity.prototype = {
  constructor: BaseEntity,

  update: function(delta) {

  }
};

module.exports = BaseEntity;
