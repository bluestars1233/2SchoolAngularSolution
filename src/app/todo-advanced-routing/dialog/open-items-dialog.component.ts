import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'open-items-dialog',
    templateUrl: 'open-items-dialog.component.html',
})
export class OpenItemsDialogComponent {
    constructor(public dialogRef: MatDialogRef<OpenItemsDialogComponent>) { }
}
