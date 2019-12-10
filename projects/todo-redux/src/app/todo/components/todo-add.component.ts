import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { TodoItem } from '../models/todo.types';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent {
  @Output()
  public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @ViewChild('description', { static: true })
  private descriptionInput: ElementRef;

  constructor() {}

  public onAdd(newItemDescription: string) {
    this.add.emit({
      description: newItemDescription,
      checked: false,
      lastModified: new Date(),
      id: 0
    });
    this.descriptionInput.nativeElement.value = '';
  }
}
