import { h } from '@stencil/core';
export class OSUIButton {
  connectedCallback() {
    console.log('My button');
  }
  render() {
    return [
      h("ion-button", { expand: "full", shape: "round" }, " Custom Ionic Button")
    ];
  }
  static get is() { return "osui-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.css"]
    };
  }
}
//# sourceMappingURL=button.js.map
