import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RegionesEffects } from './regiones.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RegionesEffects', () => {
  let actions$: Observable<any>;
  let effects: RegionesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegionesEffects,
        provideMockActions(() => actions$)
      ],
      imports: [HttpClientTestingModule]
    });

    effects = TestBed.inject(RegionesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
