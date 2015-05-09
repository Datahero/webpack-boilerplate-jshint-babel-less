window.onload = function() {

  // initialize flux
  var dispatcher = require('./dispatcher');
  var ACTIONS = require('./actions/actionsEnum');
  var DemoStore = require('./stores/DemoStore');
  var Es6DemoClass = require('./Es6DemoClass');


  // TODO: Do this with a react component
  var es6DemoInstance = new Es6DemoClass('flux-target');
  DemoStore.on('change', function(message) {
    es6DemoInstance.updateMessage(message);
  });


  // Trigger a starting action to show that flux works
  dispatcher.dispatch({action: ACTIONS.DEMO.PROVE_FLUX_LOADED, message: '✓ Flux has been loaded successfully!'});


  // A test of did you actually start up webpack...  ; )
  console.log('psych! this is a lint violation! fix me first before starting up')
};
