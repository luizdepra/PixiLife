'use strict';

function BaseScene(manager) {
  this._manager = manager;

  this._stage = null;
}

BaseScene.prototype = {
  constructor: BaseScene,

  update: function(delta)
  {},

  render: function()
  {}
};

module.exports = BaseScene;
