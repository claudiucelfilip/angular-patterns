import { Directive } from '@angular/core';
import { ToggleDirective } from './toggle.directive';

@Directive({
    exportAs: 'wightToggle',
    selector: 'toggle, [toggle], [wightToggle]'
})
export class WithToggleDirective {
    constructor(public toggle: ToggleDirective) {}
}