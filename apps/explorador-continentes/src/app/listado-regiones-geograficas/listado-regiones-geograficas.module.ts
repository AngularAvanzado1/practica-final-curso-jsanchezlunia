import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListadoRegionesGeograficasComponent} from './listado-regiones-geograficas.component';
import {RouterModule} from '@angular/router';
import {RegionComponent} from '../region/region.component';
import {ApiBancoMundialModule} from '../../../../../libs/shared/api-banco-mundial/src';
import {RegionesModule} from '@pca-jsanchez/regiones';

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
