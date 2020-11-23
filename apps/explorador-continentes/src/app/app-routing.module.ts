import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {PaginaRegionComponent} from './pagina-region/pagina-region.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./listado-regiones-geograficas/listado-regiones-geograficas.module').then(m => m.ListadoRegionesGeograficasModule),
  },
  {
    path: 'region/:code',
    component: PaginaRegionComponent,
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
