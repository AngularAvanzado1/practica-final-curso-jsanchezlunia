import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CountryComponent],
  exports: [CountryComponent],
})
export class CountryModule {}
