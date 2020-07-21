import { Component, OnInit } from '@angular/core';
import { WookieService } from 'src/app/services/wookie.service';
import { WookieMovie, WookieMovies } from 'src/app/models/wookie-movie.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-wookie-movies',
  templateUrl: './wookie-movies.component.html',
  styleUrls: ['./wookie-movies.component.scss'],
})
export class WookieMoviesComponent implements OnInit {
  movieList: WookieMovie[];
  genreList: string[];

  constructor(private wookieService: WookieService) {}

  ngOnInit(): void {
    this.wookieService.getMovies().subscribe((response) => {
      this.genreList = this.getAllGenres(response.movies);
      this.movieList = response.movies;
    });
  }

  getAllGenres(movieList) {
    let genreList = [];
    movieList.forEach((movie) => {
      genreList = Array.from(new Set(genreList.concat(movie.genres)));
    });
    return genreList;
  }
}
