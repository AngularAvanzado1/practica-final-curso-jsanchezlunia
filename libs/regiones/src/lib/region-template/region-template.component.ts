import {Component, Input, OnInit} from '@angular/core';
import {RegionGeograficaContinentalInterface} from '@pca-jsanchez/shared/api-banco-mundial';

@Component({
  selector: 'pca-regiones-region-template',
  templateUrl: './region-template.component.html',
  styles: [
  ]
})
export class RegionTemplateComponent implements OnInit {
  @Input() public region: RegionGeograficaContinentalInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
