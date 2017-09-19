import { ServiceBase } from './service.base';
import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken } from '../../state';

@Injectable()
export class TodoService extends ServiceBase<TodoItem> {

    constructor(protected http: Http) {
        super(http, 'TodoService:Todos');
    }

    protected getServiceUrl(): string {
        return 'assets/mock-data/todos.json';
    }

}
