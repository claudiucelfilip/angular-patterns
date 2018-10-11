import { Component, Input, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { TheadDirective } from '../shared/thead.directive';
import { TbodyDirective } from '../shared/tbody.directive';
import { filterRestrictedColumns } from '../shared/column.utils';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'music-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input() columns;
  @Input() tracks;
  @Input() restrictedColumns;
  context: any = {};

  @ContentChild(TheadDirective, { read: TemplateRef }) tHeadTemplate;
  @ContentChild(TbodyDirective, { read: TemplateRef }) tBodyTemplate;

  ngOnInit() {
    this.context.columns = combineLatest(this.columns, this.restrictedColumns)
      .pipe(
        map(([columns, restrictedColumns]) => {
          return columns.filter(filterRestrictedColumns(restrictedColumns));
        }),
      );

    this.context.tracks = this.tracks.pipe(map((tracks:any) => tracks.slice(0, 3)));
  }
}
