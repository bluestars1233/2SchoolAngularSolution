import { PlaygroundState } from '../../common/app-state.model';
import { ActionBase, AppState, pathCopyHelper, cloneArray } from '../../state';
import { TodoItem } from '../../common';

export abstract class TodosActionBase extends ActionBase<PlaygroundState> {
    constructor(name: string) {
        super(name, (initState) => initState.todosContext);
    }
}
