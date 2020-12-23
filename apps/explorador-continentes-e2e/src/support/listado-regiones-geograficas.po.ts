import * as regionesMock from './mocks/regionesMocks';

export const getTitle = () => cy.get('h2');
export const getListadoRegiones = () => cy.get('pca-explorador-continentes-region');
export const clickRegion = () => getListadoRegiones().first().find('button').click();
export const currentUrl = () => cy.location('pathname');
export const getTitleNextPage = () => cy.contains('h2', 'Region East Asia & Pacific');
export const startAPIServer = () => {
  cy.server();
  cy.fixture('regiones_continentales_mock.json').then(rc => {
    regionesMock.getRegionesGeograficasContinentales(rc.getAllRegionesGeograficasContinentales)
  });
}
export const waitAPIServerResponse = () => cy.wait('@getRegionesGeograficasContinentales');
