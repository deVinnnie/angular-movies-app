import 'purecss/build/pure-min.css';
import './style.css';

import 'angular';
import 'angular-i18n/angular-locale_nl-be';

import appModule from './app/app.module';

angular.bootstrap(document, [appModule]);
