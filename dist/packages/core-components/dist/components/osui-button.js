import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const buttonCss = ":host ion-button{--background:var(--color-primary)}";

const OSUIButton = /*@__PURE__*/ proxyCustomElement(class OSUIButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  connectedCallback() {
    console.log('My button');
  }
  render() {
    return [
      h("ion-button", { expand: "full", shape: "round" }, " Custom Ionic Button")
    ];
  }
  static get style() { return buttonCss; }
}, [1, "osui-button"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["osui-button"];
  components.forEach(tagName => { switch (tagName) {
    case "osui-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OSUIButton);
      }
      break;
  } });
}

const OsuiButton = OSUIButton;
const defineCustomElement = defineCustomElement$1;

export { OsuiButton, defineCustomElement };

//# sourceMappingURL=osui-button.js.map