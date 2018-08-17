import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Action, dispatcherToken, Disposer, PlaygroundState, stateToken, TodoItem } from '../../shared';
import { AddTodoAction } from '../actions/add-todo.action';
import { CheckTodoAction } from '../actions/check-todo.action';
import { ModifiedTodoAction } from '../actions/modified-todo.action';
import { ResetTodoAction } from '../actions/reset-todo.action';
import { ActionToasterService } from '../services/action-toaster.service';
import { TodoService } from '../services/todo.service';


@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnDestroy {

    constructor(@Inject(stateToken) public state: ReplaySubject<PlaygroundState>,
        @Inject(dispatcherToken) private dispatcher: Subject<Action>,
        private todoService: TodoService, private actionToasterService: ActionToasterService, private disposer: Disposer) {

    }

    public ngOnInit() {
        this.todoService.load();

        // register an epic which is execute always after a (or several) specific action(s) are executed
        this.disposer.safeSubscribe(this.dispatcher.pipe(
            filter((action) => action instanceof CheckTodoAction))
            .subscribe((action: CheckTodoAction) => {
                this.dispatcher.next(new ModifiedTodoAction(action.id));
            }), this.actionToasterService.start());
    }

    public ngOnDestroy() {
        // unsubscribe as soon component is destroyed. Else there could be side effects and memory leaks for sure.
        this.disposer.dispose();
    }

    public onReset(): void {
        this.dispatcher.next(new ResetTodoAction());
    }

    public onAdd(newItem: TodoItem): void {
        this.dispatcher.next(new AddTodoAction(newItem));
    }
}
