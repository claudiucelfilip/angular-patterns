import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { TableService } from '../shared/table.service';
import { filterRestrictedColumns, restrictedColumns} from '../shared/column.utils';

@Component({
    selector: 'edit-columns',
    templateUrl: './edit-columns.component.html'
})
export class EditColumnsComponent implements OnChanges {
    @Input('table') tableStore: TableService;
    @Input() columns;

    filteredColumns = [];
    
    doNothing(event) {
        event.stopPropagation();
    }
    onChange(event, column) {
        // const filteredColumns = this.tableStore.columns.filter(column => column);
        const checked = event.target.checked;
        
        // if (filteredColumns.length < 8 || checked === false) {
            this.tableStore.setColumn(column, checked);
        // } else {
            // event.target.checked = !checked;
        // }
    }

    getCheckboxId(index, column) {
        return `editColumns${index}${column}${this.tableStore.tableKey}`;
    }
    ngOnChanges(changes: SimpleChanges) {
        this.filteredColumns = this.columns.filter(filterRestrictedColumns(restrictedColumns));
    }
}