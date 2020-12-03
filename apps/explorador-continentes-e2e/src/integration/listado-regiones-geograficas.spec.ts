import {
  clickRegion,
  currentUrl,
  getListadoRegiones,
  getTitle,
  getTitleNextPage, startAPIServer, waitAPIServerResponse
} from '../support/listado-regiones-geograficas.po';
import {visitHome} from '../support/app.po';

describe('GIVEN: the home page', () => {

  beforeEach(() => {
    startAPIServer();
    visitHome();
    waitAPIServerResponse();
  });
  context('WHEN: user visits home page', () => {
    it('THEN: should display title', () => {
      getTitle().contains('Listado de regiones geograficas identificadas');
    });
    it('THEN: should list regiones', () => {
      getListadoRegiones().should('have.length', 3);
    });
  });
  context('WHEN: user clicks on some region', () => {
    it('THEN: should navigate to region page', () => {
      clickRegion()
        .then(() => {
          currentUrl().should('contain', '/region/');
          getTitleNextPage().should('be.visible');
        });
    });
  });
});
