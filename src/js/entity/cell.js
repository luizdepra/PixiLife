'use strict';

var BaseEntity = require('./base_entity');

function Cell(manager, textures) {
  BaseEntity.call(this, manager, textures);
}

Cell.prototype = {
  constructor: Cell,

  update: function(delta) {

  }
};

module.exports = Cell;
