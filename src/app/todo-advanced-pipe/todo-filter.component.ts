import { TodoItem } from '../common';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'todo-filter',
    templateUrl: './todo-filter.component.html'
})
export class TodoFilterComponent {
    public filter: string;
    @Output()
    public filterChanged = new EventEmitter<string>();

    constructor() {

    }

    public valueChanged(value: string) {
        this.filter = value;
        this.filterChanged.emit(value);
    }

    public resetFilter() {
        this.valueChanged('');
    }
}
