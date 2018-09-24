import { Component, Host } from '@angular/core';
import { ResourceDirective } from '../shared/resource.directive';

@Component({
    selector: 'column-forcer',
    templateUrl:  './column-forcer.component.html'
})
export class ColumnForcerComponent {
    constructor(@Host() private res: ResourceDirective) {
        
    }

    addColumn(event) {
        const data = this.res.data.value;
        this.res.data.set([...data, event.target.innerText]);
    }
}