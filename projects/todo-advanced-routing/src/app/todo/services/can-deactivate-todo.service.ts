import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { TodoComponent } from '../containers/todo.component';
import { OpenItemsDialogComponent } from '../dialog/open-items-dialog.component';

@Injectable()
export class CanDeactivateTodoService implements CanDeactivate<TodoComponent> {
  constructor(private dialog: MatDialog) {

  }

  public canDeactivate(
    component: TodoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    const result$ = new Subject<boolean>();

    if (component.todos.filter((item) => !item.checked).length > 0) {
      const dialogRef = this.dialog.open(OpenItemsDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'ok') {
          result$.next(true);
        } else {
          result$.next(false);
        }

        result$.complete();
      });
    }

    return result$;
  }
}
