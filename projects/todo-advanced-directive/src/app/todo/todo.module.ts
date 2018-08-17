import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatListModule,
        MatCardModule, MatCheckboxModule, HttpClientModule, FlexLayoutModule, todoRoutesModule, SharedModule],
    declarations: [TodoAddComponent, TodoComponent, TodoViewComponent, TodoListComponent, TodoItemComponent],
    providers: [TodoService]
})
export class TodoAdvancedDirectiveModule {

}
