import { PlaygroundState } from '../../common/app-state.model';
import { ActionBase, AppState, pathCopyHelper, cloneArray } from '../../state';
import { TodoItem } from '../../common';
import { TodosActionBase } from './todo-action.base';

export class RemoveTodoAction extends TodosActionBase {
    constructor(private id: number) {
        super('Remove todo');
    }

    protected executeLogic(newState: PlaygroundState): void {
        newState.todosContext.todosEdit = cloneArray(newState.todosContext.todosEdit.filter((item) => item.id !== this.id));
    }
}
