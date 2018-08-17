import { ActionBase, cloneArray, PlaygroundState, TodoItem } from '../../shared';

export class LoadTodoAction extends ActionBase<PlaygroundState> {
    constructor(private todos: TodoItem[]) {
        super('Load todos', (initState) => initState);
    }

    protected executeLogic(newState: PlaygroundState): void {
        newState.todosContext = { todos: this.todos, todosEdit: cloneArray(this.todos) };
    }
}
