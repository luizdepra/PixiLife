module.exports = function(){
  'use strict';

  var BaseScene = require('./base_scene');

  function GameScene(manager)
  {
      BaseScene.call(this, manager);

      this._scene = null;
  }

  GameScene.prototype = {
    constructor: GameScene,

    update: function(delta)
    {
      BaseScene.update.call(this, delta);
    },

    render: function()
    {
      //this._manager.renderer.render(this._scene, this._camera.internal);
    }
  };

  return GameScene;
};