import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CheckTodoAction, TodoItem, TodoState } from '../actions/actions.type';

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

    constructor(private store: Store<TodoState>) {

    }

    public onChecked(newChecked: boolean, item: TodoItem) {
        this.store.dispatch(new CheckTodoAction({ checked: newChecked, id: item.id }));
    }
}
