import { Component, OnInit } from '@angular/core';
import { WookieService } from 'src/app/services/wookie.service';
import { WookieMovie, WookieMovies } from 'src/app/models/wookie-movie.model';

@Component({
  selector: 'app-wookie-movies',
  templateUrl: './wookie-movies.component.html',
  styleUrls: ['./wookie-movies.component.scss'],
})
export class WookieMoviesComponent implements OnInit {
  movieList: WookieMovie[];
  constructor(private wookieService: WookieService) {}

  ngOnInit(): void {
    this.wookieService.getMovies().subscribe((response) => {
      this.movieList = response.movies;
    });
  }
}
