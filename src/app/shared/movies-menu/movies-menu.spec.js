import angular from 'angular';
import 'angular-mocks';
import { MoviesMenuComponent } from './movies-menu.component';

describe('Movies Menu component', () => {
  beforeEach(() => {
    angular
      .module('fountainHello', ['app/shared/movies-menu/movies-menu.html'])
      .component('fountainHello', MoviesMenuComponent );
    angular.mock.module('fountainHello');
  });
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
  }));
});
