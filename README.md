# WookieMoviesAngularAuth

### **Home Page (Displays List of movies)**
![1](https://user-images.githubusercontent.com/54956998/88102159-199fd380-cb6d-11ea-80ae-a268288439a7.PNG)

### **Movie Detail Page (Displays detailed information of movie)**
![2](https://user-images.githubusercontent.com/54956998/88102201-27edef80-cb6d-11ea-994d-24216d50026d.PNG)

### **Search Page**
![3](https://user-images.githubusercontent.com/54956998/88102210-2ae8e000-cb6d-11ea-9aae-dac89be74e2b.PNG)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

### **_Features Implemented_**

- Interceptors (JWTInterceptor to handle the token in headers for each http Request to implement authentication )
- Caching (CachingInterceptor is created to cache the server side url and response to avoid multiple api calls)
- Pipes (Custom FilterPipe is created to filter images based on group like Action, Drama etc.,)
- Rating (WookieMovieRatingComponent is used to display rating of the movie)
- Search (WookieMovieSearchComponent is used to search the movie typed by the user in the search bar)
- Rest API - GET call Integration
- FlexLayout is used for Displaying of Movies in the landing page
- Bootstrap is used for Search template 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
