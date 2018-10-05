import { Component, Self, Inject, OnInit, Input } from '@angular/core';
import { SongsService } from '../shared/songs.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Input() tracks;
  @Input() columns;
  constructor(private songs: SongsService) {}

  ngOnInit() {
    this.songs.tracks.subscribe(tracks => {
      this.tracks.next(tracks);

      let columns = Object.keys(tracks[0]);
      this.columns.next(columns);
    });
  }
}
