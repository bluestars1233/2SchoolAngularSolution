import { AppPage } from './app.po';

describe('basic tests for todo app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();

    page.navigateTo();
  });

  it('first todo item is "Go shopping"', () => {
    page.getFirstTodo().should('contain.text', 'Go shopping');
  });

  it('check first todo item and check if first is "Make laundry"', () => {
    page.getFirstTodoCheckbox().click();
    page.getFirstTodo().should('contain.text', 'Make laundry');
  });

  it('add item sleep to todos', () => {
    page.getAddTodo().type('Sleep');
    page.getAddTodoButton().click();

    page.getLastTodo().should('contain.text', 'Sleep');
  });

  it('check two todo items and check if first is "Watch TV"', () => {
    page.getFirstTodoCheckbox().click();
    page.getFirstTodoCheckbox().click();

    page.getFirstTodo().should('contain.text', 'Watch TV');
  });

  it('check one todo items and check if done is "Go shopping"', () => {
    page.getFirstTodoCheckbox().click();

    page.getFirstDoneTodo().should('contain.text', 'Go shopping');
  });

  it('check two todo items and check if done is "Go shopping"', () => {
    page.getFirstTodoCheckbox().click();
    page.getFirstTodoCheckbox().click();

    page.getFirstDoneTodo().should('contain.text', 'Go shopping');
  });

  it('check one todo item and check if undone is "Go shopping"', () => {
    page.getFirstTodoCheckbox().click();
    page.getFirstDoneTodoCheckbox().click();

    page.getFirstTodo().should('contain.text', 'Go shopping');
  });
});
