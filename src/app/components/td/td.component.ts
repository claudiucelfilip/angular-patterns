import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'music-td',
  templateUrl: './td.component.html'
})
export class TdComponent {
  @Input() column;
  @Input() track;
}
