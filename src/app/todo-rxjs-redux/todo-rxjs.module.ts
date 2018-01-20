import { StateModule } from '../state/state.module';
import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoService, ActionToasterService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoViewComponent } from './todo-view.component';
import { TodoPlaybackComponent } from './todo-rxjs.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoPlaybackRoutesModule } from './todo-rxjs.routes';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, StateModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule,
        MatCheckboxModule, MatListModule, HttpClientModule, FlexLayoutModule, todoPlaybackRoutesModule],
    declarations: [TodoAddComponent, TodoPlaybackComponent, TodoListComponent, TodoViewComponent, TodoItemComponent],
    providers: [TodoService, ActionToasterService]
})
export class TodoRxjsReduxModule {

}
