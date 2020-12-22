import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListadoPaisesRegionComponent} from './listado-paises-region.component';
import {RouterModule} from '@angular/router';
import { ElementoListadoPaisesComponent } from './elemento-listado-paises/elemento-listado-paises.component';
import {RegionesModule} from '../../../../../libs/regiones/src';


@NgModule({
  declarations: [ListadoPaisesRegionComponent, ElementoListadoPaisesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ListadoPaisesRegionComponent
            }
        ]),
        RegionesModule
    ]
})
export class ListadoPaisesRegionModule { }
