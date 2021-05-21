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
    public items: TodoItem[] | undefined;
    @Input()
    public hasReset: boolean | undefined;
    @Input()
    public title: string | undefined;
    @Output()
    public resetItem = new EventEmitter<void>();

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
