import {Component, Input, OnInit} from '@angular/core';
import {CountryService} from '../country.service';
import {PaisInterface} from '@pca-jsanchez/shared/api-banco-mundial';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {

  @Input() public id: string;
  public country: PaisInterface;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountryInfo(this.id).subscribe(countryInfo => {
      this.country = countryInfo[1][0];
    });
  }
}
