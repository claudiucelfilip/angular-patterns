import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgResourceStoreModule } from '@claudiucelfilip/ng-resource-store';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { EditColumnsComponent } from './components/edit-columns/edit-columns.component';
import { SearchComponent } from './components/advanced-search/search.component';
import { MapperPipe } from './shared/mapper.pipe';
import { MapPipe } from './shared/map.pipe';
import { FiltersComponent } from './components/filters/filters.component';
import { TdComponent } from './components/table/td.component';
import { LoggerComponent } from './components/logger.component';
import { TbodyDirective } from './shared/tbody.directive';
import { TheadDirective } from './shared/thead.directive';
import { BasicComponent } from './components/basic.component';
import { MusicControlsComponent } from './components/music-controls.component';
import { restrictedColumns } from './shared/column.utils';
import { localStorageConnector, ResourceSubject } from '@claudiucelfilip/resource-store';
import { MusicSearchConnector } from './shared/connectors/music-search.connector';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';
import { MusicSearchFieldsConnector } from './shared/connectors/music-search-fields.connector';

export class DataResource {
  key: ResourceSubject<string>;
  id: ResourceSubject<string>;
  tracks: ResourceSubject<number[]>;
  columns: ResourceSubject<string[]>;

  constructor(options) {
    Object.assign(this, options);
  }
}

const resOptions = {
  connector: localStorageConnector,
  autoFetch: true,
  autoSave: true,
  initialState: {
    key: 'tracks-columns',
    tracks: [],
    columns: [],
    restrictedColumns: restrictedColumns
  }
};

const musicSearchFields = {
  autoFetch: true,
  autoSave: true,
  connectorFactory: {
    useClass: MusicSearchFieldsConnector,
    providers: [
      { provide: MusicSearchFieldsConnector, deps: [HttpClient] },
      { provide: HttpClient, deps: [HttpHandler] },
      { provide: HttpHandler, useValue: new HttpXhrBackend({ build: () => new XMLHttpRequest }) },
    ]
  }
};

const musicSearch = {
  connectorFactory: {
    useClass: MusicSearchConnector,
    providers: [
      { provide: MusicSearchConnector, deps: [HttpClient] },
      { provide: HttpClient, deps: [HttpHandler] },
      { provide: HttpHandler, useValue: new HttpXhrBackend({ build: () => new XMLHttpRequest }) },
    ]
  },
  initialState: {
    fields: {
      filters: [],
      lastFacetFilterField: '',
      method: 'search',
      page: 1,
      pageSize: 3,
      searchOptions: {"Catalogue":[],"Version":[],"LocalClient":[],"CountryAquisition":[],"Language":[],"RecordLabelGroup":[],"RecordLabel":[],"MusicControls":[],"OwnershipFrom":"","OwnershipTo":"","Divisions":[],"FirstReleasedFrom":"","FirstReleasedTo":"","AddedToLibraryFrom":"","AddedToLibraryTo":"","SelectedCharts":[],"ChartPeakPositionFrom":"","ChartPeakPositionTo":"","ChartYearFrom":"","ChartYearTo":"","SearchWithin":{"SongTitle":true,"AlbumTitle":false,"Artist":true,"Writer":true,"PIPSCode":true,"Lyrics":false,"SongNotes":false},"BPMFrom":1,"BPMTo":300,"LocalClientQuery":""},
      searchTerm: '',
      sortDir: 'desc',
      sortField: 'CreatedDate',
    },
    Tracks: [],
    loading: false
  }
};


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    TableComponent,
    MusicControlsComponent,
    EditColumnsComponent,
    SearchComponent,
    FiltersComponent,
    TdComponent,
    MapperPipe,
    DropdownComponent,
    MapPipe,
    LoggerComponent,
    TbodyDirective,
    TheadDirective
  ],
  entryComponents: [MusicControlsComponent, BasicComponent],
  imports: [
    BrowserModule,
    NgResourceStoreModule.forStores({
      'music-table-1': resOptions,
      'music-table-2': resOptions,
      'music-search': musicSearch,
      'music-search-fields': musicSearchFields
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
