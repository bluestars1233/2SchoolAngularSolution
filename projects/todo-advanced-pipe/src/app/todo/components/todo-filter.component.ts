import { Component, EventEmitter, Output } from '@angular/core';

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
