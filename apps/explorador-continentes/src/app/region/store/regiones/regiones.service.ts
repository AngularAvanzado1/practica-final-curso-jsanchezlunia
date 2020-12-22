import {Injectable} from '@angular/core';
import {State, Store} from '@ngrx/store';
import * as RegionesActions from './regiones.actions';
import * as RegionesSelectors from './regiones.selectors';
import {RegionGeograficaContinentalInterface} from '@pca-jsanchez/shared/api-banco-mundial';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesFacade {

  constructor(private store: Store<RegionGeograficaContinentalInterface>,
              private state: State<any>) { }

  public loadRegiones() {
    this.store.dispatch(RegionesActions.loadRegiones());
  }

  public getRegionesList$(): Observable<RegionGeograficaContinentalInterface[]> {
    return this.store.select(RegionesSelectors.getRegionesList);
  }

  public getRegionCode() {
    return this.state.getValue().regiones.region.code;
  }

  public loadRegion(code: string) {
    this.store.dispatch(RegionesActions.loadRegion({code}));
  }

  public getRegion$(): Observable<RegionGeograficaContinentalInterface> {
    return this.store.select(RegionesSelectors.getRegion);
  }
}
