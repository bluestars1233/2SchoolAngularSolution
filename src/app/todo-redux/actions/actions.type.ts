/* tslint:disable */

import { Action } from '@ngrx/store';
import { TodoItem } from '../../common';
import { type } from '../utils';

export const ActionTypes = {
    ADD: type('[Todo] Add'),
    LOAD: type('[Todo] Load'),
    LOAD_COMPLETED: type('[Todo] LoadCompleted'),
    CHECK: type('[Todo] Check'),
    UNCHECK: type('[Todo] Uncheck'),
    MODIFIED: type('[Todo] AdModifiedd'),
    RESET: type('[Todo] Reset')
};

export interface ActionWithPayload<T> extends Action {
    payload: T;
  }

export class AddTodoAction implements ActionWithPayload<TodoItem> {
    public type = ActionTypes.ADD;

    constructor(public payload: TodoItem) {
    }
}

export class LoadTodoAction implements Action {
    public type = ActionTypes.LOAD;

    constructor() {
    }
}

export interface CheckPayload {
    checked: boolean;
    id: number;
}

export class CheckTodoAction implements ActionWithPayload<CheckPayload> {
    public type = ActionTypes.CHECK;

    constructor(public payload: CheckPayload) {

    }
}

export class LoadCompletedTodoAction implements ActionWithPayload<TodoItem[]> {
    public type = ActionTypes.LOAD_COMPLETED;

    constructor(public payload: TodoItem[]) {

    }
}

export class ModifiedTodoAction implements ActionWithPayload<number> {
    public type = ActionTypes.MODIFIED;
    
    constructor(public payload: number) {

    }
}

export class ResetTodoAction implements Action {
    public type = ActionTypes.RESET;

    constructor() {
    }
}
