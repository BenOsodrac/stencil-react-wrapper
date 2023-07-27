'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-acf58548.js');
const utils = require('./utils-9d8b76a4.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return utils.format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;

//# sourceMappingURL=my-component.cjs.entry.js.map