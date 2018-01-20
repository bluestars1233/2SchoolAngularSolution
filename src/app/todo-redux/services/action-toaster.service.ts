import { Actions } from '@ngrx/effects';
import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Action } from '@ngrx/store';

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
