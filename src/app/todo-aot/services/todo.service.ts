import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../../common';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) {

    }

    public load(): Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>('assets/mock-data/todos.json');
    }
}
