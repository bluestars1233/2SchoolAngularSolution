import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../actions/actions.type';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) {

    }

    public load(): Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>('assets/mock-data/todos.json');
    }
}
