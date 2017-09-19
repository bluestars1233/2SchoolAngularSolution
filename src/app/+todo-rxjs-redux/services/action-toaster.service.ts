import { LoadTodoAction } from '../actions/load-todo.action';
import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken } from '../../state';
import { MdSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ActionToasterService {
    constructor(private snackBar: MdSnackBar, @Inject(dispatcherToken) private dispatcher: Subject<Action>) {

    }

    public start(): Subscription {
        return this.dispatcher.subscribe((action: Action) => {
            // Timeout is required because of the bad implementation within current material beta.
            // With this it is ensure previous cycle is already executed
            setTimeout(() => this.snackBar.open(action.name, null, { duration: 1500 }));
        });
    }
}
