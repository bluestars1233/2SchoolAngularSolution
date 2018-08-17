import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoItem } from '../../shared';
import { FluxAction, FluxActionTypes } from '../services/actions.type';
import { fluxDispatcherToken } from '../services/flux.configuration';

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

    constructor(@Inject(fluxDispatcherToken) private dispatcher: Subject<FluxAction>) {

    }

    public onChecked(checked: boolean, item: TodoItem) {
        if (checked) {
            this.dispatcher.next(new FluxAction(FluxActionTypes.Check, item.id));
        } else {
            this.dispatcher.next(new FluxAction(FluxActionTypes.Uncheck, item.id));
        }
    }
}
