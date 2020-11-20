import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRegionesGeograficasComponent } from './listado-regiones-geograficas.component';

describe('ListadoRegionesGeograficasComponent', () => {
  let component: ListadoRegionesGeograficasComponent;
  let fixture: ComponentFixture<ListadoRegionesGeograficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRegionesGeograficasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRegionesGeograficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
