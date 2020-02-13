import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IsAdminDialogComponent } from '../dialog/is-admin-dialog.component';

@Injectable()
export class CanActivateTodoService implements CanActivate {

    constructor(private snackbar: MatSnackBar, private dialog: MatDialog) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const result$ = new Subject<boolean>();

        const dialogRef = this.dialog.open(IsAdminDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'yes') {
                result$.next(true);
            } else {
                result$.next(false);
            }

            result$.complete();
        });

        return result$;
    }
}
