import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WookieMovieDetailComponent } from './pages/wookie-movie-detail/wookie-movie-detail.component';
import { WookieMoviesComponent } from './pages/wookie-movies/wookie-movies.component';
import { WookieMovieSearchComponent } from './pages/wookie-search/wookie-movie-search.component';

const routes: Routes = [
  { path: '', component: WookieMoviesComponent },
  { path: 'movie/:id', component: WookieMovieDetailComponent },
  { path: 'search', component: WookieMovieSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
