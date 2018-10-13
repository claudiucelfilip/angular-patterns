import { IResourceConnector, symbol } from '@claudiucelfilip/resource-store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchConnector implements IResourceConnector {
  defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json, text/javascript, */*; q=0.01'
  });

  constructor(private http: HttpClient) {}

  private generatePayload (params: Object): URLSearchParams {
    const output = new URLSearchParams();

    Object.keys(params).forEach(key => {
      let value = params[key];
      if (typeof params[key] === 'object') {
        value = JSON.stringify(value);
      }
      output.set(key, value);
    });

    return output;
  }

  
  save (resource) {
    return Promise.resolve();
  }

  fetch (fields) {
    const body: URLSearchParams = this.generatePayload(fields);

    return this.http.request(
      'POST',
      'http://localhost:8080/https://qa.umusicpub.com/uk/AsyncHandlers/MusicSearchHandler.aspx',
      {
        body: body.toString(),
        headers: this.defaultHeaders
      }
    )
    .toPromise();
  }
}


