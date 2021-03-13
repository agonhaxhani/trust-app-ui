import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {
  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  public success(message, duration = 3000) {
    this.zone.run(() => {
      this.snackBar.open(message, 'Success', {
        duration: duration,
        horizontalPosition: 'left',
        panelClass: 'g-snackbar-success'
      });
    });
  }

  public info(message, duration = 3000) {
    this.zone.run(() => {
      this.snackBar.open(message, 'Info', {
        duration: duration,
        horizontalPosition: 'left',
        panelClass: 'g-snackbar-info'
      });
    });
  }

  public error(message, duration = 3000) {
    this.zone.run(() => {
      this.snackBar.open(message, 'Error', {
        duration: duration,
        horizontalPosition: 'left',
        panelClass: 'g-snackbar-error'
      });
    });
  }
}
