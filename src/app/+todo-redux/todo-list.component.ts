import { Store } from '@ngrx/store';
import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Inject } from '@angular/core';
import { CheckTodoAction } from './actions';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { PlaygroundState, TodoItem } from '../common';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
    @Input()
    public items: TodoItem[];
    @Output()
    public reset = new EventEmitter<void>();

    constructor(private store: Store<PlaygroundState>) {

    }

    public get itemsOpen(): TodoItem[] {
        return this.filterCheckedBy(false);
    }

    public get itemsDone(): TodoItem[] {
        return this.filterCheckedBy(true);
    }

    public onChecked(newChecked: boolean, item: TodoItem) {
        this.store.dispatch(new CheckTodoAction({ checked: newChecked, id: item.id }));
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.items) {
            return this.items.filter((item) => item.checked === checked);
        }

        return undefined;
    }
}
