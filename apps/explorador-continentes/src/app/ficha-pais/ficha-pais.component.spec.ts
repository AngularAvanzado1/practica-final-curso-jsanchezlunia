import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPaisComponent } from './ficha-pais.component';

describe('FichaPaisComponent', () => {
  let component: FichaPaisComponent;
  let fixture: ComponentFixture<FichaPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
