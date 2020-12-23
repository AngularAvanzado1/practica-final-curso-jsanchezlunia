import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegionesFacade} from '../region/store/regiones/regiones.service';

@Component({
  selector: 'pca-explorador-continentes-ficha-pais',
  templateUrl: './ficha-pais.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class FichaPaisComponent implements OnInit {

  public countryId: string;
  private regionCode: string;

  constructor(private route: ActivatedRoute,
              private regionesFacade: RegionesFacade) { }

  ngOnInit(): void {
    this.countryId = this.route.snapshot.paramMap.get('id');
    this.regionesFacade.getRegion$()
      .subscribe(region => this.regionCode = region.code);
  }

  public getBackUrl(): string {
    return this.regionCode ? '/region/' + this.regionCode : '/';
  }
}
