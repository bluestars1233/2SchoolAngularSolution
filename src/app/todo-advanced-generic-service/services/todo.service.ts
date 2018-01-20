import { ServiceBase } from './service.base';
import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken } from '../../state';

@Injectable()
export class TodoService extends ServiceBase<TodoItem> {

    constructor(protected http: HttpClient) {
        super(http, 'TodoService:Todos');
    }

    public add(newItem: TodoItem): void {
        newItem.lastModified = new Date();
        super.add(newItem);
    }

    protected getServiceUrl(): string {
        return 'assets/mock-data/todos.json';
    }
}
