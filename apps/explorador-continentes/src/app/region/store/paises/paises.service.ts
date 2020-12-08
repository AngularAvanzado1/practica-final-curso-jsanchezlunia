import { Injectable } from '@angular/core';
import {ListadoPaisesRegionInterface, PaisInterface} from '@pca-jsanchez/shared/api-banco-mundial';
import {Store} from '@ngrx/store';
import * as PaisesActions from '../regiones/regiones.actions';
import * as PaisesSelectors from '../regiones/regiones.selectors';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesFacade {

  constructor(private store: Store<PaisInterface>) { }

  public loadPaises(code: string) {
    this.store.dispatch(PaisesActions.loadPaisesRegion({code}))
  }

  public getListadoPaises$(): Observable<ListadoPaisesRegionInterface> {
    return this.store.select(PaisesSelectors.getListadoPaises);
  }
}
