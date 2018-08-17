import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { cloneArray, TodoItem } from '../../shared';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
    public param: any;

    public todos: TodoItem[];
    private orig: TodoItem[];

    constructor(private todoService: TodoService, private snackBar: MatSnackBar) {
        this.param = { value: 'Fritz' };
    }

    public ngOnInit() {
        this.todoService.load()
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public ngOnDestroy() {

    }

    public onAdd(newItem: TodoItem): void {
        newItem.lastModified = new Date();
        this.todos.push(newItem);
        this.snackBar.open('add item', null, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = cloneArray(this.orig);
        this.snackBar.open('reset todos', null, { duration: 1500 });
    }
}
