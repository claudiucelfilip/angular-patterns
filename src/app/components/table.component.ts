import { Component, Input, OnInit, OnChanges, Host, Optional, ContentChild, TemplateRef, ElementRef, Inject, AfterContentInit, Self } from '@angular/core';
import { tap, filter, withLatestFrom } from 'rxjs/operators';
import { TheadDirective } from '../shared/thead.directive';
import { TbodyDirective } from '../shared/tbody.directive';
import { MusicControlsComponent } from './music-controls.component';
import { BasicComponent } from './basic.component';
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
export class TableComponent implements OnInit {
    @Input() columns;
    @Input() tracks;
    tracks$;
    columns$;
    filteredColumns$;
    res;
    
    @ContentChild(TheadDirective, { read: TemplateRef }) tHeadTemplate;
    @ContentChild(TbodyDirective, { read: TemplateRef }) tBodyTemplate;

    constructor(
        @Inject('ResourceFactory') private resourceFactory,
        @Inject('ResourceProxyFactory') private resourceProxyactory
    ) {}

    ngOnInit () {
        
    }
    private createSimpleNode(value) {
        return [document.createTextNode(value)];
    }

    mapTrackValue (track) {
        return (column) => {
          const output = track[column];
          switch (column) {
            case 'Artist':
              return {
                value: this.createSimpleNode(output.name),
                component: BasicComponent
              }
            case 'MusicControls':
              return {
                value: this.createSimpleNode(''),
                component: MusicControlsComponent
              };
            case 'Album':
              return {
                value: this.createSimpleNode(output && output.Title),
                component: BasicComponent
              }
            default:
              return {
                value: this.createSimpleNode(output),
                component: BasicComponent
              }
          }
        }
        
      }
}