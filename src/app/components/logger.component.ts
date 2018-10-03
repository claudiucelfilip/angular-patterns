import { Component, OnInit, Inject,Self, Input } from '@angular/core';



@Component({
    selector: 'logger',
    templateUrl: './logger.component.html'
})
export class LoggerComponent implements OnInit {
    @Input('key') resource;
    res;
    values = [];
    constructor(
        @Inject('ResourceFactory') private resourceFactory
    ){}

    ngOnInit() {
        this.res = this.resourceFactory(this.resource);
        this.res.select().subscribe(values => {
            this.values = values;
        })
    }
}