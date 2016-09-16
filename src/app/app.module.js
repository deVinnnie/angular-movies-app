import 'angular';
import 'angular-route';

import { appConfig } from './app.config';
import { MoviesService } from './shared/movies.service';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';
import { MoviePanelComponent } from './shared/movie-panel/movie-panel.component';

var appModule = angular.module('moviesApp', ['ngRoute'])
       .config(appConfig)
       .constant("apiURL", "https://angularcoursebackend.azurewebsites.net/api/Movies/")
       .service("MoviesService", MoviesService)
       .component("moviePanel", MoviePanelComponent)
       .component("moviesSearch", MoviesSearchComponent)
       .component("moviesAdd", MoviesAddComponent)
       .component("movieDetails", MoviesDetailsComponent)
       .component("moviesList", MoviesListComponent);

export default appModule.name;
