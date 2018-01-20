import { FluxAction } from './actions.type';
import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export const fluxDispatcherToken = new InjectionToken('fluxActions');

export const fluxActionSubject = new Subject<FluxAction>();

export const FLUX_CONFIG = [
    { provide: fluxDispatcherToken, useValue: fluxActionSubject },
];
