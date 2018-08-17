import { ActionBase, PlaygroundState } from '../../shared';

export abstract class TodosActionBase extends ActionBase<PlaygroundState> {
    constructor(name: string) {
        super(name, (initState) => initState.todosContext);
    }
}
