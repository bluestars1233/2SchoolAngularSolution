import { Injectable, Inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MdDialogRef, MdSnackBar, MdDialog } from '@angular/material';
import { IsAdminDialogComponent } from '../dialog';

@Injectable()
export class CanActivateTodoService implements CanActivate {

    constructor(private snackbar: MdSnackBar, private dialog: MdDialog) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let resultObserver: Observer<boolean>;
        let resultObs = new Observable<boolean>((observer) => {
            resultObserver = observer;
        });

        let dialogRef = this.dialog.open(IsAdminDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'yes') {
                resultObserver.next(true);
            } else {
                resultObserver.next(false);
            }

            resultObserver.complete();
        });

        return resultObs;
    }
}
