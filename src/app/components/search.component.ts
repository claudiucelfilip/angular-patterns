import { Component, Self, Inject, OnInit, Input } from '@angular/core';

import { SongsService } from '../shared/songs.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    @Input('key') resource;
    res;
    constructor(
        private songs: SongsService,
        @Inject('ResourceFactory') private resourceFactory
    ) {
        
    }

    ngOnInit() {
        this.res = this.resourceFactory(this.resource);
        this.songs.tracks.subscribe(tracks => {
            console.log('send tracks');
            this.res.set('tracks', tracks);
        });
    }
}