import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { BorderDirective } from './border.directive';

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
        FlexLayoutModule,
        BorderDirective
    ],
    declarations: [BorderDirective]
})
export class SharedModule {

}
