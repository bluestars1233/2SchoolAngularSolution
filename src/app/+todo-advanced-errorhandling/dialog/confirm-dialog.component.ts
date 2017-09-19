import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
    <h2 md-dialog-title>{{title}}</h2>
    <md-dialog-content>{{message}}</md-dialog-content>
    <md-dialog-actions>
        <button md-button [md-dialog-close]="true">Ok</button>
    </md-dialog-actions>
    `,
})
export class ConfirmDialogComponent {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) {

    }
}
