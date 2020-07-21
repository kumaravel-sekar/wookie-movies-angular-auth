import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WookieMovieDetailComponent } from './pages/wookie-movie-detail/wookie-movie-detail.component';
import { WookieMoviesComponent } from './pages/wookie-movies/wookie-movies.component';

const routes: Routes = [
  { path: '', component: WookieMoviesComponent },
  { path: 'movie/:id', component: WookieMovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
