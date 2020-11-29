export const getTitle = () => cy.get('h2');
export const getListadoRegiones = () => cy.get('pca-explorador-continentes-region');
export const clickRegion = () => getListadoRegiones().first().find('button').click();
export const currentUrl = () => cy.location('pathname');
export const getTitleNextPage = () => cy.contains('h2', 'Región');
