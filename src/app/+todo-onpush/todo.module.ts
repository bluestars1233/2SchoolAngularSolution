import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent, TodoAddComponent, TodoItemComponent, TodoListComponent, TodoListOnPushComponent } from './';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

console.log('`Todo` onPush bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule,
        MdCardModule, MdCheckboxModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, TodoListOnPushComponent],
})
export class TodoOnPushModule {

}
