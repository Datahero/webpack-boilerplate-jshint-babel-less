var EventEmitter = require('events').EventEmitter;

class Es6DemoClass extends EventEmitter {
  constructor(selector) {
    super();
    this.el = document.getElementById(selector);
  }

  updateMessage(msg="Oopo! ES6 defaults!") {
    this.el.innerHTML = msg;
    this.emit('a change event'); // demos EventEmitter inheritence (proof-of-concept -- no one's listening in this demo)
  }
}

module.exports = Es6DemoClass;
