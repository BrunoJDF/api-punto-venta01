import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor, NotFoundException } from '@nestjs/common';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { DataResponse } from '../dto/response.dto';

@Injectable()
export class ExceptionResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = new DataResponse<any>();
    return next.handle().pipe(
      map(data => {
        if (data instanceof HttpException) {
          response.isError = true;
          response.message = "data.message";
          response.statusCode = data.getStatus();
        }
        return response;
      })
    );
  }
}
