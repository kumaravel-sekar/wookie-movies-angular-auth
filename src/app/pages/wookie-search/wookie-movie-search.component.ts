import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WookieService } from 'src/app/services/wookie.service';
import { WookieMovie } from 'src/app/models/wookie-movie.model';

@Component({
  selector: 'app-wookie-movie-search',
  templateUrl: './wookie-movie-search.component.html',
  styleUrls: ['./wookie-movie-search.component.scss'],
})
export class WookieMovieSearchComponent implements OnInit {
  movieList: WookieMovie[];
  constructor(
    private route: ActivatedRoute,
    private wookieService: WookieService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.wookieService
        .searchMovie(params['searchTxt'])
        .subscribe((response) => {
          this.movieList = response.movies;
        });
    });
  }
}
