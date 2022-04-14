import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
    public todos: TodoItem[] | undefined;
    private orig: TodoItem[] | undefined;

    constructor(private todoService: TodoService, private snackBar: MatSnackBar) {

    }

    public ngOnInit() {
        this.todoService.load()
            .subscribe((result) => {
                this.orig = result;
                this.todos = this.cloneArray(result);
            });
    }

    public onAdd(newItem: TodoItem): void {
        newItem.lastModified = new Date();
        this.todos?.push(newItem);
        this.snackBar.open('add item', undefined, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = this.orig ? this.cloneArray(this.orig) : this.orig;
        this.snackBar.open('reset todos', undefined, { duration: 1500 });
    }

    private cloneArray(origArray: any[]) {
        const newArray = [];
        for (const element of origArray) {
            if (element) {
                newArray.push(this.merge({}, element));
            }
        }

        return newArray;
    }

    private merge(orig: any, props: any) {
        return Object.assign({}, orig, props);
    }
}
