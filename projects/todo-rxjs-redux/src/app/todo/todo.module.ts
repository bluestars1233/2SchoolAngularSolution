import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { ActionToasterService } from './services/action-toaster.service';
import { TodoService } from './services/todo.service';
import { todoPlaybackRoutesModule } from './todo.routes';

@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule,
        MatSnackBarModule, MatCardModule, MatCheckboxModule, MatListModule, HttpClientModule, FlexLayoutModule,
        todoPlaybackRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoViewComponent, TodoItemComponent],
    providers: [TodoService, ActionToasterService]
})
export class TodoRxjsReduxModule {

}
