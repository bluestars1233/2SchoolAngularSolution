import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { TodoAotService } from './services/aot-error.service';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';

export function TodoServiceFactory(http: HttpClient): TodoService {
    return new TodoService(http);
}

export let todoAotService: TodoAotService = new TodoAotService();

// working aot code
// providers: [{ provide: TodoAotService, useValue: todoAotService },
//     {
//         provide: TodoService,
//         useFactory: TodoServiceFactory,
//         deps: [HttpClient]
//     }]

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule,
        MatCardModule, MatListModule, MatCheckboxModule, FlexLayoutModule, HttpClientModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, TodoViewComponent],
    providers: [{ provide: TodoAotService, useValue: new TodoAotService() },
    {
        provide: TodoService,
        useFactory: (http) => new TodoService(http),
        deps: [HttpClient]
    }]
})
export class TodoAoTModule {

}
