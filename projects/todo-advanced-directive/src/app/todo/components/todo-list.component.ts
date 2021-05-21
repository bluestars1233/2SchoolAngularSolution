import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';

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

    constructor(private snackBar: MatSnackBar) {

    }

    public onChecked(checked: boolean, item: TodoItem) {
        item.checked = checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', undefined, { duration: 1500 });
    }

}
