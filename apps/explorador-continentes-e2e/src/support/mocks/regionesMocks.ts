export const getRegionesGeograficasContinentales = (response) => {
  let endpoint = 'http://api.worldbank.org/v2/region/?format=json';
  cy.route({
    method: 'GET',
    url: endpoint,
    response
  }).as('getRegionesGeograficasContinentales');
}
