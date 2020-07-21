import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wookie-movie-rating',
  templateUrl: './wookie-movie-rating.component.html',
  styleUrls: ['./wookie-movie-rating.component.scss'],
})
export class WookieMovieRatingComponent implements OnInit {
  @Input() rating: number;
  stars = [1, 2, 3, 4, 5];

  public ratedCount: number;

  constructor() {
    this.ratedCount = 0;
  }

  ngOnInit() {
    this.rating = this.rating * 5;
    this.ratedCount = Math.round(this.rating / 10);
  }
}
