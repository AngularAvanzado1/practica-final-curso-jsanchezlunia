import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ListadoPaisesRegionInterface} from '@practica-final-curso-angular-jsanchezlunia/shared/api-banco-mundial';
import {RegionGeograficaContinentalService} from '@practica-final-curso-angular-jsanchezlunia/shared/api-banco-mundial';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pca-explorador-continentes-listado-paises-region',
  templateUrl: './listado-paises-region.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class ListadoPaisesRegionComponent implements OnInit {

  public code: string;
  public paisesRegion$: Observable<ListadoPaisesRegionInterface>;

  constructor(private regionGeograficaContinentalService: RegionGeograficaContinentalService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code')
    this.getRegion(this.code);
  }

  private getRegion(code: string): void {
    this.paisesRegion$ = this.regionGeograficaContinentalService.getPaisesRegion(code);
  }
}
