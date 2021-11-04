import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DataResponse } from '../dto/response.dto';

@Injectable()
export class DataResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<DataResponse<any>> {
    const response = new DataResponse();
    return next.handle().pipe(
      map(data => {
        response.data = data;
        response.isError = false;
        response.statusCode = 200;
        return response;
      }),
      catchError((err, caught) => {
        if (err instanceof HttpException) {
          response.message = err.message;
          response.statusCode = err.getStatus();
        }
        return throwError(response);
      })
    );
  }
}
