import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule
} from '@angular/material';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewImmutableComponent } from './components/todo-view-immutable.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { todoRoutesModule } from './todo.routes';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule,
        MatCheckboxModule, HttpClientModule, FlexLayoutModule, MatListModule, MatFormFieldModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoViewImmutableComponent,
        TodoListComponent, TodoViewComponent, TodoItemComponent],
})
export class TodoOnPushModule {

}
