import { r as registerInstance, h } from './index-b220d619.js';

const buttonCss = ":host ion-button{--background:var(--color-primary)}";

const OSUIButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    console.log('My button');
  }
  render() {
    return [
      h("ion-button", { expand: "full", shape: "round" }, " Custom Ionic Button")
    ];
  }
};
OSUIButton.style = buttonCss;

export { OSUIButton as osui_button };

//# sourceMappingURL=osui-button.entry.js.map