import { cloneArray } from '../state/utils';
import { TodoItem } from '../common';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { FluxStore, FluxActionTypes, FluxAction, fluxDispatcherToken } from './services';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
    constructor(public store: FluxStore, @Inject(fluxDispatcherToken) private dispatcher: Subject<FluxAction>) {

    }

    public ngOnInit() {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Load));
    }

    public onAdd(description: string): void {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Add, 0, description));
    }

    public onReset(): void {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Reset));
    }
}
