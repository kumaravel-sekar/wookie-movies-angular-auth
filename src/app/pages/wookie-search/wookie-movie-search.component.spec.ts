import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WookieMovieSearchComponent } from './wookie-movie-search.component';

describe('WookieMovieSearchComponent', () => {
  let component: WookieMovieSearchComponent;
  let fixture: ComponentFixture<WookieMovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WookieMovieSearchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieMovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
