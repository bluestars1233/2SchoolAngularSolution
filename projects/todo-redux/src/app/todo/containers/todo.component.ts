import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodoAction, LoadTodoAction, ResetTodoAction, TodoItem, TodoState } from '../actions/actions.type';
import { getTodos } from '../reducers/todo.reducer';
import { ActionToasterService } from '../services/action-toaster.service';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnDestroy {
    public todos: Observable<TodoItem[]>;

    constructor(private store$: Store<TodoState>, private actionToaster: ActionToasterService) {
        this.todos = this.store$.pipe(select(getTodos));
    }

    public ngOnInit() {
        this.store$.dispatch(new LoadTodoAction());
        this.actionToaster.start();
    }

    public ngOnDestroy() {

    }

    public onAdd(newItem: TodoItem): void {
        this.store$.dispatch(new AddTodoAction(newItem));
    }

    public onReset(): void {
        this.store$.dispatch(new ResetTodoAction());
    }
}
