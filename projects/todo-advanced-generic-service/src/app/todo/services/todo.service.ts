import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../../shared';
import { ServiceBase } from './service.base';

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
