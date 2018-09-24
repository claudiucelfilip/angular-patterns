import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Resource {
    id: number;
    key: string;
    private stream: BehaviorSubject<any>;

    constructor(key, http: Http) {
        this.id = Math.floor(Math.random() * 1000) + 1;
        this.key = key;
        let data = JSON.parse(localStorage[this.key] || '{}');
        this.stream = new BehaviorSubject(data);
    }

    set (value) {
        this.stream.next(value);
        localStorage[this.key] = JSON.stringify(this.stream.value);
    }


    get valueChanges (): Observable<any> {
        return this.stream;
    }

    get value() {
        return this.stream.value;
    }
}
