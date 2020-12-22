import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RegionesActions from './regiones.actions';
import {RegionGeograficaContinentalService} from '@pca-jsanchez/shared/api-banco-mundial';



@Injectable()
export class RegionesEffects {

  loadRegiones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegionesActions.loadRegiones),
      concatMap(() =>
        this.regionGeograficaContinentalService.getRegionesGeograficasContinentales()
          .pipe(
            map(listadoRegiones => RegionesActions.loadRegionesSuccess({
              regiones: listadoRegiones.regionesGeograficasContinentales
            })),
            catchError(error => of(RegionesActions.loadRegionesFailure({ error })))
          )
      )
    );
  });

  $loadRegion = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegionesActions.loadRegion),
      concatMap(({code}) =>
        this.regionGeograficaContinentalService.getRegionInfo(code)
          .pipe(
            map(region => RegionesActions.loadRegionSuccess({region})),
            catchError(error => of(RegionesActions.loadRegionFailure({ error })))
          )
      )
    )
  })

  $loadPaisesRegion = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegionesActions.loadPaisesRegion),
      concatMap(({code}) =>
        {
          return this.regionGeograficaContinentalService.getPaisesRegion(code)
            .pipe(
              map(listadoPaises => RegionesActions.loadPaisesRegionSuccess({
                listadoPaises: listadoPaises.paises
              })),
              catchError(error => of(RegionesActions.loadPaisesRegionFailure({ error })))
            )
        }
      )
    );
  });

  constructor(private actions$: Actions,
              private regionGeograficaContinentalService: RegionGeograficaContinentalService) {}
}
