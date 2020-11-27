import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaisesRegionComponent } from './listado-paises-region.component';

describe('ListadoPaisesRegionComponent', () => {
  let component: ListadoPaisesRegionComponent;
  let fixture: ComponentFixture<ListadoPaisesRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPaisesRegionComponent ]
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
