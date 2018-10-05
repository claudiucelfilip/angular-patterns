import { Component, OnInit, Inject,Self, Input } from '@angular/core';



@Component({
    selector: 'logger',
    templateUrl: './logger.component.html'
})
export class LoggerComponent {
    @Input()
    set target(target) {
      target.subscribe(values => console.log('logger', values));
    }
}
