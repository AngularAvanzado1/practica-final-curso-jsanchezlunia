import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListadoRegionesGeograficasComponent} from './listado-regiones-geograficas.component';
import {RegionGeograficaContinentalService} from '@practica-final-curso-angular-jsanchezlunia/shared/api-banco-mundial';
import {of} from 'rxjs';

describe('GIVEN: an ListadoRegionesGeograficasComponent declared in ListadoRegionesGeograficasModule', () => {
  describe('WHEN: the ListadoRegionesGeograficasModule is compiled', () => {
    let component: ListadoRegionesGeograficasComponent;
    let fixture: ComponentFixture<ListadoRegionesGeograficasComponent>;
    let regionGeograficaContinentalService: RegionGeograficaContinentalService;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [],
        declarations: [ListadoRegionesGeograficasComponent],
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
          }
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

    it("THEN: should render 'Listado de regiones geograficas identificadas' in a H2 tag", () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Listado de regiones geograficas identificadas');
    });

    it('THEN: should call ngOnInit and fill regiones with id', () => {
      spyOn(regionGeograficaContinentalService, 'getRegionesGeograficasContinentales')
        .and
        .callThrough();

      component.ngOnInit();
      fixture.detectChanges();

      expect(regionGeograficaContinentalService.getRegionesGeograficasContinentales).toHaveBeenCalled();
      fixture.whenStable().then(() => {
        expect(component.regiones).toHaveLength(3);
        expect(component.regiones.filter(region => !region.id)).toHaveLength(0);
        expect(component.regiones).toEqual([
          {id: "1", code: "EAS", iso2code: "Z4", name: "East Asia & Pacific"},
          {id: "2", code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"},
          {id: "3", code: "LCN", iso2code: "ZJ", name: "Latin America & Caribbean "}
        ]);
      });
    });
  });
});
