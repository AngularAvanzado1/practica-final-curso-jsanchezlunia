import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RegionGeograficaContinentalInterface} from '@pca-jsanchez/shared/api-banco-mundial';
import {RegionesFacade} from '../region/store/regiones/regiones.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Component({
  selector: 'pca-explorador-continentes-listado-regiones-geograficas',
  templateUrl: './listado-regiones-geograficas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ListadoRegionesGeograficasComponent implements OnInit {
  public regiones$: Observable<RegionGeograficaContinentalInterface[]>;
  public currentDate = Date.now();
  constructor(private regionesFacade: RegionesFacade) { }

  ngOnInit(): void {
    this.regiones$ = this.regionesFacade.getRegionesList$();
    this.regionesFacade.loadRegiones();
  }

  public showCurrentDate(): boolean {
    return environment.showCurrentDate;
  }
}
