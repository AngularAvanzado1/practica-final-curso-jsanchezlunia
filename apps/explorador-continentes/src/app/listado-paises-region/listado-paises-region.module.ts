import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListadoPaisesRegionComponent} from './listado-paises-region.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ListadoPaisesRegionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListadoPaisesRegionComponent
      }
    ])
  ]
})
export class ListadoPaisesRegionModule { }
