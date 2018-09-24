import { Directive, ElementRef, OnInit, AfterViewInit, OnChanges, Inject, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Resources } from './resources.service';
import { Resource } from './resource.service';

@Directive({
    selector: '[resource]',
    providers: [{
        provide: 'Resource',
        useFactory: (http: Http) => (resourceKey) => {
            return Resources.get(resourceKey, http);
        },
        deps: [Http]
    }]
})
export class ResourceDirective implements OnInit, AfterViewInit, OnChanges {
    @Input('resource') resourceKey;
    id: number;
    data: Resource;
    constructor(private el: ElementRef<any>, @Inject('Resource') private resourceFactory) {
        this.id = Math.floor(Math.random() * 1000) + 1;
    }

    ngOnInit() {
        console.log(this.resourceKey);
        this.data = this.resourceFactory(this.resourceKey);
    }

    ngAfterViewInit() {
        // debugger;
    }

    ngOnChanges() {
        // debugger;
    }
}