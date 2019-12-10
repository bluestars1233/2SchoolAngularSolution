import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../models/todo.types';


export const add = createAction('[Todo] Add', props<{toAdd: TodoItem}>());
export const load = createAction('[Todo] Load');
export const loadComplete = createAction('[Todo] LoadCompleted', props<{items: TodoItem[]}>());
export const check = createAction('[Todo] Check', props<{checked: boolean, id: number}>());
export const uncheck = createAction('[Todo] Uncheck', props<{toAdd: TodoItem}>());
export const addModified = createAction('[Todo] Add Modified', props<{id: number}>());
export const reset = createAction('[Todo] Reset');
