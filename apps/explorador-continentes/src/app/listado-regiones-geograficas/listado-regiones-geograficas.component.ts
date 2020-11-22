import { Component, OnInit } from '@angular/core';
import {
  RegionGeograficaContinentalInterface,
  RegionGeograficaContinentalService
} from '@practica-final-curso-angular-jsanchezlunia/shared/api-banco-mundial';

@Component({
  selector: 'pca-explorador-continentes-listado-regiones-geograficas',
  templateUrl: './listado-regiones-geograficas.component.html',
  styles: [
  ]
})
export class ListadoRegionesGeograficasComponent implements OnInit {
  public regiones: RegionGeograficaContinentalInterface[];
  constructor(private regionGeograficaContinentalService: RegionGeograficaContinentalService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.regionGeograficaContinentalService.getRegionesGeograficasContinentales()
      .toPromise().then(listadoRegiones => {
        this.regiones = listadoRegiones[1].filter(region => region.id);
      });
  }
}
