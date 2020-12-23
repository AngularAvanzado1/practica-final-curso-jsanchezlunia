import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ListadoPaisesRegionComponent} from './listado-paises-region.component';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {RegionesModule} from '@pca-jsanchez/regiones';
import {ElementoListadoPaisesComponent} from './elemento-listado-paises/elemento-listado-paises.component';

describe('ListadoPaisesRegionComponent', () => {
  let component: ListadoPaisesRegionComponent;
  let fixture: ComponentFixture<ListadoPaisesRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RegionesModule],
      declarations: [ ListadoPaisesRegionComponent, ElementoListadoPaisesComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPaisesRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
