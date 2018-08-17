import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Injectable()
export class ActionToasterService {
    private snackbarRef: MatSnackBarRef<SimpleSnackBar>;

    constructor(private snackBar: MatSnackBar, private actions$: Actions) {

    }

    public start(): Subscription {
        return this.actions$.subscribe((action: Action) => {
            this.snackBar.open(`Action with ${action.type} executed`, null, { duration: 1500 });
        });
    }
}
