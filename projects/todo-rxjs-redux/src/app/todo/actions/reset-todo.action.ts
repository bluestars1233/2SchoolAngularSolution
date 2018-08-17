import { PlaygroundState } from '../../shared';
import { TodosActionBase } from './todo-action.base';

export class ResetTodoAction extends TodosActionBase {
    constructor() {
        super('Reset changes todos');
    }

    protected executeLogic(newState: PlaygroundState): void {
        newState.todosContext.todosEdit = newState.todosContext.todos;
    }
}
