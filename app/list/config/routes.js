export default ($stateProvider) => {
  $stateProvider
    .state('list', {
      url: '/list',
      template: require('../view/list.html'),
      controller: 'ListController',
      controllerAs: 'list'
    });
}