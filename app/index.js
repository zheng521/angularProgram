import underscore from 'underscore'
import angular from 'angular'
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';
import angularTouch from 'angular-touch'
// import angularCarousel from 'angular-carousel'

import routing from './config.js'
import home from './home'
import list from './list'
import detail from './detail'

angular.module('zbjApp', [uirouter, sanitize, home, list, detail])
	.config(routing)
	.run(['$rootScope', ($root) => {
    $root.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
      if (newUrl !== oldUrl) {
        $root.loadingView = true;
      }
    });
    $root.$on('$stateChangeSuccess', () => {
      $root.loadingView = false;
    });
    $root.$on('$stateChangeError', () => {
      $root.loadingView = false;
    });
  }]);


