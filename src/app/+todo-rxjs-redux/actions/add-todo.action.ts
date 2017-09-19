import { PlaygroundState } from '../../common/app-state.model';
import { ActionBase, AppState, pathCopyHelper, cloneArray } from '../../state';
import { TodoItem } from '../../common';
import { TodosActionBase } from './todo-action.base';

export class AddTodoAction extends TodosActionBase {
    constructor(private newTodo: TodoItem) {
        super('Add todo');
    }

    protected executeLogic(newState: PlaygroundState): void {
        let newTodos = cloneArray(newState.todosContext.todosEdit);
        newTodos.push(this.newTodo);

        newState.todosContext.todosEdit = newTodos;
    }
}
