import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'todo-open-items-dialog',
    templateUrl: 'open-items-dialog.component.html',
})
export class OpenItemsDialogComponent {
    constructor(public dialogRef: MatDialogRef<OpenItemsDialogComponent>) { }
}
