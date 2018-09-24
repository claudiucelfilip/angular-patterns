import { Component, Input } from '@angular/core';
import { WithToggleDirective } from '../shared/with-toggle.directive';

@Component({
    selector: 'toggle-on',
    template: `<ng-content *ngIf="withToggle.toggle?.checked"></ng-content>`
})
export class ToggleOnComponent {
    constructor(public withToggle: WithToggleDirective) {

    }
}