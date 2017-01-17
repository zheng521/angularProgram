export default ($stateProvider) => {
  $stateProvider
    .state('detail', {
      url: '/topic/:id',
      template: require('../view/detail.html'),
      controller: 'DetailController',
      controllerAs: 'detail',
      resolve: {
      	post: ($stateParams) => {
  				return $stateParams.id;
        }
      }
    });
}