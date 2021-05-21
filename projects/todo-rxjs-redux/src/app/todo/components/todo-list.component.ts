import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Action, dispatcherToken, TodoItem } from '../../shared';
import { CheckTodoAction } from '../actions/check-todo.action';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
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

    constructor(@Inject(dispatcherToken) private dispatcher: Subject<Action>) {

    }

    public onChecked(checked: boolean, item: TodoItem) {
        this.dispatcher.next(new CheckTodoAction(checked, item.id));
    }
}
