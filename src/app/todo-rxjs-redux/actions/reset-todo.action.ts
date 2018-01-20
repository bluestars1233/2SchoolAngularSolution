import { PlaygroundState } from '../../common/app-state.model';
import { ActionBase, AppState, pathCopyHelper, cloneArray } from '../../state';
import { TodoItem } from '../../common';
import { TodosActionBase } from './todo-action.base';

export class ResetTodoAction extends TodosActionBase {
    constructor() {
        super('Reset changes todos');
    }

    protected executeLogic(newState: PlaygroundState): void {
        newState.todosContext.todosEdit = newState.todosContext.todos;
    }
}
