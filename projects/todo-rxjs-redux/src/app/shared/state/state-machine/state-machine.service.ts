// Never import directly from rxjs root, because in this case the footprint of the whole library will be loaded!
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { AppState } from '../state.type';
import { Action } from './action.type';


export let wrapIntoBehavior = (init: AppState, obs: Observable<AppState>): ReplaySubject<AppState> => {
    const res = new ReplaySubject();
    res.next(init);
    obs.subscribe((s) => res.next(s));
    return res;
};

export let stateFn = (initState: AppState, actions: Subject<Action>): ReplaySubject<AppState> => {
    const appStateObs: Observable<AppState> = actions.pipe(
        scan((state: AppState, action: Action) => {
            console.log(`Action ${action.name} will be executed`);
            const result = action.execute(state);
            console.log(`Action ${action.name} has been executed`);
            return result;
        }, initState));

    return wrapIntoBehavior(initState, appStateObs);
};
