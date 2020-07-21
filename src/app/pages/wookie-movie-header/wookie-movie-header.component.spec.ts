import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WookieMovieHeaderComponent } from './wookie-movie-header.component';

describe('WookieMovieDetailComponent', () => {
  let component: WookieMovieHeaderComponent;
  let fixture: ComponentFixture<WookieMovieHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WookieMovieHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieMovieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
