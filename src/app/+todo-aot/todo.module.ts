import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService, TodoAotService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';
import { Http } from '@angular/http';

console.log('`Todo` bundle loaded asynchronously');

export function TodoServiceFactory(http: Http): TodoService {
    return new TodoService(http);
}

export let todoAotService: TodoAotService = new TodoAotService();

// not working aot code
// providers: [{ provide: TodoAotService, useValue: new TodoAotService() },
//     {
//         provide: TodoService,
//         useFactory: (http) => { return new TodoService(http); },
//         deps: [Http]
//     }]

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule,
        MdCardModule, MdCheckboxModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent],
    providers: [{ provide: TodoAotService, useValue: todoAotService },
    {
        provide: TodoService,
        useFactory: TodoServiceFactory,
        deps: [Http]
    }]
})
export class TodoAoTModule {

}
