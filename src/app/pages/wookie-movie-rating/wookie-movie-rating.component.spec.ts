import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WookieMovieRatingComponent } from './wookie-movie-rating.component';

describe('WookieMovieRatingComponent', () => {
  let component: WookieMovieRatingComponent;
  let fixture: ComponentFixture<WookieMovieRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WookieMovieRatingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieMovieRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
