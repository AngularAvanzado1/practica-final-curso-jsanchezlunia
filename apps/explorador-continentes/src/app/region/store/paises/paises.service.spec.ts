import { TestBed } from '@angular/core/testing';

import { PaisesFacade } from './paises.service';
import {provideMockStore} from '@ngrx/store/testing';

describe('PaisesFacade', () => {
  let service: PaisesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ]
    });
    service = TestBed.inject(PaisesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
