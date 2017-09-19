import { ActionTypes, CheckPayload, LoadCompletedTodoAction, ModifiedTodoAction } from '../actions';
import { TodoService } from '../services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { MdSnackBar } from '@angular/material';

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
    private load$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOAD)
        .map(toPayload)
        .switchMap(() => {
            return this.todoService.load()
                .map((todos) => new LoadCompletedTodoAction(todos))
                .catch(() => of(new LoadCompletedTodoAction([])));
        });

    @Effect()
    private modified$: Observable<Action> = this.actions$
        .ofType(ActionTypes.CHECK, ActionTypes.ADD)
        .map(toPayload)
        .map((checked: CheckPayload) => new ModifiedTodoAction(checked.id));

    constructor(private actions$: Actions, private todoService: TodoService) { }
}
