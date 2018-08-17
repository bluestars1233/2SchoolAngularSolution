import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangSwitchComponent } from './components/lang-switch.component';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule,
        MatCheckboxModule, MatSelectModule, todoRoutesModule, HttpClientModule, MatListModule, FlexLayoutModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, TodoViewComponent, LangSwitchComponent],
    providers: [TodoService]
})
export class TodoAdvancedTranslateModule {

}
