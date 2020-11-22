import { NgModule } from '@angular/core';
import { ListadoRegionesGeograficasComponent } from './listado-regiones-geograficas/listado-regiones-geograficas.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./listado-regiones-geograficas/listado-regiones-geograficas.module').then(m => m.ListadoRegionesGeograficasModule),
  },
  {
    path: 'region',
    component: ListadoRegionesGeograficasComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
