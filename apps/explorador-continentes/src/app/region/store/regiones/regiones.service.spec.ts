import { TestBed } from '@angular/core/testing';

import { RegionesFacade } from './regiones.service';
import {provideMockStore} from '@ngrx/store/testing';

describe('RegionesFacade', () => {
  let service: RegionesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ]
    });
    service = TestBed.inject(RegionesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
