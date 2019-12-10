import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { TodoActions } from '../actions';
import { TodoItem } from '../models/todo.types';

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
  load$: Observable<Action | {}> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.load),
      switchMap(() => {
        return this.todoService.load().pipe(
          map((todos: TodoItem[]) =>
            TodoActions.loadComplete({ items: todos })
          ),
          catchError(() => of(TodoActions.loadComplete({ items: [] })))
        );
      })
    )
  );

  modifiedCheck$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.check),
      map(({ id }) => TodoActions.addModified({ id }))
    )
  );

  modifiedAdd$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.add),
      map(({ toAdd }) => TodoActions.addModified({ id: toAdd.id }))
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
