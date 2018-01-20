import { Component, Input, OnInit, Inject, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TodoItem } from '../common';
import { TodoViewComponent } from './todo-view.component';

@Component({
    selector: 'todo-immutable-view',
    templateUrl: './todo-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoViewImmutableComponent extends TodoViewComponent {
}
