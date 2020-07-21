import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WookieMovieDetailComponent } from './wookie-movie-detail.component';

describe('WookieMovieDetailComponent', () => {
  let component: WookieMovieDetailComponent;
  let fixture: ComponentFixture<WookieMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WookieMovieDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
