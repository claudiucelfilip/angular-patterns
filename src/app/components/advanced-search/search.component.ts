import { Component, Self, Inject, OnInit, Input } from '@angular/core';
import { distinctUntilChanged, skip } from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() musicSearch;
  @Input() musicSearchFields;
  @Input() fields;
  @Input() tracks;
  @Input() columns;

  submit () {
    this.musicSearch.fetch(this.fields.value)
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.musicSearch.pending.next(false);
      });

    this.musicSearch.pending.next(true);
    this.fields.next(Object.assign({}, this.fields.value, {
      page: this.fields.value.page + 1
    }));
  }

  ngOnInit () {
    this.musicSearchFields
      .pipe(distinctUntilChanged())
      .subscribe(fields => {
        if (fields.Countries) {
          var countryAquisition = fields.Countries
            .filter(country => country.value === true)
            .map(country => ({
              'Name': country.Name,
              'Value': country.Code,
              'Selected': country.value,
              'Visible': true
            }));

          var searchOptions = Object.assign({}, this.fields.value.searchOptions, {
            CountryAquisition: countryAquisition
          });
          this.fields.next({ ...this.fields.value, searchOptions });
        }

        this.submit();
      });
  }
}
