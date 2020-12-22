import {Action, createReducer, on} from '@ngrx/store';
import * as RegionesActions from './regiones.actions';
import {
  ListadoPaisesRegionInterface, PaisInterface,
  RegionGeograficaContinentalInterface
} from '@pca-jsanchez/shared/api-banco-mundial';

export const regionesFeatureKey = 'regiones';

export interface State {
  regiones: RegionGeograficaContinentalInterface[],
  code: string,
  region: RegionGeograficaContinentalInterface,
  listadoPaises: PaisInterface[]
}

export const initialState: State = {
  regiones: [],
  code: '',
  region: null,
  listadoPaises: []
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

  on(RegionesActions.loadRegion, state => state),
  on(RegionesActions.loadRegionSuccess,
    (state, {region}) => {
    return {
      ...state,
      region: {...region}
    }}
  ),
  on(RegionesActions.loadRegionFailure, (state, action) => state),

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
        listadoPaises: [...listadoPaises]
      }
    }
  ),
  on(RegionesActions.loadPaisesRegionFailure, (state, action) => state),
);

export function reducer(state: State | undefined, action: Action) {
  return regionesReducer(state, action);
}

