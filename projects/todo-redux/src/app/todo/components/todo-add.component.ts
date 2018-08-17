import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { TodoItem } from '../actions/actions.type';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

    @ViewChild('description') private descriptionInput: ElementRef;

    constructor() {

    }

    public onAdd(newItemDescription: string) {
        this.add.emit({ description: newItemDescription, checked: false, lastModified: new Date(), id: 0 });
        this.descriptionInput.nativeElement.value = '';
    }
}
