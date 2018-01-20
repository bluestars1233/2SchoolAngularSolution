import { RouterModule } from '@angular/router';
import { TodoPlaybackComponent } from './todo-rxjs.component';

const todoRoutes = [
    {
        path: '', children: [
            { path: '', component: TodoPlaybackComponent },
        ]
    },
];

export const todoPlaybackRoutesModule = RouterModule.forChild(todoRoutes);
