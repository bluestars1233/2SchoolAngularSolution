import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';
import { Subject } from 'rxjs/Subject';
import { FLUX_CONFIG, FluxStore } from './services';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule,
        MdSnackBarModule, MdCardModule, MdCheckboxModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent],
    providers: [...FLUX_CONFIG, FluxStore]
})
export class TodoFluxModule {

}
