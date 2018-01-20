import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { TodoService } from './services';
import { TodoItemComponent, TodoComponent, TodoListComponent, TodoAddComponent, TodoViewComponent } from './';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

console.log('`TodoAdvancedTemplateModule` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatListModule,
        MatCardModule, MatCheckboxModule, HttpClientModule, FlexLayoutModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoViewComponent, TodoListComponent, TodoItemComponent],
    providers: [TodoService]
})
export class TodoAdvancedTemplatingModule {

}
