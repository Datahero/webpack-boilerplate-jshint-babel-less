var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter; // use node EventEmitter

var dispatcher = require('../dispatcher');
var ACTIONS = require('../actions/actionsEnum');


var DemoStore = objectAssign({}, EventEmitter.prototype, {
  dispatchToken: dispatcher.register(function(payload) {
    switch (payload.action) {
      case ACTIONS.DEMO.PROVE_FLUX_LOADED:
        DemoStore.emit('change', payload.message);
        break;
    }
  })
});



module.exports = DemoStore;
