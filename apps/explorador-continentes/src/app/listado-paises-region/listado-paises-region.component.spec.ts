import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaisesRegionComponent } from './listado-paises-region.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ListadoPaisesRegionComponent', () => {
  let component: ListadoPaisesRegionComponent;
  let fixture: ComponentFixture<ListadoPaisesRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPaisesRegionComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
