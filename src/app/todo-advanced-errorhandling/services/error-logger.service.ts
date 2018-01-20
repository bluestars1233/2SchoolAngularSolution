import { DialogService } from '../dialog';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorLoggerService {

  constructor(private dialogService: DialogService) {
  }

  public log(message: string): void {
      this.dialogService.confirm('Error', message);
  }
}
