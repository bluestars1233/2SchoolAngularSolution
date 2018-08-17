import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorLoggerService } from './error-logger.service';

@Injectable()
export class ErrorHandlerService extends ErrorHandler {

  constructor(private logger: ErrorLoggerService) {
    super();
  }

  public handleError(exception: any) {
    if (exception.message && exception.message.length > 0) {
      this.logger.log(exception.message);
    } else {
      this.logger.log('oops something went wrong!');
    }

    super.handleError(exception);
  }
}
