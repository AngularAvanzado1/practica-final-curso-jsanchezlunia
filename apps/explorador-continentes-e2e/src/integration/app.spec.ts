import {getGreeting, visitHome} from '../support/app.po';

describe('GIVEN: the explorador-continentes app', () => {
  beforeEach(() => visitHome());

  context('WHEN: user visits home page', () => {
    it('THEN: should display welcome message', () => {
      // Custom command example, see `../support/commands.ts` file
      cy.login('my-email@something.com', 'myPassword');

      // Function helper example, see `../support/app.po.ts` file
      getGreeting().contains('Welcome to explorador-continentes!');
    });
  });
});
