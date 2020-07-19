import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieMoviesComponent } from './wookie-movies.component';

describe('WookieMoviesComponent', () => {
  let component: WookieMoviesComponent;
  let fixture: ComponentFixture<WookieMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WookieMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
