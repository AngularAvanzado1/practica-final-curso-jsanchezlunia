import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {
  RegionGeograficaContinentalInterface,
  RegionGeograficaContinentalService
} from '@pca-jsanchez/shared/api-banco-mundial';
import {RegionesFacade} from '../region/store/regiones/regiones.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'pca-explorador-continentes-listado-regiones-geograficas',
  templateUrl: './listado-regiones-geograficas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ListadoRegionesGeograficasComponent implements OnInit {
 // public regiones$: RegionGeograficaContinentalInterface[];
  public regiones$: Observable<RegionGeograficaContinentalInterface[]>;
  constructor(/*private regionGeograficaContinentalService: RegionGeograficaContinentalService,
              private cdr: ChangeDetectorRef,*/
              private regionesFacade: RegionesFacade) { }

  ngOnInit(): void {
    this.regiones$ = this.regionesFacade.getRegionesList$();
    this.loadData();
  }

  private loadData(): void {

    this.regionesFacade.loadRegiones();

    /*this.regionGeograficaContinentalService.getRegionesGeograficasContinentales()
      .subscribe(listadoRegiones => {
        this.regiones$ = listadoRegiones[1].filter(region => region.id);
        this.cdr.detectChanges();
      });*/
  }
}
