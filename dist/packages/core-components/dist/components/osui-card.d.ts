import type { Components, JSX } from "../types/components";

interface OsuiCard extends Components.OsuiCard, HTMLElement {}
export const OsuiCard: {
  prototype: OsuiCard;
  new (): OsuiCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
