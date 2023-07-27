import { Component, Prop, Watch, h, Element } from '@stencil/core';
import { CssClass, CssCustomProperties } from './enum';
import { ICard } from './cardInterface';
import { alignment, border } from '../../globalEnum';
import { setStyleAttribute } from '../../utils/utils';

@Component({
    tag: 'osui-card',
    styleUrl: 'card.scss',
    shadow: true,
})

export class OSUICard implements ICard {

    @Element() selfElement: HTMLElement;

    @Prop() alignment: alignment;

    @Prop() reversecolumn: boolean;

    @Prop() border: border;

    @Prop() backgroundcolor: string;

    @Prop() showheader: boolean;

    @Prop() showContent: boolean;

    @Prop() showFooter: boolean;

    @Watch('alignment')
    alignmentChanged(newValue: alignment, oldValue?: alignment) {
        if (oldValue !== undefined) {
            this.selfElement.classList.remove(CssClass.Modifier + oldValue);
        } else {
            this.selfElement.classList.add(CssClass.Modifier + newValue);
        }
    }

    @Watch('reversecolumn')
    reverseColumnChanged(newValue: boolean) {
        if (newValue === false) {
            this.selfElement.classList.remove(CssClass.IsReverseColumn);
        } else {
            this.selfElement.classList.add(CssClass.IsReverseColumn);
        }
    }

    @Watch('border')
    borderChanged(newValue: string) {
        setStyleAttribute(
            this.selfElement,
            CssCustomProperties.Border,
            `var(--border-radius-${newValue})`
        );
    }

    @Watch('backgroundcolor')
    backgroundChanged(newValue: string) {
        setStyleAttribute(
            this.selfElement,
            CssCustomProperties.BackgroundColor,
            newValue
        );
    }

    @Watch('showheader')
    reverseShowHeaderChanged(newValue: boolean) {
        if (newValue === false) {
            this.selfElement.classList.remove(CssClass.ShowHeader);
        } else {
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
            <header class='osui-card__header' part='header'><slot name='header'>Insert Your Header</slot></header>,
            <div class='osui-card__content' part='content'><slot name='content'>Insert Your Content</slot></div>,
            <footer class='osui-card__footer' part='footer'><slot name='footer'>Insert Your Footer Content</slot></footer>
        ]
    }
}
