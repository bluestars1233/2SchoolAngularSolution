import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html'
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('description', { static: true }) private descriptionInput: ElementRef | undefined;

    public onAdd(newItemDescription: string) {
        this.add.emit(newItemDescription);

        if(this.descriptionInput) {
          this.descriptionInput.nativeElement.value = '';
        }
    }
}
