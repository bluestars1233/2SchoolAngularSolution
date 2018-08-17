import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        HttpClientModule,
        FlexLayoutModule
    ]
})
export class SharedModule {

}
