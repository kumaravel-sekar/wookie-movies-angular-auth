import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericConstants } from '../helpers/generic-const';
import { WookieMovies } from '../models/wookie-movie.model';

@Injectable({ providedIn: 'root' })
export class WookieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<WookieMovies>(`${GenericConstants.BASE_URL}`);
  }
}
