import { cloneArray, PlaygroundState, TodoItem } from '../../shared';
import { TodosActionBase } from './todo-action.base';

export class AddTodoAction extends TodosActionBase {
    constructor(private newTodo: TodoItem) {
        super('Add todo');
    }

    protected executeLogic(newState: PlaygroundState): void {
        const newTodos = cloneArray(newState.todosContext.todosEdit);
        newTodos.push(this.newTodo);

        newState.todosContext.todosEdit = newTodos;
    }
}
