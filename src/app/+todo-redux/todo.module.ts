import { ActionToasterService } from './services';
import { TodoEffects } from './effects';
import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from './services';
import { TodoItemComponent } from './todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';

// ngrx imports
/**
 * StoreModule.provideStore is imported once in the root module, accepting a reducer
 * function or object map of reducer functions. If passed an object of
 * reducers, combineReducers will be run creating your application
 * meta-reducer. This returns all providers for an @ngrx/store
 * based application.
 */
import { StoreModule } from '@ngrx/store';

/**
 * @ngrx/router-store keeps router state up-to-date in the store and uses
 * the store as the single source of truth for the router's state.
 */
import { StoreRouterConnectingModule } from '@ngrx/router-store';

/**
 * EffectsModule.run() sets up the effects class to be initialized
 * immediately when the application starts.
 *
 * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
 */
import { EffectsModule } from '@ngrx/effects';

/**
 * Store devtools instrument the store retaining past versions of state
 * and recalculating new states. This enables powerful time-travel
 * debugging.
 *
 * To use the debugger, install the Redux Devtools extension for either
 * Chrome or Firefox
 *
 * See: https://github.com/zalmoxisus/redux-devtools-extension
 */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule,
        StoreModule.forRoot(reducers), EffectsModule.forRoot([TodoEffects]), StoreRouterConnectingModule, StoreDevtoolsModule.instrument(),
        todoRoutesModule],
    declarations: [TodoAddComponent, TodoComponent, TodoListComponent, TodoItemComponent],
    providers: [TodoService, ActionToasterService]
})
export class TodoReduxModule {

}
