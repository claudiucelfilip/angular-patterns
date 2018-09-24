import { Component, Input, OnInit, OnChanges, ViewChild, ContentChild, TemplateRef, ElementRef, Inject } from '@angular/core';
import { tap, filter, withLatestFrom } from 'rxjs/operators';
import { TableServiceFactory, TableService } from '../shared/table.service';
import { restrictedColumns, filterRestrictedColumns } from '../shared/column.utils';

@Component({
    selector: 'music-table',
    templateUrl: './table.component.html',
    providers: [{
        provide: TableServiceFactory,
        useFactory: TableServiceFactory
    }]
})
export class TableComponent implements OnInit, OnChanges {
    @Input('tracks') $tracks;
    state = {
        tracks: [],
        columns: [],
        filteredColumns: []
    };

    tableStore: TableService;
    @Input() tableKey;

    @ContentChild('thead') tHeadTemplate: TemplateRef<any>;
    @ContentChild('tbody') tBodyTemplate: TemplateRef<any>;

    constructor(@Inject(TableServiceFactory) private tableServiceFactory) {}

    ngOnInit() {
        this.tableStore = new this.tableServiceFactory(this.tableKey);
        this.$tracks
            .pipe(withLatestFrom(this.tableStore.restrictedColumns))
            .subscribe(([tracks, restrictedColumns]) => {
                tracks = tracks.slice(0, 3);
                this.processState(tracks, restrictedColumns);
            });
        
        this.tableStore.restrictedColumns
            .pipe(filter(() => this.state.tracks.length !== 0))
            .subscribe(restrictedColumns => {
                this.processState(this.state.tracks, restrictedColumns);
            })
    }

    processState(tracks, restrictedColumns) {
        this.state.tracks = tracks;
        let trackColumns = Object.keys(tracks[0]);
        this.state.columns = trackColumns;
        this.state.filteredColumns = trackColumns.filter(filterRestrictedColumns(restrictedColumns));
    }

    ngOnChanges(changes) {
        
    }
}