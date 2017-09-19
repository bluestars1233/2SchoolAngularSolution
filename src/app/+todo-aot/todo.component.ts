import { TodoItem } from '../common';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { TodoService } from './services';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
    public todos: TodoItem[];
    private orig: TodoItem[];

    constructor(private todoService: TodoService, private snackBar: MdSnackBar) {

    }

    public ngOnInit() {
        this.todoService.load()
            .subscribe((result) => {
                this.orig = result;
                this.todos = this.cloneArray(result);
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
        this.todos = this.cloneArray(this.orig);
        this.snackBar.open('reset todos', null, { duration: 1500 });
    }

    private cloneArray(origArray: any[]) {
        let newArray = [];
        for (let element of origArray) {
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
