import { FluxStore, FluxActionTypes, FluxAction, fluxDispatcherToken } from './services';
import { TodoItem } from '../common';
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {

    constructor(public store: FluxStore, @Inject(fluxDispatcherToken) private dispatcher: Subject<FluxAction>) {

    }

    public ngOnInit() {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Load));
    }

    public ngOnDestroy() {

    }

    public onAdd(newItem: TodoItem): void {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Add, 0, newItem.description));
    }

    public onReset(): void {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Reset));
    }
}
