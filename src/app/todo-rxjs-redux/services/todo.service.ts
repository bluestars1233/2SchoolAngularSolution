import { HttpClient } from '@angular/common/http';
import { LoadTodoAction } from '../actions/load-todo.action';
import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken } from '../../state';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient, @Inject(dispatcherToken) private dispatcher: Subject<Action>) {

    }

    public load(): void {
        this.http.get<TodoItem[]>('assets/mock-data/todos.json')
            .subscribe((result) => {
                this.dispatcher.next(new LoadTodoAction(result));
            });
    }
}
