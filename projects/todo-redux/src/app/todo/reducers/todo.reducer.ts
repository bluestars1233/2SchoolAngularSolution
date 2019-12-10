import { TodoItem } from './../models/todo.types';
import { createReducer, on } from '@ngrx/store';
import { TodoActions } from '../actions';
import { TodoState } from './todo.state';
import { cloneArray } from '../../shared';

export const initialState: TodoState = {
  todos: [],
  todosEdit: []
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadComplete, (state, { items }) => ({
    ...state,
    todos: items,
    todosEdit: cloneArray(items)
  })),
  on(TodoActions.check, (state, { id, checked }) => ({
    ...state,
    todosEdit: handleCheck(state, id, checked)
  })),
  on(TodoActions.add, (state, { toAdd }) => ({
    ...state,
    todosEdit: [...state.todosEdit, toAdd]
  })),
  on(TodoActions.addModified, (state, { id }) => ({
    ...state,
    todosEdit: handleModified(state, id)
  })),
  on(TodoActions.reset, state => ({
    ...state,
    todosEdit: [...state.todos]
  }))
);

function handleCheck(
  state: TodoState,
  id: number,
  checked: boolean
): TodoItem[] {
  const toEdit = { ...state.todosEdit.find(item => item.id === id) };
  toEdit.checked = checked;
  return [...state.todosEdit.filter(item => item.id !== id), toEdit];
}

function handleModified(state: TodoState, id: number): TodoItem[] {
  const toEdit = { ...state.todosEdit.find(item => item.id === id) };
  toEdit.lastModified = new Date();
  return [...state.todosEdit.filter(item => item.id !== id), toEdit];
}
