import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(updates: SwUpdate, snackbar: MatSnackBar) {
    updates.available.subscribe(event => {
      if (event.available) {
        const ref = snackbar.open('new version available', 'reload');
        ref.onAction().subscribe(() => {
          document.location.reload(); // trigger the refresh
        });
      }
    });
  }
}
