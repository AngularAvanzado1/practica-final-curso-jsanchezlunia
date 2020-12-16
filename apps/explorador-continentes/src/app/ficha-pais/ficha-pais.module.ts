import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FichaPaisComponent} from './ficha-pais.component';
import {RouterModule} from '@angular/router';
import {CountryModule} from '@pca-jsanchez/country';


@NgModule({
  declarations: [FichaPaisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
          path: '',
          component: FichaPaisComponent
        }
    ]),
    CountryModule
  ],
  exports: [FichaPaisComponent]
})
export class FichaPaisModule { }
