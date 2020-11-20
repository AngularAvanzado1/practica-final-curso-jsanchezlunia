import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoRegionesGeograficasComponent } from './listado-regiones-geograficas/listado-regiones-geograficas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListadoRegionesGeograficasComponent,
  },
  {
    path: 'region',
    component: ListadoRegionesGeograficasComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
