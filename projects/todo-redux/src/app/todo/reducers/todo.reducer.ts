import { TodoItem } from './../models/todo.types';
import { createReducer, on, Action } from '@ngrx/store';
import { TodoActions } from '../actions';
import { TodoState } from './todo.state';
import { cloneArray } from '../../shared';

const initialState: TodoState = {
  todos: [],
  todosEdit: []
};

const todoReducer = createReducer(
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
    todosEdit: cloneArray(state.todos)
  }))
);

function handleCheck(
  state: TodoState,
  id: number,
  checked: boolean
): TodoItem[] {
  const origItem = state.todosEdit.find(item => item.id === id);
  const toEdit = { ...origItem };
  toEdit.checked = checked;
  const clone = [...state.todosEdit.filter(item => item.id !== id)];
  clone.splice(state.todosEdit.indexOf(origItem), 0, toEdit);
  return clone;
}

function handleModified(state: TodoState, id: number): TodoItem[] {
  const origItem = state.todosEdit.find(item => item.id === id);
  const toEdit = { ...origItem };
  toEdit.lastModified = new Date();
  const clone = [...state.todosEdit.filter(item => item.id !== id)];
  clone.splice(state.todosEdit.indexOf(origItem), 0, toEdit);
  return clone;
}

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}
