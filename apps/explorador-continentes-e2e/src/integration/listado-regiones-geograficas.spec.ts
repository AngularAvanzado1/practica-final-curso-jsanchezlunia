import {clickRegion, getListadoRegiones, getTitle} from '../support/listado-regiones-geograficas.po';
import {visitHome} from '../support/app.po';

describe('GIVEN: the home page', () => {
  beforeEach(() => visitHome());
  context('WHEN: user visits home page', () => {
    it('THEN: should display title', () => {
      getTitle().contains('Listado de regiones geograficas identificadas');
    });
    it('THEN: should list regiones', () => {
      getListadoRegiones().should('have.length', 7);
    });
  });
  context('WHEN: user click on some region', () => {
    it('THEN: should navigate to region page', () => {
      clickRegion()
        .then(() => {
          cy.location('pathname').should('contain', '/region/');
          cy.contains('h2', 'Región').should('be.visible');
        });
    });
  });
});
