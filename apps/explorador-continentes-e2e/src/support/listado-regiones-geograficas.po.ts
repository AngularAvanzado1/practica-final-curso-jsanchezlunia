export const getTitle = () => cy.get('h2');
export const getListadoRegiones = () => cy.get('ul').children();
export const clickRegion = () => cy.get('li:first > a').click();
export const currentUrl = () => cy.location('pathname');
export const getTitleNextPage = () => cy.contains('h2', 'Región');
