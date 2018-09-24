import { Directive } from '@angular/core';

@Directive({
    exportAs: 'toggle',
    selector: 'toggle, [toggle]'
})
export class ToggleDirective {
    checked: boolean = false;
}