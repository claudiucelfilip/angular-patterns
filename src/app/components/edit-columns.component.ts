import { Component, Input, Inject, SimpleChanges, Host, Optional, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableService } from '../shared/table.service';
import { filterRestrictedColumns, restrictedColumns} from '../shared/column.utils';


@Component({
    selector: 'edit-columns',
    templateUrl: './edit-columns.component.html'
})
export class EditColumnsComponent implements OnInit {
    @Input('key') resource;

    columns$;
    filteredColumns$;
    columns;
    res;
    filteredColumns = [];
    constructor(
        @Inject('ResourceFactory') private resourceFactory
    ) {}
    
    doNothing(event) {
        event.stopPropagation();
    }

    ngOnInit() {
        this.res = this.resourceFactory(this.resource);
        this.columns$ = this.res.select('columns');
        this.filteredColumns$ = this.res.select('filteredColumns');

        this.filteredColumns$.subscribe(filteredColumns => this.filteredColumns = filteredColumns);
    }

    onChange(event, column) {
        const checked = event.target.checked;
        
        const filteredColumns = Object.assign({}, this.filteredColumns, {
            [column]: checked
        });
        
        this.res.set('filteredColumns', filteredColumns);
    }

    getCheckboxId(index, column) {
        return `editColumns${index}${column}${this.res.key}`;
    }
}