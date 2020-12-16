import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListadoPaisesRegionInterface} from '@pca-jsanchez/shared/api-banco-mundial';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://api.worldbank.org/V2'

  constructor(private httpClient: HttpClient) {}

  public getCountryInfo(id: string): Observable<ListadoPaisesRegionInterface> {
    return this.httpClient.get<ListadoPaisesRegionInterface>(this.apiUrl + '/country/' + id + '?format=json');
  }
}
