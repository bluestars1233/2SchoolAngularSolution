import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoViewComponent } from './todo-view.component';

@Component({
    selector: 'todo-immutable-view',
    templateUrl: './todo-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoViewImmutableComponent extends TodoViewComponent {
}
