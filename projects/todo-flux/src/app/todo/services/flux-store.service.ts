import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { cloneArray, TodoItem } from '../../shared';
import { FluxAction, FluxActionTypes } from './actions.type';
import { fluxDispatcherToken } from './flux.configuration';

@Injectable()
export class FluxStore {
    public todos: TodoItem[];
    private orig: TodoItem[];

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar,
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
        this.http.get<TodoItem[]>('assets/mock-data/todos.json')
            .subscribe((result) => {
                this.todos = cloneArray(result);
                this.orig = result;
                this.snackBar.open('todos loaded', null, { duration: 1500 });
            });
    }
}
