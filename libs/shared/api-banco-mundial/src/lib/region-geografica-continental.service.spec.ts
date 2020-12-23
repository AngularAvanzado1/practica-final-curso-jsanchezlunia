import {TestBed, waitForAsync} from '@angular/core/testing';

import {
  ListadoRegionesGeograficasInterface,
  RegionGeograficaContinentalService
} from '@pca-jsanchez/shared/api-banco-mundial';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Observable} from 'rxjs';

describe(`GIVEN: a service for API HTTP requests, RegionGeograficaContinentalService`, () => {
  let service: RegionGeograficaContinentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegionGeograficaContinentalService);
  });

  describe(`WHEN: the service is injected`, () => {
    it(`THEN: should be created`, () => {
      expect(service).toBeTruthy();
    });
  });

  describe(`WHEN: the 'getRegionesGeograficasContinentales()' method is called`, () => {

    function mockHttpCall() {
      // mock del backend para no depender del servidor
      const httpMock = TestBed.inject(HttpTestingController);
      // esperar a que se llame a esta ruta
      const req = httpMock.expectOne('http://api.worldbank.org/v2/region/?format=json');
      // responder con esto
      req.flush([
        {page: "1", pages: "1", per_page: "50", total: "6"},
        [
          {id: "", code: "AFR", iso2code: "A9", name: "Africa"},
          {id: "", code: "ANR", iso2code: "L5", name: "Andean Region"},
          {id: "", code: "ARB", iso2code: "1A", name: "Arab World"},
          {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
          {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
          {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
        ]
      ]);
      // comprobar que no hay más llamadas
      httpMock.verify();
    }

    it(`THEN: should return an observable`, () => {
      const listadoRegiones: Observable<ListadoRegionesGeograficasInterface> = service.getRegionesGeograficasContinentales();
      expect(listadoRegiones).toBeInstanceOf(Observable);
    });

    // Ojo al async para ejecutar las llamadas asíncronas
    it(`THEN: should return expected values`, waitForAsync (() => {

      service.getRegionesGeograficasContinentales()
        .subscribe(listadoRegiones => {
          expect(listadoRegiones).toEqual({
            infoPageResults: {page: "1", pages: "1", per_page: "50", total: "6"},
            regionesGeograficasContinentales: [
              {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
              {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
              {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
            ]
          })
        });

      mockHttpCall();
    }));

    it(`THEN: should return only regions with id`, waitForAsync (() => {

      service.getRegionesGeograficasContinentales()
        .subscribe(listadoRegiones => {
          expect(listadoRegiones.regionesGeograficasContinentales).toHaveLength(3);
          expect(listadoRegiones.regionesGeograficasContinentales.filter(region => !region.id)).toHaveLength(0);
        });

      mockHttpCall();
    }));
  });
});
