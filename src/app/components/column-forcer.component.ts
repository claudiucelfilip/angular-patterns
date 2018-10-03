import { Component, Host } from '@angular/core';


@Component({
    selector: 'column-forcer',
    templateUrl:  './column-forcer.component.html'
})
export class ColumnForcerComponent {
    constructor() {
        
    }

    addColumn(event) {
        // const data = this.res.data.value;
        // this.res.set([...data, event.target.innerText]);
    }
}