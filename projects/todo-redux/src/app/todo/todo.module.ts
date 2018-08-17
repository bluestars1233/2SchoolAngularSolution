import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
/**
 * EffectsModule.run() sets up the effects class to be initialized
 * immediately when the application starts.
 *
 * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
 */
import { EffectsModule } from '@ngrx/effects';
/**
 * @ngrx/router-store keeps router state up-to-date in the store and uses
 * the store as the single source of truth for the router's state.
 */
import { StoreRouterConnectingModule } from '@ngrx/router-store';
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
import { featureName, reducers } from './reducers/todo.reducer';
import { ActionToasterService } from './services/action-toaster.service';
import { TodoService } from './services/todo.service';
import { todoRoutesModule } from './todo.routes';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSnackBarModule,
        MatCardModule, MatCheckboxModule, MatListModule, HttpClientModule, FlexLayoutModule, todoRoutesModule,
        StoreModule.forFeature(featureName, reducers), EffectsModule.forRoot([TodoEffects]), StoreRouterConnectingModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoViewComponent, TodoItemComponent],
    providers: [TodoService, ActionToasterService]
})
export class TodoReduxModule {

}
