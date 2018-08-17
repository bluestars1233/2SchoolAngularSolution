import { pathCopyHelper } from '../../object-path-copy.service';
import { AppState } from '../state.type';

export interface Action {
    name: string;
    execute(initState: AppState): AppState;
}

export abstract class ActionBase<TState extends AppState> implements Action {
    constructor(public name: string, private copySelector: (initState: TState) => any) {

    }

    public execute(initState: TState): TState {
        const newState = pathCopyHelper.deepCopyByObjectPath(initState,
            this.copySelector);
        this.executeLogic(newState);
        return newState;
    }

    protected abstract executeLogic(newState: TState): void;
}
