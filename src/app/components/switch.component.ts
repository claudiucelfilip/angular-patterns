import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { WithToggleDirective } from '../shared/with-toggle.directive';

@Component({
    selector: 'switch',
    template: `<div [ngClass]="switchClass">
        <input type="checkbox" #checkbox ng-checked="checked"/>
        <span class="switch__text">
            <ng-content></ng-content>
        </span>
    </div>`,
    styleUrls: ['./switch.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnChanges {
    @Input() checked;
    baseSwitchClass = 'switch';
    switchClass: string;

    constructor(public withToggle: WithToggleDirective) {
    }
    
    ngOnChanges(changes: SimpleChanges) {
        this.switchClass = this.baseSwitchClass + (this.withToggle.toggle.checked === true ? ' switch--on': '');
    }
}
