import { PlaygroundState } from '../../common/app-state.model';
import { ActionBase, AppState, pathCopyHelper, cloneArray } from '../../state';
import { TodoItem, TodoContext } from '../../common';

export class LoadTodoAction extends ActionBase<PlaygroundState> {
    constructor(private todos: TodoItem[]) {
        super('Load todos', (initState) => initState);
    }

    protected executeLogic(newState: PlaygroundState): void {
        newState.todosContext = { todos: this.todos, todosEdit: cloneArray(this.todos) };
    }
}
