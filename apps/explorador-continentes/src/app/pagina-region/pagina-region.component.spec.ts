import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegionComponent } from './pagina-region.component';

describe('PaginaRegionComponent', () => {
  let component: PaginaRegionComponent;
  let fixture: ComponentFixture<PaginaRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
