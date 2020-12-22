import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisTemplateComponent } from './pais-template.component';

describe('PaisTemplateComponent', () => {
  let component: PaisTemplateComponent;
  let fixture: ComponentFixture<PaisTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
