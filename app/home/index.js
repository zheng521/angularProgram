import angular from 'angular'
import uirouter from 'angular-ui-router'
import angularTouch from 'angular-touch'

import routes from './config/routes'
import HomeController from './controller/home'

export default angular.module('home', [uirouter])
	.config(routes)
	.controller('HomeController', HomeController)
	.name;