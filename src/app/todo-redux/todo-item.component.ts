import { TodoItem } from '../common';
import { Component, Input, Output, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
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
