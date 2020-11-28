import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTemplateComponent } from './region-template.component';

describe('RegionTemplateComponent', () => {
  let component: RegionTemplateComponent;
  let fixture: ComponentFixture<RegionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
