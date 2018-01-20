import { MatButtonModule, MatInputModule, MatSnackBarModule, MatCardModule,
     MatCheckboxModule, MatSelectModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from './services';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoItemComponent, TodoListComponent, TodoComponent, TodoAddComponent, TodoViewComponent } from './';
import { LangSwitchComponent } from './lang-switch.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

console.log('`TodoAdvancedTranslateModule` bundle loaded asynchronously');

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
