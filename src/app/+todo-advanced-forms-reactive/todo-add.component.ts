import { MdSnackBar } from '@angular/material';
import { TodoItem } from '../common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html'
})
export class TodoAddComponent implements OnInit {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
    public todoForm: FormGroup;

    @ViewChild('description') private descriptionInput: ElementRef;

    constructor(public snackBar: MdSnackBar, private formBuilder: FormBuilder) {

    }

    public ngOnInit(): void {
        this.todoForm = this.formBuilder.group({
            description: new FormControl('', [Validators.required, Validators.minLength(3)])
        });
    }

    public onAdd(newItemDescription: string) {
        this.add.emit({ description: newItemDescription, checked: false, lastModified: new Date(), id: 0 });
        this.descriptionInput.nativeElement.value = '';
        this.snackBar.open(`Item with description "${newItemDescription} added`, null, { duration: 1500 });
    }

    public get descriptionControl(): AbstractControl {
        return this.todoForm.get('description');
    }
}
