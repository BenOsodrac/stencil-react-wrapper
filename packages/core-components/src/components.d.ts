/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { alignment, border } from "./globalEnum";
export { alignment, border } from "./globalEnum";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface OsuiButton {
    }
    interface OsuiCard {
        "alignment": alignment;
        "backgroundcolor": string;
        "border": border;
        "reversecolumn": boolean;
        "showContent": boolean;
        "showFooter": boolean;
        "showheader": boolean;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLOsuiButtonElement extends Components.OsuiButton, HTMLStencilElement {
    }
    var HTMLOsuiButtonElement: {
        prototype: HTMLOsuiButtonElement;
        new (): HTMLOsuiButtonElement;
    };
    interface HTMLOsuiCardElement extends Components.OsuiCard, HTMLStencilElement {
    }
    var HTMLOsuiCardElement: {
        prototype: HTMLOsuiCardElement;
        new (): HTMLOsuiCardElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "osui-button": HTMLOsuiButtonElement;
        "osui-card": HTMLOsuiCardElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface OsuiButton {
    }
    interface OsuiCard {
        "alignment"?: alignment;
        "backgroundcolor"?: string;
        "border"?: border;
        "reversecolumn"?: boolean;
        "showContent"?: boolean;
        "showFooter"?: boolean;
        "showheader"?: boolean;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "osui-button": OsuiButton;
        "osui-card": OsuiCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "osui-button": LocalJSX.OsuiButton & JSXBase.HTMLAttributes<HTMLOsuiButtonElement>;
            "osui-card": LocalJSX.OsuiCard & JSXBase.HTMLAttributes<HTMLOsuiCardElement>;
        }
    }
}
