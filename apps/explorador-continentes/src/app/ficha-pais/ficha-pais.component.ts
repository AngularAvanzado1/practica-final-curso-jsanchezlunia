import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegionesFacade} from '../region/store/regiones/regiones.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'pca-explorador-continentes-ficha-pais',
  templateUrl: './ficha-pais.component.html',
  styles: [
  ]
})
export class FichaPaisComponent implements OnInit {

  public countryId: string;
  public regionCode: Observable<string>;

  constructor(private route: ActivatedRoute,
              private regionesFacade: RegionesFacade) { }

  ngOnInit(): void {
    this.countryId = this.route.snapshot.paramMap.get('id');
    this.regionCode = this.regionesFacade.getRegionCode();
  }

  public getBackUrl(): string {
    return this.regionCode ? '/region/' + this.regionCode : '/';
  }
}
