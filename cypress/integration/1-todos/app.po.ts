export class AppPage {
  navigateTo() {
    return cy.visit('/');
  }

  getParagraph() {
    return cy.get('app-root h1');
  }

  getFirstTodo() {
    return cy.get('mat-list-item').first();
  }

  getLastTodo() {
    return cy.get('mat-list-item').last();
  }

  getAddTodo() {
    return cy.get('.mat-input-element').first();
  }

  getAddTodoButton() {
    return cy.get('.mat-button').first();
  }

  getFirstTodoCheckbox() {
    return cy.get('mat-checkbox').first();
  }

  getFirstDoneTodo() {
    return cy.xpath('//todo-list[2]//todo-item').first();
  }

  getFirstDoneTodoCheckbox() {
    return cy.xpath('//todo-list[2]//todo-item//mat-checkbox').first();
  }

}
