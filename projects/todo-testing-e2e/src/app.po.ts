import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getFirstTodo() {
    // tslint:disable-next-line:max-line-length
    return element.all(by.css('mat-list-item')).first();
  }

  getLastTodo() {
    // tslint:disable-next-line:max-line-length
    return element.all(by.css('mat-list-item')).last();
  }

  getAddTodo() {
    // tslint:disable-next-line:max-line-length
    return element.all(by.css('.mat-input-element')).first();
  }

  getAddTodoButton() {
    // tslint:disable-next-line:max-line-length
    return element.all(by.css('.mat-button')).first();
  }

  getFirstTodoCheckbox() {
    // tslint:disable-next-line:max-line-length
    return element.all(by.css('mat-checkbox')).first();
  }

  getFirstDoneTodo() {
    // tslint:disable-next-line:max-line-length
    return element.all(by.xpath('//todo-list[2]//todo-item')).first();
  }

  getFirstDoneTodoCheckbox() {
    // tslint:disable-next-line:max-line-length
    return element.all(by.xpath('//todo-list[2]//todo-item//mat-checkbox')).first();
  }

}
