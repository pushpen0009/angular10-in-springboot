import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import SnackBarModel from '../model/SnackBarModel';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) { }

  show(config: SnackBarModel): void {
    this.snackBar.open(config.message, config.actionBtnLabel || '', {
      duration: config.duration || 5000,
      verticalPosition: config.posY || 'top',
      horizontalPosition: config.posX || 'center',
      panelClass: [config.type || 'info']
    });
  }
}
