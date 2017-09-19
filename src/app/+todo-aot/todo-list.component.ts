import { TodoItem } from '../common';
import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    @Input()
    public items: TodoItem[];
    @Output()
    public reset = new EventEmitter<void>();

    constructor(private snackBar: MdSnackBar) {

    }

    public get itemsOpen(): TodoItem[] {
        return this.filterCheckedBy(false);
    }

    public get itemsDone(): TodoItem[] {
        return this.filterCheckedBy(true);
    }

    public onChecked(checked: boolean, item: TodoItem) {
        item.checked = checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', null, { duration: 1500 });
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.items) {
            return this.items.filter((item) => item.checked === checked);
        }

        return undefined;
    }
}
