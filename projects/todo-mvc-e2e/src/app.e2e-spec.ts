import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('first todo item is "Go shopping"', () => {
    page.navigateTo();

    expect(page.getFirstTodo().getText()).toEqual('Go shopping');
  });

  it('check first todo item and check if first is "Make laundry"', () => {
    page.navigateTo();

    page.getFirstTodoCheckbox().click();

    expect(page.getFirstTodo().getText()).toEqual('Make laundry');
  });

  it('check two todo items and check if first is "Watch TV"', () => {
    page.navigateTo();

    page.getFirstTodoCheckbox().click();
    page.getFirstTodoCheckbox().click();

    expect(page.getFirstTodo().getText()).toEqual('Watch TV');
  });

  it('check one todo items and check if done is "Go shopping"', () => {
    page.navigateTo();

    page.getFirstTodoCheckbox().click();

    expect(page.getFirstDoneTodo().getText()).toContain('Go shopping');
  });

  it('check two todo items and check if done is "Go shopping"', () => {
    page.navigateTo();

    page.getFirstTodoCheckbox().click();
    page.getFirstTodoCheckbox().click();

    expect(page.getFirstDoneTodo().getText()).toContain('Go shopping');
  });

  it('check one todo item and check if undone is "Go shopping"', () => {
    page.navigateTo();

    page.getFirstTodoCheckbox().click();
    page.getFirstDoneTodoCheckbox().click();

    expect(page.getFirstTodo().getText()).toContain('Go shopping');
  });

});
