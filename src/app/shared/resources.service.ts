import { Injectable } from '@angular/core';
import { Resource } from './resource.service';
import { Http } from '@angular/http';


export class Resources {
    static resources = {};

    static get(key, http) {
        Resources.resources[key] = Resources.resources[key] || new Resource(key, http);
        return Resources.resources[key];
    }
}
