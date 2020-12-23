import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PaisInterface, RegionGeograficaContinentalInterface} from '@pca-jsanchez/shared/api-banco-mundial';
import {PaisesFacade} from '../region/store/paises/paises.service';
import {RegionesFacade} from '../region/store/regiones/regiones.service';

@Component({
  selector: 'pca-explorador-continentes-listado-paises-region',
  templateUrl: './listado-paises-region.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ListadoPaisesRegionComponent implements OnInit {
  private code: string;
  public listadoPaisesRegion$: Observable<PaisInterface[]>;
  public region$: Observable<RegionGeograficaContinentalInterface>;
  constructor(private route: ActivatedRoute,
              private regionesFacade: RegionesFacade,
              private paisesFacade: PaisesFacade) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code')

    this.region$ = this.regionesFacade.getRegion$();
    this.listadoPaisesRegion$ = this.paisesFacade.getListadoPaises$();

    this.regionesFacade.loadRegion(this.code);
    this.paisesFacade.loadPaises(this.code);
  }
}
