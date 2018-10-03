import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, share } from 'rxjs/operators';

interface SongsResponse {
    Tracks?: Array<any>
}
@Injectable()
export class SongsService {
    songs: Subject<any> = new Subject<any>();
    state = 'pending';
    tracks: Observable<any[]>;

    constructor(private http: Http) {
        this.fetchSongs();
        this.tracks = this.songs.pipe(
            map(res => res.Tracks),
            share()
        );
    }

    fetchSongs () {
        this.state = 'pending';
        this.http.get('http://hidden-haze-247.getsandbox.com/songs')
            .subscribe(res => {
                this.songs.next(res.json());
                this.state = 'done';
            });
    }
}