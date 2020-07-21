import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WookieService } from 'src/app/services/wookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wookie-movie-header',
  templateUrl: './wookie-movie-header.component.html',
  styleUrls: ['./wookie-movie-header.component.scss'],
})
export class WookieMovieHeaderComponent implements OnInit {
  wookieSearch = new FormControl();
  constructor(private wookieService: WookieService, private route: Router) {}

  ngOnInit(): void {}

  onSearch() {
    if (this.wookieSearch.value) {
      this.route.navigate(['/search'], {
        queryParams: { searchTxt: this.wookieSearch.value },
      });
    }
  }
}
