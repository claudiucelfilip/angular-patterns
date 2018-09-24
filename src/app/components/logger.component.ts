import { Component, Host } from '@angular/core';
import { ResourceDirective } from '../shared/resource.directive';


@Component({
    selector: 'logger',
    templateUrl: './logger.component.html'
})
export class LoggerComponent {
    values = [];
    constructor(@Host() private res: ResourceDirective) {

    }

    ngOnInit() {
        this.res.data.valueChanges.subscribe(values => {
            this.values = values;
        })
    }
}