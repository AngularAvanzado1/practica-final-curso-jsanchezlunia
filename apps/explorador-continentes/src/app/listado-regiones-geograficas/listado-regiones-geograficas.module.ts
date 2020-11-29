import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListadoRegionesGeograficasComponent} from './listado-regiones-geograficas.component';
import {RouterModule} from '@angular/router';
import {RegionComponent} from '../region/region.component';
import {RegionesModule} from '@pca-jsanchez/regiones';
import {ApiBancoMundialModule} from '../../../../../libs/shared/api-banco-mundial/src';

@NgModule({
  declarations: [ListadoRegionesGeograficasComponent, RegionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListadoRegionesGeograficasComponent
      }
    ]),
    ApiBancoMundialModule,
    RegionesModule
  ]
})
export class ListadoRegionesGeograficasModule { }
