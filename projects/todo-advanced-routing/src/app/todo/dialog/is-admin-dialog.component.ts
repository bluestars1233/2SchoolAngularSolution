import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'todo-is-admin-dialog',
    templateUrl: 'is-admin-dialog.component.html',
})
export class IsAdminDialogComponent {
    constructor(public dialogRef: MatDialogRef<IsAdminDialogComponent>) { }
}
