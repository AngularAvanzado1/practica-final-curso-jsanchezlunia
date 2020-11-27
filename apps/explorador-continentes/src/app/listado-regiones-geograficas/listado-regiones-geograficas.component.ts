import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {
  RegionGeograficaContinentalInterface,
  RegionGeograficaContinentalService
} from '@practica-final-curso-angular-jsanchezlunia/shared/api-banco-mundial';

@Component({
  selector: 'pca-explorador-continentes-listado-regiones-geograficas',
  templateUrl: './listado-regiones-geograficas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ListadoRegionesGeograficasComponent implements OnInit {
  public regiones$: RegionGeograficaContinentalInterface[];
  constructor(private regionGeograficaContinentalService: RegionGeograficaContinentalService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.regionGeograficaContinentalService.getRegionesGeograficasContinentales()
      .subscribe(listadoRegiones => {
        this.regiones$ = listadoRegiones[1].filter(region => region.id);
        this.cdr.detectChanges();
      })
  }
}
