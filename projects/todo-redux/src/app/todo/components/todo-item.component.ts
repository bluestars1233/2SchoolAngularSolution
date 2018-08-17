import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../actions/actions.type';

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
