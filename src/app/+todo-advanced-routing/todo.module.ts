import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule, MdDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';
import { OpenItemsDialogComponent, IsAdminDialogComponent } from './dialog';
import { CanActivateTodoService, CanDeactivateTodoService, TodosResolve } from './services';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdDialogModule, MdSnackBarModule,
        MdCardModule, MdCheckboxModule, todoRoutesModule],
    entryComponents: [OpenItemsDialogComponent, IsAdminDialogComponent],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, OpenItemsDialogComponent, IsAdminDialogComponent],
    providers: [TodoService, CanActivateTodoService, CanDeactivateTodoService, TodosResolve],
})
export class TodoAdvancedRoutingModule {

}
