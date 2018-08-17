import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatDialogModule, MatInputModule, MatListModule, MatSnackBarModule
} from '@angular/material';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { IsAdminDialogComponent } from './dialog/is-admin-dialog.component';
import { OpenItemsDialogComponent } from './dialog/open-items-dialog.component';
import { CanActivateTodoService } from './services/can-activate-todo.service';
import { CanDeactivateTodoService } from './services/can-deactivate-todo.service';
import { TodosResolve } from './services/initial-load-resolver.service';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatListModule,
        MatCardModule, MatCheckboxModule, MatDialogModule, HttpClientModule, FlexLayoutModule, todoRoutesModule],
    entryComponents: [OpenItemsDialogComponent, IsAdminDialogComponent],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoViewComponent,
        TodoItemComponent, OpenItemsDialogComponent, IsAdminDialogComponent],
    providers: [TodoService, CanActivateTodoService, CanDeactivateTodoService, TodosResolve],
})
export class TodoAdvancedRoutingModule {

}
