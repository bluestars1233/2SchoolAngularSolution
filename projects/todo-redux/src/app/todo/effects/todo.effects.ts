import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AddTodoAction, CheckTodoAction, LoadCompletedTodoAction, ModifiedTodoAction, TodoActionTypes } from '../actions/actions.type';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../actions/actions.type';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class TodoEffects {

    @Effect()
    private load$: Observable<Action | {}> = this.actions$.pipe(
        ofType(TodoActionTypes.LOAD),
        switchMap(() => {
            return this.todoService.load().pipe(
                map((todos: TodoItem[]) => new LoadCompletedTodoAction(todos)),
                catchError(() => of(new LoadCompletedTodoAction([])))
            );
        }));

    @Effect()
    private modifiedCheck$: Observable<Action> = this.actions$.pipe(
        ofType(TodoActionTypes.CHECK, TodoActionTypes.ADD),
        map((checked: CheckTodoAction | AddTodoAction) =>
            new ModifiedTodoAction(checked.payload.id)));

    constructor(private actions$: Actions, private todoService: TodoService) { }
}
