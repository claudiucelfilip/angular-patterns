import { Component, Input } from '@angular/core';
import { WithToggleDirective } from '../shared/with-toggle.directive';

@Component({
    selector: 'toggle-off',
    template: `<ng-content *ngIf="!withToggle.toggle?.checked"></ng-content>`
})
export class ToggleOffComponent {
    constructor(public withToggle: WithToggleDirective) {

    }
}