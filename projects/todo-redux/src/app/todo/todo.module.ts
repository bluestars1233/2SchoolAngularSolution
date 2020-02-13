import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
/**
 * EffectsModule.run() sets up the effects class to be initialized
 * immediately when the application starts.
 *
 * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
 */
import { EffectsModule } from '@ngrx/effects';

// ngrx imports
/**
 * StoreModule.provideStore is imported once in the root module, accepting a reducer
 * function or object map of reducer functions. If passed an object of
 * reducers, combineReducers will be run creating your application
 * meta-reducer. This returns all providers for an @ngrx/store
 * based application.
 */
import { StoreModule } from '@ngrx/store';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoViewComponent } from './components/todo-view.component';
import { TodoComponent } from './containers/todo.component';
import { TodoEffects } from './effects/todo.effects';
import { todoReducer } from './reducers/todo.reducer';
import { ActionToasterService } from './services/action-toaster.service';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';
import { todoFeatureKey } from './reducers/todo.selector';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule,
        MatCardModule, MatCheckboxModule, MatListModule, HttpClientModule, FlexLayoutModule, todoRoutesModule,
        StoreModule.forFeature(todoFeatureKey, todoReducer), EffectsModule.forRoot([TodoEffects])],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoViewComponent, TodoItemComponent],
    providers: [TodoService, ActionToasterService]
})
export class TodoReduxModule {

}
