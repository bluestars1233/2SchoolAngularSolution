import { Injectable } from '@angular/core';
import { TodoComponent } from '../todo.component';
import { TodoListComponent } from '../todo-list.component';
import { OpenItemsDialogComponent } from '../dialog';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';
import { Observer } from 'rxjs/Observer';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MdDialogRef, MdSnackBar, MdDialog } from '@angular/material';
import { IsAdminDialogComponent } from '../dialog';

@Injectable()
export class CanDeactivateTodoService implements CanDeactivate<TodoComponent> {
  constructor(private dialog: MdDialog) {

  }

  public canDeactivate(
    component: TodoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    let resultObserver: Observer<boolean>;
    let resultObs = new Observable<boolean>((observer) => {
      resultObserver = observer;
    });

    if (component.todos.filter((item) => !item.checked).length > 0) {
      let dialogRef = this.dialog.open(OpenItemsDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'ok') {
          resultObserver.next(true);
        } else {
          resultObserver.next(false);
        }

        resultObserver.complete();
      });
    }

    return resultObs;
  }
}
