import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { TodoItem } from '../common';
import { fluxDispatcherToken, FluxAction, FluxActionTypes } from './services';

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

    constructor( @Inject(fluxDispatcherToken) private dispatcher: Subject<FluxAction>) {

    }

    public onChecked(checked: boolean, item: TodoItem) {
        if (checked) {
            this.dispatcher.next(new FluxAction(FluxActionTypes.Check, item.id));
        } else {
            this.dispatcher.next(new FluxAction(FluxActionTypes.Uncheck, item.id));
        }
    }
}
