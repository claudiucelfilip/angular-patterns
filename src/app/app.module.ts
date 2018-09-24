import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './components/switch.component';
import { ToggleComponent } from './components/toggle.component';
import { ToggleOnComponent } from './components/toggle-on.component';
import { ToggleOffComponent } from './components/toggle-off.component';
import { OtherComponent } from './components/other.component';
import { AppComponent } from './app.component';
import { ToggleDirective }  from './shared/toggle.directive';
import { WithToggleDirective }  from './shared/with-toggle.directive';
import { SongsService } from './shared/songs.service';
import { TableService, TableServiceFactory } from './shared/table.service';
import { TableComponent } from './components/table.component';
import { EditColumnsComponent } from './components/edit-columns.component';
import { MusicControlsComponent } from './components/music-controls.component';
import { MobxAngularModule } from 'mobx-angular';
import { BasicComponent } from './components/basic.component';
import { MapperPipe } from './shared/mapper.pipe';
import { MapPipe } from './shared/map.pipe';
import { HttpModule } from '@angular/http';
import { TheadDirective } from './shared/thead.directive';
import { TbodyDirective } from './shared/tbody.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    ToggleComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    OtherComponent,
    ToggleDirective,
    WithToggleDirective,
    TableComponent,
    EditColumnsComponent,
    MusicControlsComponent,
    BasicComponent,
    TheadDirective,
    TbodyDirective,
    MapperPipe,
    MapPipe
  ],
  entryComponents: [MusicControlsComponent, BasicComponent],
  imports: [
    BrowserModule,
    MobxAngularModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    SongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
