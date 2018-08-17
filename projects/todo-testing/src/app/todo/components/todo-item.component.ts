import { TodoItem } from '../../shared';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
    @Input()
    public item: TodoItem;
    @Output()
    public checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {

    }

    public onChecked(value: boolean) {
        this.checked.emit(value);
    }
}
