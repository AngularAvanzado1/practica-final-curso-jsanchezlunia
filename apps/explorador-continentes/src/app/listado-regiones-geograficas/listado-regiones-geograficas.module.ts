import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListadoRegionesGeograficasComponent} from './listado-regiones-geograficas.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ListadoRegionesGeograficasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListadoRegionesGeograficasComponent
      }
    ])
  ]
})
export class ListadoRegionesGeograficasModule { }
