import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { TodoItem } from '../../common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) {

    }

    public load(): Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>('assets/mock-data/todos.json');
    }
}
