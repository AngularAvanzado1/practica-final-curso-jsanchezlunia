import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListadoPaisesRegionInterface, PaisInterface} from '@pca-jsanchez/shared/api-banco-mundial';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://api.worldbank.org/V2'

  constructor(private httpClient: HttpClient) {}

  public getCountryInfo(id: string): Observable<PaisInterface> {
    return this.httpClient.get<PaisInterface>(this.apiUrl + '/country/' + id + '?format=json')
      .pipe(map(listadoPaises => {
        return <PaisInterface>listadoPaises[1][0];
      }));
  }
}
