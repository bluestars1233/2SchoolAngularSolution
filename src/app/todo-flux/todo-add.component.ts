import { TodoItem } from '../common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html'
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('description') private descriptionInput: ElementRef;

    public onAdd(newItemDescription: string) {
        this.add.emit(newItemDescription);
        this.descriptionInput.nativeElement.value = '';
    }
}
