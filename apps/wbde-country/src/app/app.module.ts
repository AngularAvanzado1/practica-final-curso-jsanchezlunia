import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {CountryComponent, CountryModule} from '@pca-jsanchez/country';
import {createCustomElement} from '@angular/elements';
import 'zone.js';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CountryModule],
  entryComponents: [CountryComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(CountryComponent, {
      injector: this.injector
    });
    customElements.define('wbde-country', el);
  }
}
