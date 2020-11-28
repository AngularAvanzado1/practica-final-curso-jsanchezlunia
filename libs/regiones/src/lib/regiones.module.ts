import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionTemplateComponent } from './region-template/region-template.component';
import { UbicacionActualDirective } from './ubicacion-actual.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RegionTemplateComponent, UbicacionActualDirective],
  exports: [RegionTemplateComponent, UbicacionActualDirective],
})
export class RegionesModule {}
