import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ListadoPaisesRegionInterface, RegionGeograficaContinentalService} from '@pca-jsanchez/shared/api-banco-mundial';
import {PaisesFacade} from '../region/store/paises/paises.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'pca-explorador-continentes-listado-paises-region',
  templateUrl: './listado-paises-region.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class ListadoPaisesRegionComponent implements OnInit {

  public code: string;
  public listadoPaisesRegion$: Observable<ListadoPaisesRegionInterface>;

  constructor(/*private regionGeograficaContinentalService: RegionGeograficaContinentalService,*/
              private route: ActivatedRoute,
              private paisesFacade: PaisesFacade) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code')
    this.listadoPaisesRegion$ = this.paisesFacade.getListadoPaises$();
    //this.getRegion(this.code);
    this.paisesFacade.loadPaises(this.code);
  }

  /*private getRegion(code: string): void {
    this.listadoPaisesRegion$ = this.regionGeograficaContinentalService.getPaisesRegion(code);
  }*/
}
