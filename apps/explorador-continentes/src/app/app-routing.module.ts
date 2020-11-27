import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./listado-regiones-geograficas/listado-regiones-geograficas.module').then(m => m.ListadoRegionesGeograficasModule),
  },
  {
    path: 'region/:code',
    loadChildren: () => import('./listado-paises-region/listado-paises-region.module').then(m => m.ListadoPaisesRegionModule),
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
