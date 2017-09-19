import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

console.log('`TodoAdvancedDirectiveModule` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule,
        MdCheckboxModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent],
    providers: [TodoService]
})
export class TodoAdvancedDirectiveModule {

}
