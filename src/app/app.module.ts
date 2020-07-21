import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WookieMoviesComponent } from './pages/wookie-movies/wookie-movies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './helpers/filter.pipe';
import { WookieMovieDetailComponent } from './pages/wookie-movie-detail/wookie-movie-detail.component';
import { CacheMapService } from './services/cache-map.service';
import { CachingInterceptor } from './helpers/caching-interceptor';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WookieMovieHeaderComponent } from './pages/wookie-movie-header/wookie-movie-header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WookieMovieSearchComponent } from './pages/wookie-search/wookie-movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WookieMoviesComponent,
    WookieMovieDetailComponent,
    WookieMovieHeaderComponent,
    WookieMovieSearchComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CacheMapService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
