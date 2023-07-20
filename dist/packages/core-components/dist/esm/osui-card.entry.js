import { r as registerInstance, h, g as getElement } from './index-b220d619.js';
import { s as setStyleAttribute } from './utils-77aa6125.js';

/**
 * Card Enum for CSS Classes
 */
var CssClass;
(function (CssClass) {
  CssClass["Pattern"] = "osui-card";
  CssClass["Modifier"] = "osui-card--is-";
  CssClass["HeaderOverlay"] = "osui-card--is-overlay-";
  CssClass["HorizontalAlignment"] = "osui-card--is-horizontal";
  CssClass["VerticalAlignment"] = "osui-card--is-vertical";
  CssClass["IsReverseColumn"] = "osui-card--is-reverse-column";
  CssClass["ShowHeader"] = "osui-card--is-show-header";
  CssClass["ShowContent"] = "osui-card--is-show-content";
  CssClass["ShowFooter"] = "osui-card--is-show-footer";
  CssClass["BackgroundCover"] = "osui-card--is-background-cover";
})(CssClass || (CssClass = {}));
/**
 * Card CSS Variables
 */
var CssCustomProperties;
(function (CssCustomProperties) {
  CssCustomProperties["BackgroundColor"] = "--osui-card-background-color";
  CssCustomProperties["Border"] = "--osui-card-border-radius";
  CssCustomProperties["ImageURL"] = "--osui-card-image-url";
  CssCustomProperties["Position"] = "--osui-card-background-postion";
})(CssCustomProperties || (CssCustomProperties = {}));
/**
 * Card Properties
 */
var Properties;
(function (Properties) {
  Properties["Alignment"] = "alignment";
  Properties["Border"] = "border";
  Properties["ReverseColumns"] = "reverseColumns";
  Properties["ShowContent"] = "showContent";
  Properties["ShowFooter"] = "showFooter";
  Properties["ShowHeader"] = "showHeader";
  Properties["BackgroundColor"] = "backgroundColor";
})(Properties || (Properties = {}));

const cardCss = ":host{--border-radius-rounded:16px;--osui-card-background-color:var(--color-neutral-0);--osui-card-border-radius:var(--border-radius-soft);--osui-card-grid-template:\"header\"\n                             \"content\"\n                             \"footer\";background-color:var(--osui-card-background-color);background-image:var(--osui-card-image-url);background-repeat:no-repeat;border-radius:var(--osui-card-border-radius);display:grid;grid-template-areas:var(--osui-card-grid-template);grid-template-columns:minmax(auto, 1fr);height:100%;overflow:hidden}:host(.osui-card--is-horizontal){--osui-card-grid-template:\"header content\"\n                             \"footer content\"}:host(.osui-card--is-horizontal.osui-card--is-reverse-column){--osui-card-grid-template:\"content header\"\n                             \"content footer\"}:host(:not(.osui-card--is-show-header)){--osui-card-grid-template:\"content\"\n                              \"footer\"}:host(:not(.osui-card--is-show-header).osui-card--is-horizontal){--osui-card-grid-template:\"content footer\"}:host(:not(.osui-card--is-show-header).osui-card--is-horizontal.osui-card--is-reverse-column){--osui-card-grid-template:\"footer content\"}:host(:not(.osui-card--is-show-header)) .osui-card__header{display:none}.osui-card__header,.osui-card__footer{padding:var(--space-base)}.osui-card__header{grid-area:header}.osui-card__content{grid-area:content}.osui-card__footer{grid-area:footer}";

const OSUICard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get selfElement() { return getElement(this); }
  static get watchers() { return {
    "alignment": ["alignmentChanged"],
    "reversecolumn": ["reverseColumnChanged"],
    "border": ["borderChanged"],
    "backgroundcolor": ["backgroundChanged"],
    "showheader": ["reverseShowHeaderChanged"]
  }; }
};
OSUICard.style = cardCss;

export { OSUICard as osui_card };

//# sourceMappingURL=osui-card.entry.js.map