import {Component, Input, OnInit} from '@angular/core';
import {PaisInterface} from '@pca-jsanchez/shared/api-banco-mundial';

@Component({
  selector: 'pca-regiones-pais-template',
  templateUrl: './pais-template.component.html',
  styles: [
  ]
})
export class PaisTemplateComponent implements OnInit {

  @Input() pais: PaisInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
