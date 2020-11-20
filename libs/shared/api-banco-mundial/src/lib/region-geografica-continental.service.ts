import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListadoRegionesGeograficasInterface } from './listado-regiones-geograficas.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionGeograficaContinentalService {
  private apiUrl = 'http://api.worldbank.org/v2'
  constructor(private httpClient: HttpClient) { }
  public getRegionesGeograficasContinentales(): Observable<ListadoRegionesGeograficasInterface> {
    return this.httpClient.get<ListadoRegionesGeograficasInterface>(this.apiUrl + '/region/?format=json');
  }
}
