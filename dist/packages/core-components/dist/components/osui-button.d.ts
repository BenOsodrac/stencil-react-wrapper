import type { Components, JSX } from "../types/components";

interface OsuiButton extends Components.OsuiButton, HTMLElement {}
export const OsuiButton: {
  prototype: OsuiButton;
  new (): OsuiButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
