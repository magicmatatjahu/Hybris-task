import { 
    ErrorHandler, 
    Injectable,
    Injector }                          from '@angular/core';
import { HttpErrorResponse }            from '@angular/common/http';
import { Router }                       from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(
    private readonly _injector: Injector
  ) {}

  handleError(error: Error | HttpErrorResponse) {

    const _router = this._injector.get(Router)

    if (error instanceof HttpErrorResponse) {

        _router.navigate(['/error'], { queryParams: {error: 'USER_NOT_FOUND'} })
    } else {

        _router.navigate(['/error'], { queryParams: {error: 'USER_NOT_FOUND'} })
    }

  }

}