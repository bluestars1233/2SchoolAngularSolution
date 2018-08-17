import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoItem } from '../../shared';
import { TodoService } from './todo.service';

@Injectable()
export class TodosResolve implements Resolve<TodoItem[]> {

  constructor(private todoService: TodoService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<TodoItem[]> {
    return this.todoService.load();
  }
}
