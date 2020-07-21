import { Component, OnInit } from '@angular/core';
import { WookieService } from 'src/app/services/wookie.service';
import { WookieMovie, WookieMovies } from 'src/app/models/wookie-movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wookie-movie-detail',
  templateUrl: './wookie-movie-detail.component.html',
  styleUrls: ['./wookie-movie-detail.component.scss'],
})
export class WookieMovieDetailComponent implements OnInit {
  movieList: WookieMovie[];
  movieDetail: WookieMovie;
  constructor(
    private wookieService: WookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.wookieService.getMovies().subscribe((response) => {
      this.movieList = response.movies;
      const movieId = this.route.snapshot.url[1].path;
      this.movieDetail = this.movieList.filter((e) => e.id === movieId)[0];
    });
  }
}
