import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListadoRegionesGeograficasInterface} from './listado-regiones-geograficas.interface';
import {ListadoPaisesRegionInterface} from './listado-paises-region.interface';
import {map} from 'rxjs/operators';
import {RegionGeograficaContinentalInterface} from './region-geografica-continental.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionGeograficaContinentalService {

  private apiUrl = 'http://api.worldbank.org/v2'

  constructor(private httpClient: HttpClient) { }

  public getRegionesGeograficasContinentales(): Observable<ListadoRegionesGeograficasInterface> {
    return this.httpClient.get<ListadoRegionesGeograficasInterface>(this.apiUrl + '/region/?format=json')
      .pipe(map(listadoRegiones => {
        return <ListadoRegionesGeograficasInterface>{
          infoPageResults: listadoRegiones[0],
          regionesGeograficasContinentales: listadoRegiones[1].filter(region => region.id)
        }
      }));
  }
  public getRegionInfo(code: string): Observable<RegionGeograficaContinentalInterface> {
    return this.httpClient.get<RegionGeograficaContinentalInterface>(this.apiUrl + '/region/'+code+'/?format=json')
      .pipe(map(listadoRegiones => {
        return <RegionGeograficaContinentalInterface>listadoRegiones[1][0];
      }));
  }
  public getPaisesRegion(code: string): Observable<ListadoPaisesRegionInterface> {
    return this.httpClient.get<ListadoPaisesRegionInterface>(this.apiUrl + '/region/'+code+'/country?per_page=1000&format=json')
      .pipe(map(listadoPaises => {
        return <ListadoPaisesRegionInterface>{
          infoPageResults: listadoPaises[0],
          paises: listadoPaises[1]
        }
      }));
  }
}
