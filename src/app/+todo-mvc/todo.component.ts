import { cloneArray } from '../state/utils';
import { TodoItem } from '../common';
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
    public todos: TodoItem[];
    private orig: TodoItem[];

    constructor(private http: Http, private snackBar: MdSnackBar) {

    }

    public ngOnInit() {
        this.http.get('assets/mock-data/todos.json')
            .map((result) => result.json())
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public ngOnDestroy() {

    }

    public onAdd(newItem: TodoItem): void {
        this.todos.push(newItem);
        this.snackBar.open('add item', null, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = cloneArray(this.orig);
        this.snackBar.open('reset todos', null, { duration: 1500 });
    }
}
