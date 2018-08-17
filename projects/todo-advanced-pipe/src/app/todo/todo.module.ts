import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatSnackBarModule
} from '@angular/material';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoFilterComponent } from './components/todo-filter.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { TodoFilterPipe } from './services/todo-filter.pipe';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule,
        MatFormFieldModule, MatCardModule, MatCheckboxModule, todoRoutesModule, MatListModule, FlexLayoutModule, HttpClientModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, TodoViewComponent,
        TodoFilterComponent, TodoFilterPipe],
    providers: [TodoService]
})
export class TodoAdvancedPipeModule {

}
