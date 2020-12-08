import * as fromRegiones from './regiones.actions';

describe('loadRegiones', () => {
  it('should return an action', () => {
    expect(fromRegiones.loadRegiones().type).toBe('[Regiones] Load Regiones');
  });
});
