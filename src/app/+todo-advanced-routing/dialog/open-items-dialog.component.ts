import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'open-items-dialog',
    templateUrl: 'open-items-dialog.component.html',
})
export class OpenItemsDialogComponent {
    constructor(public dialogRef: MdDialogRef<OpenItemsDialogComponent>) { }
}
