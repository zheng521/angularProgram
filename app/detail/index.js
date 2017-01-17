import angular from 'angular'
import uirouter from 'angular-ui-router'
import angularTouch from 'angular-touch'

import routes from './config/routes'
import DetailController from './controller/detail'

export default angular.module('detail', [uirouter])
	.config(routes)
	.controller('DetailController', DetailController)
	.name;