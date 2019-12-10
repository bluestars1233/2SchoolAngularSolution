import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../models/todo.types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input()
  public items: TodoItem[];
  @Input()
  public hasReset: boolean;
  @Input()
  public title: string;
  @Output()
  public reset = new EventEmitter<void>();
  @Output()
  public checked = new EventEmitter<{ checked: boolean; id: number }>();

  constructor() {}

  public onChecked(newChecked: boolean, item: TodoItem) {
    this.checked.emit({ checked: newChecked, id: item.id });
  }
}
