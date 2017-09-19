import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule, MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { LangSwitchComponent } from './lang-switch.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';

console.log('`TodoAdvancedTranslateModule` bundle loaded asynchronously');

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule,
        MdCardModule, MdCheckboxModule, MdSelectModule, todoRoutesModule, HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent, LangSwitchComponent],
    providers: [TodoService, TranslateStore]
})
export class TodoAdvancedTranslateModule {

}
