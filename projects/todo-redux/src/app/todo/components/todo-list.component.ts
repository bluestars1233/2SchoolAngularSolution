import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../models/todo.types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input()
  public items: TodoItem[] | undefined;
  @Input()
  public hasReset: boolean | undefined;
  @Input()
  public title: string | undefined;
  @Output()
  public resetItem = new EventEmitter<void>();
  @Output()
  public checked = new EventEmitter<{ checked: boolean; id: number }>();

  constructor() {}

  public onChecked(newChecked: boolean, item: TodoItem) {
    this.checked.emit({ checked: newChecked, id: item.id });
  }
}
