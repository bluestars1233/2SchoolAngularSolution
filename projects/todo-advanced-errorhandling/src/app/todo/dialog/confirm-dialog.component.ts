import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'todo-confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {

    public title: string | undefined;
    public message: string | undefined;

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {

    }
}
