'use strict';

function BaseEntity() {
    this._sprite = null;
}

BaseEntity.prototype = {
  constructor: BaseEntity,

  update: function(delta) {

  }
};

module.exports = BaseEntity;
