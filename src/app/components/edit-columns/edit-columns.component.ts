import { Component, Input, Inject, SimpleChanges, Host, Optional, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableService } from '../../shared/table.service';
import { filterRestrictedColumns, restrictedColumns} from '../../shared/column.utils';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
    selector: 'edit-columns',
    templateUrl: './edit-columns.component.html'
})
export class EditColumnsComponent {
    @Input()
    set columns(columns: BehaviorSubject<string[]>) {
      this.filteredColumns = columns.pipe(map(columns => columns.filter(filterRestrictedColumns(restrictedColumns))));
    };
    @Input() restrictedColumns;
    filteredColumns: Observable<string[]>;
    onChange(event, column) {
        const checked = event.target.checked;

        if (!checked) {
          this.restrictedColumns.next([...this.restrictedColumns.value, column]);
        } else {
          this.restrictedColumns.next(this.restrictedColumns.value.filter(item => item !== column));
        }
    }

    getCheckboxId(index, column) {
        return `editColumns${index}${column}`;
    }
}
