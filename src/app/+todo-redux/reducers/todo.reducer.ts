import { any } from 'codelyzer/util/function';
import { ActionTypes } from '../actions';
import { Action } from '@ngrx/store';
import { PlaygroundState, TodoContext } from '../../common/app-state.model';
import { pathCopyHelper, cloneArray, merge } from '../../state';
import { ModifiedTodoAction, LoadCompletedTodoAction, CheckTodoAction, AddTodoAction } from '../actions';

export function todoReducers(state: TodoContext = <any> {}, action: Action): TodoContext {
    let actionText: string;
    let newState = pathCopyHelper.deepCopyByObjectPath(state, (initState) => initState);

    switch (action.type) {
        case ActionTypes.LOAD:
            break;
        case ActionTypes.LOAD_COMPLETED:
            handleLoad(action as LoadCompletedTodoAction);
            break;
        case ActionTypes.ADD:
            handleAdd(action as AddTodoAction);
            break;
        case ActionTypes.CHECK:
            handleCheck(action as CheckTodoAction);
            break;
        case ActionTypes.MODIFIED:
            handleModified(action as ModifiedTodoAction);
            break;
        case ActionTypes.RESET:
            newState.todosEdit = newState.todos;
            break;
        default:
            return state;
    }

    function handleLoad(loadAction: LoadCompletedTodoAction) {
        newState = { todos: loadAction.payload, todosEdit: cloneArray(loadAction.payload) };
    }

    function handleCheck(checkAction: CheckTodoAction) {
        let newCheckTodos = cloneArray(newState.todosEdit.filter((item) => item.id !== checkAction.payload.id));
        newCheckTodos.push(merge(newState.todosEdit.filter((item) => item.id === checkAction.payload.id)[0],
            { checked: checkAction.payload.checked }));
        newState.todosEdit = newCheckTodos;
    }

    function handleAdd(addAction: AddTodoAction) {
        let newAddTodos = cloneArray(newState.todosEdit);
        newAddTodos.push(addAction.payload);
        newState.todosEdit = newAddTodos;
    }

    function handleModified(modifiedAction: ModifiedTodoAction) {
        let newModifiedTodos = cloneArray(newState.todosEdit.filter((item) => item.id !== modifiedAction.payload));
        newModifiedTodos.push(merge(newState.todosEdit.filter((item) => item.id === modifiedAction.payload)[0], { lastModified: new Date() }));
        newState.todosEdit = newModifiedTodos;
    }

    return newState;
}

export const getTodos = (state: PlaygroundState) => {
    return state.todosContext ? state.todosContext.todosEdit : undefined;
};
