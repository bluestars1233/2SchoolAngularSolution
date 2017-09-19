import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { CheckTodoAction } from './actions/check-todo.action';
import { ModifiedTodoAction } from './actions/modified-todo.action';
import { Subscription } from 'rxjs/Subscription';
import { TodoService, ActionToasterService } from './services';
import { ResetTodoAction } from './actions/reset-todo.action';
import { AddTodoAction } from './actions/add-todo.action';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken, stateToken } from '../state';
import { PlaygroundState, TodoItem, Disposer } from '../common';
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// in future only import what is necessary
import 'rxjs';

@Component({
    selector: 'todo',
    templateUrl: './todo-rxjs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPlaybackComponent implements OnInit, OnDestroy {

    constructor( @Inject(stateToken) public state: ReplaySubject<PlaygroundState>, @Inject(dispatcherToken) private dispatcher: Subject<Action>,
                 private todoService: TodoService, private actionToasterService: ActionToasterService, private disposer: Disposer) {

    }

    public ngOnInit() {
        this.todoService.load();

        // register an epic which is execute always after a (or several) specific action(s) are executed
        this.disposer.safeSubscribe(this.dispatcher.filter((action) => action instanceof CheckTodoAction)
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
