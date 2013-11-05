module.exports = function(){
  'use strict';

  function BaseScene(manager) {
    this._manager = manager;

    this._scene = null;
  }

  BaseScene.prototype = {
    constructor: BaseScene,

    update: function(delta)
    {
      console.log('base');
    },

    render: function()
    {}
  };

  return BaseScene;
};
