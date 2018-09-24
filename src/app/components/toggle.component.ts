import { Component, ViewChildren } from '@angular/core';
import { ToggleOffComponent } from './toggle-off.component';
import { ToggleOnComponent } from './toggle-on.component';
@Component({
    selector: 'toggle',
    template: `<div (click)="checked = !checked">
        <switch [checked]="checked"></switch>
        <ng-content></ng-content>
    </div>`
})
export class ToggleComponent {
    checked = true;
    onClick(event) {
        this.checked = !this.checked;
    }
}