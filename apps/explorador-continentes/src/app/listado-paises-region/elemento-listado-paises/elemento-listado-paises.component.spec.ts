import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoListadoPaisesComponent } from './elemento-listado-paises.component';

describe('ElementoListadoPaisesComponent', () => {
  let component: ElementoListadoPaisesComponent;
  let fixture: ComponentFixture<ElementoListadoPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoListadoPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoListadoPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
