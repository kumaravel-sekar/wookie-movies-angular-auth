import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericConstants } from '../helpers/generic-const';
import { WookieMovies } from '../models/wookie-movie.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WookieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<WookieMovies> {
    return this.http.get<WookieMovies>(`${GenericConstants.BASE_URL}`);
  }
}
