import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TodoItem } from '../../shared';

@Component({
    selector: 'todo-view',
    templateUrl: './todo-view.component.html'
})
export class TodoViewComponent {
    @Input()
    public items: TodoItem[];
    @Output()
    public reset = new EventEmitter<void>();

    public get itemsOpen(): TodoItem[] {
        return this.filterCheckedBy(false);
    }

    public get itemsDone(): TodoItem[] {
        return this.filterCheckedBy(true);
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.items) {
            return this.items.filter((item) => item.checked === checked);
        }

        return undefined;
    }
}
