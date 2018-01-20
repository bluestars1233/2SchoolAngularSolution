import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { TodoItem } from '../common';
import { Action, dispatcherToken } from '../state';
import { CheckTodoAction } from './actions';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
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

    constructor( @Inject(dispatcherToken) private dispatcher: Subject<Action>) {

    }

    public onChecked(checked: boolean, item: TodoItem) {
        this.dispatcher.next(new CheckTodoAction(checked, item.id));
    }
}
