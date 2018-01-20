import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatCheckboxModule, 
    MatDialogModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoService, ErrorHandlerService, ErrorLoggerService } from './services';
import { DialogService, ConfirmDialogComponent } from './dialog';
import { TodoViewComponent, TodoListComponent, TodoItemComponent } from './';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule,
        MatCardModule, MatCheckboxModule, MatDialogModule, MatListModule, todoRoutesModule, HttpClientModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoViewComponent, TodoItemComponent, ConfirmDialogComponent],
    providers: [TodoService, ErrorLoggerService, { provide: ErrorHandler, useClass: ErrorHandlerService }, DialogService],
    entryComponents: [ConfirmDialogComponent]
})
export class TodoAdvancedErrorhandlingModule {

}
