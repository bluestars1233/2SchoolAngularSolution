import { MatButtonModule, MatInputModule, MatSnackBarModule,
    MatCardModule, MatCheckboxModule, MatDialogModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoViewComponent } from './todo-view.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';
import { OpenItemsDialogComponent, IsAdminDialogComponent } from './dialog';
import { CanActivateTodoService, CanDeactivateTodoService, TodosResolve } from './services';

console.log('`Todo` bundle loaded asynchronously');

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
