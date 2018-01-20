import { MatSnackBar } from '@angular/material';
import { TodoItem } from '../common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html'
})
export class TodoAddComponent implements OnInit {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
    public todoForm: FormGroup;

    @ViewChild('addForm', { read: FormGroupDirective }) private form: FormGroupDirective;

    constructor(public snackBar: MatSnackBar, private formBuilder: FormBuilder) {

    }

    public ngOnInit(): void {
        this.todoForm = this.formBuilder.group({
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
        // This would work and no template variable is required but some manual iterating over controls
        // for (const controlName in this.todoForm.controls) {
        //     if (this.todoForm[controlName]) {
        //         this.todoForm[controlName].reset('');
        //     }
        // }

        // In general this should work however there is still an issue with it on material design, therefore the input keeps to be displayed in red
        // https://github.com/angular/material2/issues/8848
        // this.todoForm.reset({
        //     description: ''
        // });

        this.form.resetForm();
    }

    public get errorMessage() {
        return this.descriptionControl.hasError('required') ? 'Description is required.' :
            this.descriptionControl.hasError('minlength') ? 'Description must be at least 3 characters long.' :
                '';
    }
}
