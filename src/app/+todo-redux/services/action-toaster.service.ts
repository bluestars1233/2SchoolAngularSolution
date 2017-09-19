import { Actions } from '@ngrx/effects';
import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Action } from '@ngrx/store';

@Injectable()
export class ActionToasterService {
    private snackbarRef: MdSnackBarRef<SimpleSnackBar>;

    constructor(private snackBar: MdSnackBar, private actions$: Actions) {

    }

    public start(): Subscription {
        return this.actions$.subscribe((action: Action) => {
            // Timeout is required because of the bad implementation within current material beta.
            // With this it is ensure previous cycle is already executed
            setTimeout(() => this.snackbarRef = this.snackBar.open(`Action with ${action.type} executed`, null, { duration: 1500 }));
        });
    }
}
