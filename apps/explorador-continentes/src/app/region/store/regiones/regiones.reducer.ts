import {Action, createReducer, on} from '@ngrx/store';
import * as RegionesActions from './regiones.actions';
import {
  ListadoPaisesRegionInterface,
  RegionGeograficaContinentalInterface
} from '@pca-jsanchez/shared/api-banco-mundial';

export const regionesFeatureKey = 'regiones';

export interface State {
  regiones: RegionGeograficaContinentalInterface[],
  code: string,
  listadoPaises: ListadoPaisesRegionInterface
}

export const initialState: State = {
  regiones: [],
  code: '',
  listadoPaises: {
    infoPageResults: {page: 0, pages: 0, per_page: 0, total: 0,},
    paises: []
  }
};


export const regionesReducer = createReducer(
  initialState,

  // Regiones Actions
  on(RegionesActions.loadRegiones, state => state),
  on(RegionesActions.loadRegionesSuccess,
    (state, {regiones}) => {
      return {
        ...state,
        regiones: [...regiones]
      }
    }
  ),
  on(RegionesActions.loadRegionesFailure, (state, action) => state),

  // Países Actions
  on(RegionesActions.loadPaisesRegion,
    (state, {code}) => {
      return {
        ...state,
        code: code
      }
    }
  ),
  on(RegionesActions.loadPaisesRegionSuccess,
    (state, {listadoPaises}) => {
      return {
        ...state,
        listadoPaises: { infoPageResults: listadoPaises[0], paises: listadoPaises[1] }
      }
    }
  ),
  on(RegionesActions.loadPaisesRegionFailure, (state, action) => state),
);

export function reducer(state: State | undefined, action: Action) {
  return regionesReducer(state, action);
}

