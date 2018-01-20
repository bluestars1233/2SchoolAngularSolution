import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { TodoService, TodoFilterPipe } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoFilterComponent } from './todo-filter.component';
import { TodoViewComponent } from './todo-view.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule,
        MatCardModule, MatCheckboxModule, todoRoutesModule, MatListModule, FlexLayoutModule, HttpClientModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, TodoViewComponent, TodoFilterComponent, TodoFilterPipe],
    providers: [TodoService]
})
export class TodoAdvancedPipeModule {

}
