import { Component, ChangeDetectionStrategy, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { SongsService } from './shared/songs.service';
import { MusicControlsComponent } from './components/music-controls.component';
import { BasicComponent } from './components/basic.component';
import { columnNameMappings } from './shared/column.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('extraRow', {read: ViewContainerRef}) extraRow: ViewContainerRef;
  columnNameMappings = Object.assign({}, columnNameMappings);

  constructor(public songs: SongsService, private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

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
