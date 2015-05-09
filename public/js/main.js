window.onload = function() {

  // initialize flux
  var dispatcher = require('./dispatcher');
  var ACTIONS = require('./actions/actionsEnum');
  var DemoStore = require('./stores/DemoStore');

  // TODO: Do this with a react component
  DemoStore.on('change', function(message) {
    document.getElementById('flux-target').innerHTML = message;
  });

  // Trigger a starting action to show that flux works
  dispatcher.dispatch({action: ACTIONS.DEMO.PROVE_FLUX_LOADED, message: '✓ Flux has been loaded successfully!'});
};
