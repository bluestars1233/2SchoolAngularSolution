import { TodoState } from './todo.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const todoFeatureKey = 'todo';

export const getTodoFeature = createFeatureSelector<TodoState>(
  todoFeatureKey
);

export const getTodos = createSelector(
  getTodoFeature,
  (state: TodoState) => state.todosEdit
);
