import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {}

  searchCountry(query: string): Observable<any> {
    return this.httpClient
      .get<any>('https://restcountries.eu/rest/v2/name/france?fullText=true')
      .pipe(shareReplay(1));
  }
}
