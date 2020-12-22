import {Component, Input, OnInit} from '@angular/core';
import {PaisInterface} from '@pca-jsanchez/shared/api-banco-mundial';

@Component({
  selector: 'pca-explorador-continentes-elemento-listado-paises',
  templateUrl: './elemento-listado-paises.component.html',
  styles: [
  ]
})
export class ElementoListadoPaisesComponent implements OnInit {

  @Input() pais: PaisInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
