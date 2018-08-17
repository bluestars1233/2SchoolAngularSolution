import { Injectable } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

@Injectable()
export class ErrorLoggerService {

  constructor(private dialogService: DialogService) {
  }

  public log(message: string): void {
    this.dialogService.confirm('Error', message);
  }
}
