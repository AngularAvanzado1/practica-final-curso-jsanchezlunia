import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListadoRegionesGeograficasComponent} from './listado-regiones-geograficas.component';
import {Observable, of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {RegionGeograficaContinentalService} from '@pca-jsanchez/shared/api-banco-mundial';
import {RegionComponent} from '../region/region.component';
import {RegionesModule} from '@pca-jsanchez/regiones';
import {provideMockStore} from '@ngrx/store/testing';
import * as RegionesActions from '../region/store/regiones/regiones.actions';
import {Store} from '@ngrx/store';

describe('GIVEN: an ListadoRegionesGeograficasComponent declared in ListadoRegionesGeograficasModule', () => {
  describe('WHEN: the ListadoRegionesGeograficasModule is compiled', () => {
    let component: ListadoRegionesGeograficasComponent;
    let fixture: ComponentFixture<ListadoRegionesGeograficasComponent>;
    let regionGeograficaContinentalService: RegionGeograficaContinentalService;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule, RegionesModule],
        declarations: [ListadoRegionesGeograficasComponent, RegionComponent],
        providers: [
          {
            provide: RegionGeograficaContinentalService, useValue: {
              getRegionesGeograficasContinentales: () => of([
                {page: "1", pages: "1", per_page: "50", total: "48"},
                [
                    {id: "", code: "AFR", iso2code: "A9", name: "Africa"},
                    {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
                    {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
                    {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
                ]
              ])
            }
          },
          {
            provide: Store,
            useValue: {
              dispatch: jest.fn(),
              pipe: jest.fn()
            }
          },
          provideMockStore()
        ]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ListadoRegionesGeograficasComponent);
      component = fixture.componentInstance;

      regionGeograficaContinentalService = TestBed.inject(RegionGeograficaContinentalService);

      fixture.detectChanges();
    });

    it('THEN: should create the Component', () => {
      expect(component).toBeTruthy();
    });

    it("THEN: should render 'List of identified geographic regions' in a H2 tag", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('List of identified geographic regions');
    });

    it('THEN: should call ngOnInit and get regions with id', () => {
      /*let spy = spyOn(regionGeograficaContinentalService, 'getRegionesGeograficasContinentales')
        .and
        .callThrough();*/

      //component.ngOnInit();
      fixture.detectChanges();

      //expect(regionGeograficaContinentalService.getRegionesGeograficasContinentales).toHaveBeenCalled();
      component.regiones$.subscribe(regiones => {
        console.log('subscribe')
        expect(regiones).toHaveLength(3);
      });

     /* spy.calls.mostRecent().returnValue.then(() => {
        fixture.detectChanges();
        console.log('spy mostRecent')
      });*/

      const action = RegionesActions.loadRegiones();
      const store = TestBed.inject(Store);
      let spy = jest.spyOn(store, 'dispatch');

      fixture.detectChanges();

   //   expect(spy).toHaveBeenCalledWith(action);
     // console.log('toHaveBeenCalledWith')

      expect(component.regiones$).toBeInstanceOf(Observable);

      fixture.whenStable().then(() => {
        console.log('whenStable')
        expect(component.regiones$).toHaveLength(3);
        //expect(component.regiones$.filter(region => !region.id)).toHaveLength(0);
        expect(component.regiones$).toEqual([
          {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
          {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
          {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
        ]);
      });
    });
  });
});
