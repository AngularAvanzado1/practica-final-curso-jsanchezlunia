import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegiones from './regiones.reducer';
import {State} from './regiones.reducer';

export const selectRegionesState = createFeatureSelector<fromRegiones.State>(
  fromRegiones.regionesFeatureKey
);

export const getRegionesList = createSelector(
  selectRegionesState,
  (state: State) => state.regiones
)

export const getRegion = createSelector(
  selectRegionesState,
  (state: State) => state.region
)

export const getListadoPaises = createSelector(
  selectRegionesState,
  (state: State) => state.listadoPaises
)
