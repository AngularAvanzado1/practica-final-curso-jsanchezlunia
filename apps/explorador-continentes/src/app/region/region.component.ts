import {Component, Input, OnInit} from '@angular/core';
import {RegionGeograficaContinentalInterface} from '@pca-jsanchez/shared/api-banco-mundial';

@Component({
  selector: 'pca-explorador-continentes-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent implements OnInit {
  @Input() public region: RegionGeograficaContinentalInterface;
  constructor() { }

  ngOnInit(): void {
  }
}
