import { CheckTodoAction } from './actions/check-todo.action';
import { TodoItem } from '../common';
import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken } from '../state';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    @Input()
    public items: TodoItem[];
    @Output()
    public reset = new EventEmitter<void>();

    constructor( @Inject(dispatcherToken) private dispatcher: Subject<Action>) {

    }

    public get itemsOpen(): TodoItem[] {
        return this.filterCheckedBy(false);
    }

    public get itemsDone(): TodoItem[] {
        return this.filterCheckedBy(true);
    }

    public onChecked(checked: boolean, item: TodoItem) {
        this.dispatcher.next(new CheckTodoAction(checked, item.id));
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.items) {
            return this.items.filter((item) => item.checked === checked);
        }

        return undefined;
    }
}
