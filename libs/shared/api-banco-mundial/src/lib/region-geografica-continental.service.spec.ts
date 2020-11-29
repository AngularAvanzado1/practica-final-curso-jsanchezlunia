import {TestBed, waitForAsync} from '@angular/core/testing';

import {
  ListadoRegionesGeograficasInterface,
  RegionGeograficaContinentalService
} from '@pca-jsanchez/shared/api-banco-mundial';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Observable} from 'rxjs';

describe('GIVEN: a RegionGeograficaContinentalService', () => {
  describe('WHEN: the ApiBancoMundialModule is compiled', () => {
    let service: RegionGeograficaContinentalService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      service = TestBed.inject(RegionGeograficaContinentalService);
    });

    it('THEN: should be created', () => {
      expect(service).toBeTruthy();
    });

    it(`THEN: should return an observable when call 'getRegionesGeograficasContinentales()'`, () => {
      const listadoRegiones: Observable<ListadoRegionesGeograficasInterface> = service.getRegionesGeograficasContinentales();
      expect(listadoRegiones).toBeInstanceOf(Observable);
    });

    // Ojo al async para ejecutar las llamadas asíncronas
    it(`THEN: should return expected values when call 'getRegionesGeograficasContinentales()'`, waitForAsync (() => {
      service.getRegionesGeograficasContinentales()
        .subscribe(result =>
          expect(result).toEqual([
            {page: "1", pages: "1", per_page: "50", total: "48"},
            [
              {id: "", code: "AFR", iso2code: "A9", name: "Africa"},
              {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
              {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
              {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
            ]
          ])
        );
      // mock del backend para no depender del servidor
      const httpMock = TestBed.inject(HttpTestingController);
      // esperar a que se llame a esta ruta
      const req = httpMock.expectOne('http://api.worldbank.org/v2/region/?format=json');
      // responder con esto
      req.flush([
        {page: "1", pages: "1", per_page: "50", total: "48"},
        [
          {id: "", code: "AFR", iso2code: "A9", name: "Africa"},
          {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
          {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
          {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
        ]
      ]);
      // comprobar que no hay más llamadas
      httpMock.verify();
    }));
  });
});
