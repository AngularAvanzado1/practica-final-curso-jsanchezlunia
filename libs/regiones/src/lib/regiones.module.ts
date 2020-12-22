import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionTemplateComponent } from './region-template/region-template.component';
import { UbicacionActualDirective } from './ubicacion-actual.directive';
import { PaisTemplateComponent } from './pais-template/pais-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegionTemplateComponent, UbicacionActualDirective, PaisTemplateComponent],
  exports: [RegionTemplateComponent, UbicacionActualDirective, PaisTemplateComponent],
})
export class RegionesModule {}
