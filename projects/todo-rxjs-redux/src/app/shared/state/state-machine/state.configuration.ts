import { InjectionToken } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Action } from '../state-machine/action.type';
import { stateFn } from '../state-machine/state-machine.service';
import { AppState } from '../state.type';

export const initStateToken = new InjectionToken('initState');
export const dispatcherToken = new InjectionToken('dispatcher');
export const stateToken = new InjectionToken('state');

let stateObs: ReplaySubject<AppState>;
export function stateFactory(initState: AppState, actions: Subject<Action>)
    : ReplaySubject<AppState> {
    if (!stateObs) {
        stateObs = stateFn(initState, actions);
    }

    return stateObs;
}

export function dispatcherFactory(): Subject<Action> {
    return new Subject<Action>();
}

export const STATE_MACHINE_CONFIG = [
    { provide: dispatcherToken, useFactory: dispatcherFactory },
    { provide: stateToken, useFactory: stateFactory, deps: [initStateToken, dispatcherToken] }
];
