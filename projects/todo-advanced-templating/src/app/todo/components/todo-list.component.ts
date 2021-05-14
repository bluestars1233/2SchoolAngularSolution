import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
import { TodoItemComponent } from './todo-item.component';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements AfterViewInit {
    @Input()
    public items: TodoItem[] | undefined;
    @Input()
    public hasReset: boolean | undefined;
    @Input()
    public title: string | undefined;
    @Output()
    public reset = new EventEmitter<void>();

    @ViewChildren(TodoItemComponent, { read: ElementRef }) private todoItems: QueryList<ElementRef> | undefined;

    constructor(private snackBar: MatSnackBar) {

    }

    public ngAfterViewInit(): void {
        this.todoItems?.changes.subscribe((list) => {
            this.makeEachSecondGrey(list);
        });
    }

    public onChecked(checked: boolean, item: TodoItem) {
        item.checked = checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', undefined, { duration: 1500 });
    }

    private makeEachSecondGrey(list: QueryList<ElementRef>): void {
        let counter = 0;
        list.forEach((element) => {
            if (counter % 2 === 0) {
                // we need to select the div since that is the first element having proper size
                element.nativeElement.firstElementChild.firstElementChild.style.backgroundColor = 'lightGrey';
            } else {
                element.nativeElement.firstElementChild.firstElementChild.style.backgroundColor = 'white';
            }
            counter++;
        });
    }
}
