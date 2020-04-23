import { getTitle, getChapter } from '../support/app.po';

describe('Demokratie erleben', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a title', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getTitle().contains('Demokratie erleben');
  });

  it('should display chapter', () => {
    // Function helper example, see `../support/app.po.ts` file
    getChapter().should(t => expect(t.length).equal(3));
  });
});
