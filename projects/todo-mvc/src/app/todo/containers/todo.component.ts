import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cloneArray, TodoItem } from '../../shared';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
    public todos: TodoItem[] | undefined;
    private orig: TodoItem[] | undefined;

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {

    }

    public ngOnInit() {
        this.http.get<TodoItem[]>('assets/mock-data/todos.json')
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public onAdd(newItem: TodoItem): void {
        this.todos?.push(newItem);
        this.snackBar.open('add item', undefined, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = this.orig ? cloneArray(this.orig) : this.orig;
        this.snackBar.open('reset todos', undefined, { duration: 1500 });
    }
}
