import * as fromRegiones from './regiones.reducer';
import { selectRegionesState } from './regiones.selectors';

describe('Regiones Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRegionesState({
      [fromRegiones.regionesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
