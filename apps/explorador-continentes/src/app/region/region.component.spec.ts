import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import {RegionesModule} from '@pca-jsanchez/regiones';
import {RouterTestingModule} from '@angular/router/testing';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionComponent ],
      imports: [RouterTestingModule, RegionesModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    component.region = {id: 2, code: "ECS", iso2code: "Z7", name: "Europe & Central Asia"} ;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
