import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgResourceStoreModule } from 'ng-resource-store';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table.component';
import { IResourceOptions } from 'resource-store';
import { EditColumnsComponent } from './components/edit-columns.component';
import { SearchComponent } from './components/search.component';
import { MapperPipe } from './shared/mapper.pipe';
import { MapPipe } from './shared/map.pipe';
import { HttpModule } from '@angular/http';
import { LoggerComponent } from './components/logger.component';
import { TbodyDirective } from './shared/tbody.directive';
import { TheadDirective } from './shared/thead.directive';
import { BasicComponent } from './components/basic.component';
import { MusicControlsComponent } from './components/music-controls.component';
import { restrictedColumns } from './shared/column.utils';
import { localStorageConnector } from 'resource-store';


const resOptions: IResourceOptions = {
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


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    TableComponent,
    MusicControlsComponent,
    EditColumnsComponent,
    SearchComponent,
    MapperPipe,
    MapPipe,
    LoggerComponent,
    TbodyDirective,
    TheadDirective
  ],
  entryComponents: [MusicControlsComponent, BasicComponent],
  imports: [
    BrowserModule,
    HttpModule,
    NgResourceStoreModule.forStore({
      'music-table-1': resOptions,
      'music-table-2': resOptions
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
