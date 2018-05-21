app.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller: 'homeController as home',
    });
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  });