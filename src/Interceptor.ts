import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class Interceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let startDate = Date.now();

    return next.handle().pipe(
      map((data) => ({
        ...data,
        loadTime: Date.now() - startDate,
      }))
    );

  }
}