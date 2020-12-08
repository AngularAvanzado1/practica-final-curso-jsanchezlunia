import { TestBed } from '@angular/core/testing';

import { PaisesFacade } from './paises.service';

describe('PaisesFacade', () => {
  let service: PaisesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
