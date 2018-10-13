import { Component, Input, OnInit, OnChanges, Host, Optional, ContentChild, TemplateRef, ElementRef, Inject, AfterContentInit, Self } from '@angular/core';
@Component({
  selector: 'music-td',
  templateUrl: './td.component.html'
})
export class TdComponent {
  @Input() column;
  @Input() track;
}
