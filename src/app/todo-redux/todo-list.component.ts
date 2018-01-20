import { Store } from '@ngrx/store';
import { Component, Input, OnInit, ChangeDetectionStrategy, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { PlaygroundState, TodoItem } from '../common';
import { CheckTodoAction } from './actions';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    @Input()
    public items: TodoItem[];
    @Input()
    public hasReset: boolean;
    @Input()
    public title: string;
    @Output()
    public reset = new EventEmitter<void>();

    constructor(private store: Store<PlaygroundState>) {

    }

    public onChecked(newChecked: boolean, item: TodoItem) {
        this.store.dispatch(new CheckTodoAction({ checked: newChecked, id: item.id }));
    }
}
