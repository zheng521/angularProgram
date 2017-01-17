import '../assets/app.scss'
import util from '../../util.js'
import Api from '../../api.js'

export default class ListController {
	constructor($location, $scope, $http) {
		var self = this;
		self.allActive = 'active';
		self.goodActive = '';
		self.shareActive = '';
		self.askActive = '';
		self.jobActive = '';

		self.onTapTag = function(category) {
			if(category == 'all') {
				self.allActive = 'active';
				self.goodActive = '';
				self.shareActive = '';
				self.askActive = '';
				self.jobActive = '';
			}else if (category == 'good') {
				self.allActive = '';
				self.goodActive = 'active';
				self.shareActive = '';
				self.askActive = '';
				self.jobActive = '';
			}else if (category == 'share') {
				self.allActive = '';
				self.goodActive = '';
				self.shareActive = 'active';
				self.askActive = '';
				self.jobActive = '';
			}else if (category == 'ask') {
				self.allActive = '';
				self.goodActive = '';
				self.shareActive = '';
				self.askActive = 'active';
				self.jobActive = '';
			}else{
				self.allActive = '';
				self.goodActive = '';
				self.shareActive = '';
				self.askActive = '';
				self.jobActive = 'active';
			}

			if(category !== 'all') {
      	fetchData({tab: category});
	    }else {
	      fetchData();
	    }

		}

		function fetchData(data) {
	    if(!data) data = {};
	    $http({
	      url: Api.getTopics(data),
	      method: 'GET'
	    }).success(function(res){
	        self.items = res.data;
	        self.items = self.items.map(function(item) {
	        item.last_reply_at = util.getDateDiff(new Date(item.last_reply_at));
	        	return item;
					});
	    })
		}

		fetchData();
	}
}

ListController.$inject = ['$location', '$scope', '$http'];