import { ActionToasterService } from './services/action-toaster.service';
import { LoadTodoAction, AddTodoAction, ResetTodoAction } from './actions';
import { Observable } from 'rxjs/Observable';
import { TodoService } from './services';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { Action, dispatcherToken, stateToken } from '../state';
import { PlaygroundState, TodoItem } from '../common';
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as todos from './reducers/todo.reducer';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnDestroy {
    public todos: Observable<TodoItem[]>;

    constructor(private store: Store<PlaygroundState>, private actionToaster: ActionToasterService) {
        this.todos = this.store.select(todos.getTodos);
    }

    public ngOnInit() {
        this.store.dispatch(new LoadTodoAction());
        this.actionToaster.start();
    }

    public ngOnDestroy() {

    }

    public onAdd(newItem: TodoItem): void {
        this.store.dispatch(new AddTodoAction(newItem));
    }

    public onReset(): void {
        this.store.dispatch(new ResetTodoAction());
    }
}
