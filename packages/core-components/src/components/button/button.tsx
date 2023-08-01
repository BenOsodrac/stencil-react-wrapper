import { Component, h } from '@stencil/core';

@Component({
    tag: 'osui-button',
    styleUrl: 'button.scss',
    shadow: true,
})

export class OSUIButton {
    connectedCallback() {
        console.log('My button');
    }

    render() {
        return [
            <ion-button expand="full" shape="round"> Custom Ionic Button</ion-button >
        ]
    }
}
