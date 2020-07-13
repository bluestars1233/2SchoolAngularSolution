import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TodoEffects } from './todo.effects';
import { TodoActions } from '../actions';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo.types';
import { HttpClientModule } from '@angular/common/http';

describe('TodoEffects', () => {
  let actions$: Observable<Action>;
  let effects: TodoEffects;
  const todoItem = { id: 1, checked: false, description: 'some' } as TodoItem;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodoEffects, provideMockActions(() => actions$), TodoService]
    });

    effects = TestBed.inject(TodoEffects);
  });

  describe('load$', () => {
    it('should invoke backend call and execute loadComplete', () => {
      actions$ = of({ type: TodoActions.load.type });
      const todoService: TodoService = TestBed.inject(TodoService);
      spyOn(todoService, 'load').and.returnValue(of([todoItem]));

      effects.load$.subscribe((action: Action) => {
        expect(action.type).toBe(TodoActions.loadComplete.type);
      });

      expect(todoService.load).toHaveBeenCalled();
    });
  });

  describe('modifiedCheck$', () => {
    it('should invoke modified action', () => {
      actions$ = of(TodoActions.check({ id: 1, checked: true }));

      effects.modifiedCheck$.subscribe((action: Action) => {
        expect(action.type).toBe(TodoActions.addModified.type);
      });
    });
  });

  describe('modifiedAdd$', () => {
    it('should invoke modified action', () => {
      actions$ = of(TodoActions.add({ toAdd: todoItem }));

      effects.modifiedAdd$.subscribe((action: Action) => {
        expect(action.type).toBe(TodoActions.addModified.type);
      });
    });
  });
});
