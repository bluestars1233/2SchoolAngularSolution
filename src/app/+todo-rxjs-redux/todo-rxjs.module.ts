import { StateModule } from '../state/state.module';
import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService, ActionToasterService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoPlaybackComponent } from './todo-rxjs.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoPlaybackRoutesModule } from './todo-rxjs.routes';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, StateModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule,
        MdCardModule, MdCheckboxModule, todoPlaybackRoutesModule],
    declarations: [TodoAddComponent, TodoPlaybackComponent, TodoListComponent, TodoItemComponent],
    providers: [TodoService, ActionToasterService]
})
export class TodoRxjsReduxModule {

}
