'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-acf58548.js');

const buttonCss = ":host ion-button{--background:var(--color-primary)}";

const OSUIButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  connectedCallback() {
    console.log('My button');
  }
  render() {
    return [
      index.h("ion-button", { expand: "full", shape: "round" }, " Custom Ionic Button")
    ];
  }
};
OSUIButton.style = buttonCss;

exports.osui_button = OSUIButton;

//# sourceMappingURL=osui-button.cjs.entry.js.map