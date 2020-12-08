import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromRegiones from './store/regiones/regiones.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegionesEffects } from './store/regiones/regiones.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRegiones.regionesFeatureKey, fromRegiones.reducer),
    EffectsModule.forFeature([RegionesEffects])
  ]
})
export class RegionModule { }
