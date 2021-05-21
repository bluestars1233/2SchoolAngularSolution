import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
})
export class TodoFilterComponent {
  public filter: string | undefined;

  @Output()
  public filterChanged = new EventEmitter<string>();

  private keyPress$ = new Subject<string>();

  constructor() {
    this.keyPress$.pipe(debounceTime(500)).subscribe((value) => {
      this.filter = value;
      this.filterChanged.emit(value);
    });
  }

  public valueChanged(value: string) {
    this.keyPress$.next(value);
  }

  public resetFilter() {
    this.valueChanged('');
  }
}
