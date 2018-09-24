import { Component, Input, OnInit, OnChanges, Host, Optional, ContentChild, TemplateRef, ElementRef, Inject, AfterContentInit } from '@angular/core';
import { tap, filter, withLatestFrom } from 'rxjs/operators';
import { TheadDirective } from '../shared/thead.directive';
import { TbodyDirective } from '../shared/tbody.directive';

import { TableServiceFactory, TableService } from '../shared/table.service';
import { restrictedColumns, filterRestrictedColumns } from '../shared/column.utils';
import { ResourceDirective } from '../shared/resource.directive';

@Component({
    selector: 'music-table',
    templateUrl: './table.component.html',
    providers: [{
        provide: TableServiceFactory,
        useFactory: TableServiceFactory
    }]
})
export class TableComponent implements OnInit, OnChanges, AfterContentInit {
    @Input('tracks') $tracks;
    state = {
        tracks: [],
        columns: [],
        filteredColumns: []
    };

    tableStore: TableService;
    @Input() tableKey;

    @ContentChild(TheadDirective, { read: TemplateRef }) tHeadTemplate;
    @ContentChild(TbodyDirective, { read: TemplateRef }) tBodyTemplate;

    constructor(
        @Inject(TableServiceFactory) private tableServiceFactory,
        @Host() @Optional() private res: ResourceDirective
    ) {}
    ngAfterContentInit () {
        console.log(this.tHeadTemplate);
        console.log(this.tBodyTemplate);
        console.log(this.res.data);
    }
    ngOnInit () {

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

    processState (tracks, restrictedColumns) {
        this.state.tracks = tracks;
        let trackColumns = Object.keys(tracks[0]);
        this.state.columns = trackColumns;
        this.state.filteredColumns = trackColumns.filter(filterRestrictedColumns(restrictedColumns));
        this.res.data.set(this.state.filteredColumns);
    }

    ngOnChanges (changes) {

    }
}