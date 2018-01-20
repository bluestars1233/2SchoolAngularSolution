import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { TodoService, TodoAotService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { todoRoutesModule } from './todo.routes';
import { TodoViewComponent } from './todo-view.component';

console.log('`Todo` bundle loaded asynchronously');

export function TodoServiceFactory(http: HttpClient): TodoService {
    return new TodoService(http);
}

export let todoAotService: TodoAotService = new TodoAotService();

// not working aot code
// providers: [{ provide: TodoAotService, useValue: new TodoAotService() },
//     {
//         provide: TodoService,
//         useFactory: (http) => { return new TodoService(http); },
//         deps: [HttpClient]
//     }]

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, 
        MatCardModule, MatListModule, MatCheckboxModule, FlexLayoutModule, HttpClientModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, TodoViewComponent],
    providers: [{ provide: TodoAotService, useValue: todoAotService },
    {
        provide: TodoService,
        useFactory: TodoServiceFactory,
        deps: [HttpClient]
    }]
})
export class TodoAoTModule {

}
