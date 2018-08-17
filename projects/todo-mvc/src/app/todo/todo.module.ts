import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { todoRoutesModule } from './todo.routes';

@NgModule({
    imports: [SharedModule, todoRoutesModule],
    declarations: [TodoAddComponent, TodoViewComponent, TodoComponent, TodoListComponent, TodoItemComponent],
})
export class TodoMvcModule {

}
