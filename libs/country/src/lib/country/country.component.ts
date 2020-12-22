import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CountryService} from '../country.service';
import {PaisInterface} from '@pca-jsanchez/shared/api-banco-mundial';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class CountryComponent implements OnInit {

  @Input() public id: string;
  public country$: PaisInterface;

  constructor(private countryService: CountryService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.countryService.getCountryInfo(this.id).subscribe(countryInfo => {
      this.country$ = countryInfo;
      this.cdr.detectChanges();
    });
  }
}
