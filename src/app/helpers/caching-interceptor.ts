import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
} from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheMapService } from '../services/cache-map.service';
import { GenericConstants } from './generic-const';

const CACHABLE_URL = GenericConstants.BASE_URL;

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: CacheMapService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRequestCachable(req)) {
      return next.handle(req);
    }
    const cachedResponse = this.cache.get(req);
    if (cachedResponse !== null) {
      return of(cachedResponse);
    }
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.put(req, event);
        }
      })
    );
  }
  private isRequestCachable(req: HttpRequest<any>) {
    return req.method === 'GET' && req.url.indexOf(CACHABLE_URL) > -1;
  }
}