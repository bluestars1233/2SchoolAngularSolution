import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneArray, merge, pathCopyHelper } from '../../shared';
import {
    AddTodoAction, CheckTodoAction, LoadCompletedTodoAction,
    ModifiedTodoAction, TodoActions, TodoActionTypes, TodoState
} from '../actions/actions.type';

export class TodoContainer {
    public todosContext: TodoState;
}

export const reducers: ActionReducerMap<TodoContainer> = {
    todosContext: todoReducers,
};

export function getInitialState(): TodoState {
    return { todos: [], todosEdit: [] };
}

export const featureName = 'todosContext';

function todoReducers(state = getInitialState(), action: TodoActions): TodoState {
    let newState = pathCopyHelper.deepCopyByObjectPath(state, (initState) => initState);

    switch (action.type) {
        case TodoActionTypes.LOAD:
            break;
        case TodoActionTypes.LOAD_COMPLETED:
            handleLoad(action as LoadCompletedTodoAction);
            break;
        case TodoActionTypes.ADD:
            handleAdd(action as AddTodoAction);
            break;
        case TodoActionTypes.CHECK:
            handleCheck(action as CheckTodoAction);
            break;
        case TodoActionTypes.MODIFIED:
            handleModified(action as ModifiedTodoAction);
            break;
        case TodoActionTypes.RESET:
            newState.todosEdit = newState.todos;
            break;
        default:
            return state;
    }

    function handleLoad(loadAction: LoadCompletedTodoAction) {
        newState = { todos: loadAction.payload, todosEdit: cloneArray(loadAction.payload) };
    }

    function handleCheck(checkAction: CheckTodoAction) {
        const newCheckTodos = cloneArray(newState.todosEdit.filter((item) => item.id !== checkAction.payload.id));
        newCheckTodos.push(merge(newState.todosEdit.filter((item) => item.id === checkAction.payload.id)[0],
            { checked: checkAction.payload.checked }));
        newState.todosEdit = newCheckTodos;
    }

    function handleAdd(addAction: AddTodoAction) {
        const newAddTodos = cloneArray(newState.todosEdit);
        newAddTodos.push(addAction.payload);
        newState.todosEdit = newAddTodos;
    }

    function handleModified(modifiedAction: ModifiedTodoAction) {
        const newModifiedTodos = cloneArray(newState.todosEdit.filter((item) => item.id !== modifiedAction.payload));
        newModifiedTodos.push(merge(newState.todosEdit.filter((item) => item.id === modifiedAction.payload)[0],
            { lastModified: new Date() }));
        newState.todosEdit = newModifiedTodos;
    }

    return newState;
}

export const getTodoContainer = createFeatureSelector<TodoContainer>(featureName);

export const getTodoState = createSelector(
    getTodoContainer,
    (state: TodoContainer) => state.todosContext
);

export const getTodos = createSelector(
    getTodoState,
    (state: TodoState) => state.todosEdit
);
