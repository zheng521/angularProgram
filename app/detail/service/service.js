import Api from '../../util.js'

export default class PostService {
	constructor($http){
		this.$http = $http;
	}
	getDetailPost(postId) {
		return this.$http({
			method: 'get',
			url: Api.getTopicByID(id, {mdrender:false})
		})
	}
}