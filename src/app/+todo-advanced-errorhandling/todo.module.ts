import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule, MdDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService, ErrorHandlerService, ErrorLoggerService } from './services';
import { DialogService, ConfirmDialogComponent } from './dialog';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule,
        MdCardModule, MdDialogModule, MdCheckboxModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, ConfirmDialogComponent],
    providers: [TodoService, ErrorLoggerService, { provide: ErrorHandler, useClass: ErrorHandlerService }, DialogService],
    entryComponents: [ConfirmDialogComponent]
})
export class TodoAdvancedErrorhandlingModule {

}
