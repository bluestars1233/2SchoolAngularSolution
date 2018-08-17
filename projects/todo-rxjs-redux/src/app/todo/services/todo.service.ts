import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action, dispatcherToken, TodoItem } from '../../shared';
import { LoadTodoAction } from '../actions/load-todo.action';

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
