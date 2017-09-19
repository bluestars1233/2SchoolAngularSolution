import { DialogService } from '../dialog';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorLoggerService {

  constructor(private _dialogService: DialogService) {
  }

  public log(message: string): void {
      this._dialogService.confirm('error', message);
  }
}
