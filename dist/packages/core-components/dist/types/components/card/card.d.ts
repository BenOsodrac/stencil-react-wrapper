import { ICard } from './cardInterface';
import { alignment, border } from '../../globalEnum';
export declare class OSUICard implements ICard {
  selfElement: HTMLElement;
  alignment: alignment;
  reversecolumn: boolean;
  border: border;
  backgroundcolor: string;
  showheader: boolean;
  showContent: boolean;
  showFooter: boolean;
  alignmentChanged(newValue: alignment, oldValue?: alignment): void;
  reverseColumnChanged(newValue: boolean): void;
  borderChanged(newValue: string): void;
  backgroundChanged(newValue: string): void;
  reverseShowHeaderChanged(newValue: boolean): void;
  connectedCallback(): void;
  render(): any[];
}
