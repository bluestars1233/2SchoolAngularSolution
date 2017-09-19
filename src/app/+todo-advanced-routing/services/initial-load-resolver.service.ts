import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TodoService } from './todo.service';
import { TodoItem } from '../../common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodosResolve implements Resolve<TodoItem[]> {

  constructor(private todoService: TodoService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<TodoItem[]> {
    return this.todoService.load();
  }
}
