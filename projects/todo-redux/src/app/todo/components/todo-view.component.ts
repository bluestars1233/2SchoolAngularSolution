import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../models/todo.types';

@Component({
    selector: 'todo-view',
    templateUrl: './todo-view.component.html'
})
export class TodoViewComponent {
  @Input()
  public items: TodoItem[] | undefined;
  @Output()
  public reset = new EventEmitter<void>();

  public get itemsOpen(): TodoItem[] | undefined {
      return this.filterCheckedBy(false);
  }

  public get itemsDone(): TodoItem[] | undefined {
      return this.filterCheckedBy(true);
  }

  private filterCheckedBy(checked: boolean): TodoItem[] | undefined {
      if (this.items) {
          return this.items.filter((item) => item.checked === checked);
      }

      return undefined;
  }
}
