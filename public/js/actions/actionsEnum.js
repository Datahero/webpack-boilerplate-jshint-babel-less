var _ = require('lodash');

// Add actions in enum structure here... values will be tokenized into 'true'
var ACTIONS = {
  DEMO: {
    PROVE_FLUX_LOADED: true
  }
};


(function buildActions(accKey, tree) {
  _.each(tree, function(value, nextKey) {
    if (_.isObject(value)) {
      buildActions(accKey + '.' + nextKey, value);
    } else {
      tree[nextKey] = accKey + '.' + nextKey;
    }
  });
})('ACTIONS', ACTIONS);

module.exports = ACTIONS;
