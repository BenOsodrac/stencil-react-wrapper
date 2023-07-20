import { alignment } from '../../globalEnum';
import { IPattern } from "../../patternInterface";

export interface ICard extends IPattern {
    alignment: alignment;
    reversecolumn: boolean;
    border: string;
    backgroundcolor: string;
    showheader: boolean;
    showContent: boolean;
    showFooter: boolean;
}