import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { CanActivateTodoService, CanDeactivateTodoService, TodosResolve } from './services';

const todoRoutes = [
    {
        path: '', children: [
            {
                path: '', component: TodoComponent,
                canActivate: [CanActivateTodoService],
                canDeactivate: [CanDeactivateTodoService],
                resolve: { todos: TodosResolve }
            },
        ]
    },
];

export const todoRoutesModule = RouterModule.forChild(todoRoutes);
