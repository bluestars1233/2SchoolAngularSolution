import { TodoItem } from '../common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Action, dispatcherToken } from '../state';
import { MdSnackBar } from '@angular/material';
import { TodoItemComponent } from './todo-item.component';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements AfterViewInit {
    @Input()
    public items: TodoItem[];
    @Output()
    public reset = new EventEmitter<void>();

    @ViewChildren(TodoItemComponent, { read: ElementRef }) private todoItems: QueryList<ElementRef>;

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

    public ngAfterViewInit(): void {
        this.todoItems.changes.subscribe((list) => {
            this.makeEachSecondGrey(list);
        });
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.items) {
            return this.items.filter((item) => item.checked === checked);
        }

        return undefined;
    }

    private makeEachSecondGrey(list: QueryList<ElementRef>): void {
        let counter = 0;
        list.forEach((element) => {
            if (counter % 2 === 0) {
                // we need to select the div since that is the first element having proper size
                element.nativeElement.firstElementChild.firstElementChild.style.backgroundColor = 'lightGrey';
            }
            counter++;
        });
    }
}
