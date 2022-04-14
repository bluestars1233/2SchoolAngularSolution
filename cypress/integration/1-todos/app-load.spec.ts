import { AppPage } from './app.po';

describe('test data loading App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    cy.intercept('GET', '**/todos.json', { fixture: 'todos.json' });
    page.navigateTo();
  });

  it('first todo item is "Loaded from Stub"', () => {
    cy.shouldLoadFromStub(page);
  });
});
