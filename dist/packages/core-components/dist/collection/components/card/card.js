import { h } from '@stencil/core';
import { CssClass, CssCustomProperties } from './enum';
import { setStyleAttribute } from '../../utils/utils';
export class OSUICard {
  constructor() {
    this.alignment = undefined;
    this.reversecolumn = undefined;
    this.border = undefined;
    this.backgroundcolor = undefined;
    this.showheader = undefined;
    this.showContent = undefined;
    this.showFooter = undefined;
  }
  alignmentChanged(newValue, oldValue) {
    if (oldValue !== undefined) {
      this.selfElement.classList.remove(CssClass.Modifier + oldValue);
    }
    else {
      this.selfElement.classList.add(CssClass.Modifier + newValue);
    }
  }
  reverseColumnChanged(newValue) {
    if (newValue === false) {
      this.selfElement.classList.remove(CssClass.IsReverseColumn);
    }
    else {
      this.selfElement.classList.add(CssClass.IsReverseColumn);
    }
  }
  borderChanged(newValue) {
    setStyleAttribute(this.selfElement, CssCustomProperties.Border, `var(--border-radius-${newValue})`);
  }
  backgroundChanged(newValue) {
    setStyleAttribute(this.selfElement, CssCustomProperties.BackgroundColor, newValue);
  }
  reverseShowHeaderChanged(newValue) {
    if (newValue === false) {
      this.selfElement.classList.remove(CssClass.ShowHeader);
    }
    else {
      this.selfElement.classList.add(CssClass.ShowHeader);
    }
  }
  connectedCallback() {
    this.alignmentChanged(this.alignment);
    this.reverseColumnChanged(this.reversecolumn);
    this.borderChanged(this.border);
    this.backgroundChanged(this.backgroundcolor);
    this.reverseShowHeaderChanged(this.showheader);
  }
  render() {
    return [
      h("header", { class: 'osui-card__header', part: 'header' }, h("slot", { name: 'header' }, "Insert Your Header")),
      h("div", { class: 'osui-card__content', part: 'content' }, h("slot", { name: 'content' }, "Insert Your Content")),
      h("footer", { class: 'osui-card__footer', part: 'footer' }, h("slot", { name: 'footer' }, "Insert Your Footer Content"))
    ];
  }
  static get is() { return "osui-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card.css"]
    };
  }
  static get properties() {
    return {
      "alignment": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "alignment",
          "resolved": "alignment.horizontal | alignment.vertical",
          "references": {
            "alignment": {
              "location": "import",
              "path": "../../globalEnum"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "alignment",
        "reflect": false
      },
      "reversecolumn": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "reversecolumn",
        "reflect": false
      },
      "border": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "border",
          "resolved": "border.rounded | border.sharp | border.softRounded",
          "references": {
            "border": {
              "location": "import",
              "path": "../../globalEnum"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "border",
        "reflect": false
      },
      "backgroundcolor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "backgroundcolor",
        "reflect": false
      },
      "showheader": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "showheader",
        "reflect": false
      },
      "showContent": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "show-content",
        "reflect": false
      },
      "showFooter": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "show-footer",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "selfElement"; }
  static get watchers() {
    return [{
        "propName": "alignment",
        "methodName": "alignmentChanged"
      }, {
        "propName": "reversecolumn",
        "methodName": "reverseColumnChanged"
      }, {
        "propName": "border",
        "methodName": "borderChanged"
      }, {
        "propName": "backgroundcolor",
        "methodName": "backgroundChanged"
      }, {
        "propName": "showheader",
        "methodName": "reverseShowHeaderChanged"
      }];
  }
}
//# sourceMappingURL=card.js.map
