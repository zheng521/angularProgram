import '../assets/app.scss'
import util from '../../util.js'
import Api from '../../api.js'

export default class DetailController {
	constructor($location, $scope, $http, post) {
		var self = this;
		$http({
			method: 'get',
			url: Api.getTopicByID(post, {mdrender:false})
		}).success(function(data){
			console.log(data);
			self.info = data.data;
		});
	}
}

DetailController.$inject = ['$location', '$scope', '$http', 'post'];