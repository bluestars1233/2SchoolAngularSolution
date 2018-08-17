import { cloneArray, merge, PlaygroundState } from '../../shared';
import { TodosActionBase } from './todo-action.base';

export class CheckTodoAction extends TodosActionBase {
    constructor(private checked: boolean, public id: number) {
        super('Check todo');
    }

    protected executeLogic(newState: PlaygroundState): void {
        const newTodos = cloneArray(newState.todosContext.todosEdit.filter((item) => item.id !== this.id));
        newTodos.push(merge(newState.todosContext.todosEdit.filter((item) => item.id === this.id)[0], { checked: this.checked }));
        newState.todosContext.todosEdit = newTodos;
    }
}
