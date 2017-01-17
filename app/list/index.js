import angular from 'angular'
import uirouter from 'angular-ui-router'
import angularTouch from 'angular-touch'

import routes from './config/routes'
import ListController from './controller/list'

export default angular.module('list', [uirouter])
	.config(routes)
	.controller('ListController', ListController)
	.name;