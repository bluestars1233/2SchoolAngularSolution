import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TodoItem } from '../../shared';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html'
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

    // required for AoT build
    public descriptionText: string;

    @ViewChild('myForm', { static: true }) form: NgForm;

    constructor(public snackBar: MatSnackBar) {

    }

    public onAdd() {
        this.add.emit({ description: this.descriptionText, checked: false, lastModified: new Date(), id: 0 });
        this.form.resetForm();
        this.snackBar.open(`Item with description "${this.descriptionText} added`, null, { duration: 1500 });
    }
}
