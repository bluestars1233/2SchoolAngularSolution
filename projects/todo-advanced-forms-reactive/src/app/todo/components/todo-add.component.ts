import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TodoItem } from '../../shared';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html'
})
export class TodoAddComponent implements OnInit {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
    public todoForm: FormGroup;

    @ViewChild('addForm', { read: FormGroupDirective, static: true }) private form: FormGroupDirective;

    constructor(public snackBar: MatSnackBar) {

    }

    public ngOnInit(): void {
        this.todoForm = new FormGroup({
            description: new FormControl('', [Validators.required, Validators.minLength(3)])
        });
    }

    public onAdd(newItemDescription: string) {
        this.add.emit({ description: newItemDescription as string, checked: false, lastModified: new Date(), id: 0 });
        this.snackBar.open(`Item with description "${newItemDescription} added`, null, { duration: 1500 });
        this.revert();
    }

    public get descriptionControl(): AbstractControl {
        return this.todoForm.get('description');
    }

    public revert() {
        this.form.resetForm();
    }

    public get errorMessage() {
        return this.descriptionControl.hasError('required') ? 'Description is required.' :
            this.descriptionControl.hasError('minlength') ? 'Description must be at least 3 characters long.' :
                '';
    }
}
