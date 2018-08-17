import { cloneArray, merge, PlaygroundState } from '../../shared';
import { TodosActionBase } from './todo-action.base';

export class ModifiedTodoAction extends TodosActionBase {
    constructor(private id: number) {
        super('Modified todo');
    }

    protected executeLogic(newState: PlaygroundState): void {
        const newTodos = cloneArray(newState.todosContext.todosEdit.filter((item) => item.id !== this.id));
        newTodos.push(merge(newState.todosContext.todosEdit.filter((item) => item.id === this.id)[0], { lastModified: new Date() }));
        newState.todosContext.todosEdit = newTodos;
    }
}
