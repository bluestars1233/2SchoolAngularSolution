import { Action } from '@ngrx/store';

export enum TodoActionTypes {
    ADD = '[Todo] Add',
    LOAD = '[Todo] Load',
    LOAD_COMPLETED = '[Todo] LoadCompleted',
    CHECK = '[Todo] Check',
    UNCHECK = '[Todo] Uncheck',
    MODIFIED = '[Todo] AdModifiedd',
    RESET = '[Todo] Reset'
}

export interface TodoItem {
    id: number;
    checked: boolean;
    description: string;
    lastModified: Date;
}

export interface TodoState {
    todos: TodoItem[];
    todosEdit: TodoItem[];
}

export interface ActionWithPayload<T> extends Action {
    payload: T;
}

export class AddTodoAction implements ActionWithPayload<TodoItem> {
    public readonly type = TodoActionTypes.ADD;

    constructor(public payload: TodoItem) {
    }
}

export class LoadTodoAction implements Action {
    public readonly type = TodoActionTypes.LOAD;

    constructor() {
    }
}

export interface CheckPayload {
    checked: boolean;
    id: number;
}

export class CheckTodoAction implements ActionWithPayload<CheckPayload> {
    public type = TodoActionTypes.CHECK;

    constructor(public payload: CheckPayload) {

    }
}

export class LoadCompletedTodoAction implements ActionWithPayload<TodoItem[]> {
    public readonly type = TodoActionTypes.LOAD_COMPLETED;

    constructor(public payload: TodoItem[]) {

    }
}

export class ModifiedTodoAction implements ActionWithPayload<number> {
    public readonly type = TodoActionTypes.MODIFIED;

    constructor(public payload: number) {

    }
}

export class ResetTodoAction implements Action {
    public type = TodoActionTypes.RESET;

    constructor() {
    }
}

export type TodoActions = ResetTodoAction | ModifiedTodoAction | LoadCompletedTodoAction | CheckTodoAction;
