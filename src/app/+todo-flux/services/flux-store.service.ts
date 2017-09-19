import { cloneArray } from '../../state/utils';
import { FluxAction, FluxActionTypes } from './actions.type';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { TodoItem } from '../../common';
import { Injectable, Inject } from '@angular/core';
import { fluxDispatcherToken } from './flux.configuration';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FluxStore {
    public todos: TodoItem[];
    private orig: TodoItem[];

    constructor(
        private http: Http,
        private snackBar: MdSnackBar,
        @Inject(fluxDispatcherToken) private dispatcher: Subject<FluxAction>
    ) {
        this.dispatcher.subscribe((action: FluxAction) => {
            let item: TodoItem;
            if (action.id) {
                item = this.todos.filter((arrayItem) => arrayItem.id === action.id)[0];
            }
            let actionText: string;

            switch (action.type) {
                case FluxActionTypes.Load:
                    this.load();
                    break;
                case FluxActionTypes.Add:
                    this.todos.push({
                        id: Math.max.apply(Math, (this.todos.map((arrayItem) => arrayItem.id))) + 1,
                        description: action.description,
                        checked: false,
                        lastModified: new Date()
                    });
                    actionText = 'item added';
                    break;
                case FluxActionTypes.Check:
                    item.checked = true;
                    item.lastModified = new Date();
                    actionText = 'item checked';
                    break;
                case FluxActionTypes.Uncheck:
                    item.checked = false;
                    actionText = 'item unchecked';
                    break;
                case FluxActionTypes.Reset:
                    this.todos = cloneArray(this.orig);
                    actionText = 'items reset';
                    break;
                default:
                    throw new Error('operation unknown');
            }

            if (action.type !== FluxActionTypes.Load) { // In this case toast already sent!
                this.snackBar.open(actionText, null, { duration: 1500 });
            }
        });
    }

    private load(): void {
        this.http.get('assets/mock-data/todos.json')
            .map((result) => result.json())
            .subscribe((result) => {
                this.todos = cloneArray(result);
                this.orig = result;
                this.snackBar.open('todos loaded', null, { duration: 1500 });
            });
    }
}
