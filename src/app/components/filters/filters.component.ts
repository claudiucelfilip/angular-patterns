import { Component, Self, Inject, OnInit, Input } from '@angular/core';
import { distinctUntilChanged, skip } from 'rxjs/operators';


@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() facetes;
  @Input() fields;

  submit () {
    
  }

  ngOnInit () {
    
  }
}
