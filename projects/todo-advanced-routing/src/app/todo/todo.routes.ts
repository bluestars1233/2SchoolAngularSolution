import { RouterModule } from '@angular/router';
import { TodoComponent } from './containers/todo.component';
import { CanActivateTodoService } from './services/can-activate-todo.service';
import { CanDeactivateTodoService } from './services/can-deactivate-todo.service';
import { TodosResolve } from './services/initial-load-resolver.service';

const todoRoutes = [
    {
        path: '', children: [
            {
                path: '',
                component: TodoComponent,
                canActivate: [CanActivateTodoService],
                canDeactivate: [CanDeactivateTodoService],
                resolve: { todos: TodosResolve }
            },
        ]
    },
];

export const todoRoutesModule = RouterModule.forChild(todoRoutes);
