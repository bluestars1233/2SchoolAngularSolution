import { FluxActionTypes } from './services/actions.type';
import { TodoItem } from '../common';
import { Component, Inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { fluxDispatcherToken, FluxAction } from './services';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    @Input()
    public items: TodoItem[];
    @Output()
    public reset = new EventEmitter<void>();

    constructor( @Inject(fluxDispatcherToken) private dispatcher: Subject<FluxAction>) {

    }

    public get itemsOpen(): TodoItem[] {
        return this.filterCheckedBy(false);
    }

    public get itemsDone(): TodoItem[] {
        return this.filterCheckedBy(true);
    }

    public onChecked(checked: boolean, item: TodoItem) {
        if (checked) {
            this.dispatcher.next(new FluxAction(FluxActionTypes.Check, item.id));
        } else {
            this.dispatcher.next(new FluxAction(FluxActionTypes.Uncheck, item.id));
        }
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.items) {
            return this.items.filter((item) => item.checked === checked);
        }

        return undefined;
    }
}
