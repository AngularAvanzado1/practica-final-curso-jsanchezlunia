import {createAction, props} from '@ngrx/store';
import {
  ListadoPaisesRegionInterface, PaisInterface,
  RegionGeograficaContinentalInterface
} from '@pca-jsanchez/shared/api-banco-mundial';
import {strictEqual} from 'assert';

export const loadRegiones = createAction(
  '[Regiones] Load Regiones'
);

export const loadRegionesSuccess = createAction(
  '[Regiones] Load Regiones Success',
  props<{ regiones: RegionGeograficaContinentalInterface[] }>()
);

export const loadRegionesFailure = createAction(
  '[Regiones] Load Regiones Failure',
  props<{ error: any }>()
);

export const loadRegion = createAction(
  '[Region] Load Region',
  props<{ code: string }>()
);

export const loadRegionSuccess = createAction(
  '[Region] Load Region Success',
  props<{ region: RegionGeograficaContinentalInterface }>()
);

export const loadRegionFailure = createAction(
  '[Region] Load Region Failure',
  props<{ error: any }>()
);

export const loadPaisesRegion = createAction(
  '[Países] Load Países de una región',
  props<{ code: string }>()
);

export const loadPaisesRegionSuccess = createAction(
  '[Países] Load Países de una región Success',
  props<{ listadoPaises: PaisInterface[]}>()
);

export const loadPaisesRegionFailure = createAction(
  '[Países] Load Países de una región Failure',
  props<{ error: any }>()
);
