import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule,
    MatCheckboxModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent, TodoAddComponent, TodoItemComponent, TodoViewComponent, TodoListComponent, TodoViewImmutableComponent } from './';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

console.log('`Todo` onPush bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule,
        MatCheckboxModule, HttpClientModule, MatListModule, MatFormFieldModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoViewImmutableComponent,
        TodoListComponent, TodoViewComponent, TodoItemComponent],
})
export class TodoOnPushModule {

}
