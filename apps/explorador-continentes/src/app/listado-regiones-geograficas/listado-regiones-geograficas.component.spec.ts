import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListadoRegionesGeograficasComponent} from './listado-regiones-geograficas.component';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {
  RegionGeograficaContinentalInterface,
  RegionGeograficaContinentalService
} from '@pca-jsanchez/shared/api-banco-mundial';
import {RegionComponent} from '../region/region.component';
import {RegionesModule} from '@pca-jsanchez/regiones';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import * as RegionesSelectors from '../region/store/regiones/regiones.selectors';
import {By} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GIVEN: an ListadoRegionesGeograficasComponent declared in ListadoRegionesGeograficasModule', () => {
  describe('WHEN: the ListadoRegionesGeograficasModule is compiled', () => {
    let component: ListadoRegionesGeograficasComponent;
    let fixture: ComponentFixture<ListadoRegionesGeograficasComponent>;
    let regionGeograficaContinentalService: RegionGeograficaContinentalService;
    let store: MockStore;
    const initialState = {
      regiones: [],
      region: null,
      listadoPaises: []
    };

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule, RegionesModule, HttpClientTestingModule],
        declarations: [ListadoRegionesGeograficasComponent, RegionComponent],
        providers: [
          provideMockStore({ initialState }),
          /*{
            provide: RegionGeograficaContinentalService, useValue: {
              getRegionesGeograficasContinentales: () => of([
                //{page: "1", pages: "1", per_page: "50", total: "48"},
                [
                  //  {id: "", code: "AFR", iso2code: "A9", name: "Africa"},
                    {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
                    {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
                    {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
                ]
              ])
            }
          }*/
        ]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ListadoRegionesGeograficasComponent);
      component = fixture.componentInstance;

      regionGeograficaContinentalService = TestBed.inject(RegionGeograficaContinentalService);
      store = TestBed.inject(MockStore);

      fixture.detectChanges();
    });

    it('THEN: should create the Component', () => {
      expect(component).toBeTruthy();
    });

    it("THEN: should render 'List of identified geographic regions' in a H2 tag", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('List of identified geographic regions');
    });

    it('THEN: should call ngOnInit and get regions with id', done => {

      /*spyOn(regionGeograficaContinentalService, 'getRegionesGeograficasContinentales')
        .and
        .callThrough();*/

      RegionesSelectors.getRegionesList.setResult(
        <RegionGeograficaContinentalInterface[]> [
            { id: 1, code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
            { id: 2, code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
            { id: 3, code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
          ]
      );

      store.refreshState();
      fixture.detectChanges();

      // expect(regionGeograficaContinentalService.getRegionesGeograficasContinentales).toHaveBeenCalled();

      expect(
        fixture.debugElement.queryAll(By.css('pca-explorador-continentes-region')).length
      ).toBe(3);

      expect(component.regiones$).toBeInstanceOf(Observable);

      fixture.whenStable().then(() => {
        component.regiones$.subscribe(regiones => {
          expect(regiones).toHaveLength(3);
          expect(regiones.filter(region => !region.id)).toHaveLength(0);
          expect(regiones).toEqual([
            {id: 1, code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
            {id: 2, code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
            {id: 3, code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
          ]);
          done();
        });
      });
    });
  });
});
