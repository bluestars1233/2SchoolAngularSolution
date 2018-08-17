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
