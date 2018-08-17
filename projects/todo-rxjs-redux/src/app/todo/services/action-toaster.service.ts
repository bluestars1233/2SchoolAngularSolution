import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject, Subscription } from 'rxjs';
import { Action, dispatcherToken } from '../../shared';

@Injectable()
export class ActionToasterService {
    constructor(private snackBar: MatSnackBar, @Inject(dispatcherToken) private dispatcher: Subject<Action>) {

    }

    public start(): Subscription {
        return this.dispatcher.subscribe((action: Action) => {
            // Timeout is required because of the bad implementation within current material beta.
            // With this it is ensure previous cycle is already executed
            setTimeout(() => this.snackBar.open(action.name, null, { duration: 1500 }));
        });
    }
}
