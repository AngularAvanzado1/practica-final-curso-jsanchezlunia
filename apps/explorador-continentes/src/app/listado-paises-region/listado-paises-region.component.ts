import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {
  ListadoPaisesRegionInterface,
  PaisInterface, RegionGeograficaContinentalInterface,
  RegionGeograficaContinentalService
} from '@pca-jsanchez/shared/api-banco-mundial';
import {PaisesFacade} from '../region/store/paises/paises.service';
import {map} from 'rxjs/operators';
import {RegionesFacade} from '../region/store/regiones/regiones.service';

@Component({
  selector: 'pca-explorador-continentes-listado-paises-region',
  templateUrl: './listado-paises-region.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class ListadoPaisesRegionComponent implements OnInit {

  private code: string;
  public listadoPaisesRegion$: Observable<PaisInterface[]>;
  public region$: Observable<RegionGeograficaContinentalInterface>;

  constructor(/*private regionGeograficaContinentalService: RegionGeograficaContinentalService,*/
              private route: ActivatedRoute,
              private regionesFacade: RegionesFacade,
              private paisesFacade: PaisesFacade) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code')
    this.listadoPaisesRegion$ = this.paisesFacade.getListadoPaises$();
    this.region$ = this.regionesFacade.getRegion$();
    //this.getRegion(this.code);
    this.regionesFacade.loadRegion(this.code);
    this.paisesFacade.loadPaises(this.code);
  }

  /*private getRegion(code: string): void {
    this.listadoPaisesRegion$ = this.regionGeograficaContinentalService.getPaisesRegion(code);
  }*/
}
