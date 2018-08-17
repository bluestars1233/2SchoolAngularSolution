import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
    MatInputModule, MatListModule, MatSnackBarModule
} from '@angular/material';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog.component';
import { DialogService } from './dialog/dialog.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorLoggerService } from './services/error-logger.service';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule,
        MatCardModule, MatCheckboxModule, MatDialogModule, MatListModule, todoRoutesModule, FlexLayoutModule, HttpClientModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoViewComponent, TodoItemComponent, ConfirmDialogComponent],
    providers: [TodoService, ErrorLoggerService, { provide: ErrorHandler, useClass: ErrorHandlerService }, DialogService],
    entryComponents: [ConfirmDialogComponent]
})
export class TodoAdvancedErrorhandlingModule {

}
