import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListadoRegionesGeograficasInterface} from './listado-regiones-geograficas.interface';
import {ListadoPaisesRegionInterface} from './listado-paises-region.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionGeograficaContinentalService {
  private apiUrl = 'http://api.worldbank.org/v2'
  constructor(private httpClient: HttpClient) { }
  public getRegionesGeograficasContinentales(): Observable<ListadoRegionesGeograficasInterface> {
    return this.httpClient.get<ListadoRegionesGeograficasInterface>(this.apiUrl + '/region/?format=json')
      //.pipe(map(listadoRegiones => listadoRegiones as ListadoRegionesGeograficasInterface))
      ;
  }
  public getPaisesRegion(code: string): Observable<ListadoPaisesRegionInterface> {
    return this.httpClient.get<ListadoPaisesRegionInterface>(this.apiUrl + '/region/'+code+'/country?per_page=1000&format=json');
  }
}
