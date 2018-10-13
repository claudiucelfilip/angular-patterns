import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
    @Input() items;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    onChangeHandler(event, item) {
        const checked = event.target.checked;
        item.value = checked;
        this.items.next([...this.items.value, item]);
    }

    getCheckboxId(index, column) {
        return `dropdown${index}${column}`;
    }
}
