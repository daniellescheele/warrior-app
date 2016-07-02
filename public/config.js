// home - roles view - user role - warrior

angular.module('app')
  .config(['$routeProvider',
   function($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'index.html'
      // })
      .when('/login', {
        templateUrl: '/views/loginView.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when( '/roles',  {
        templateUrl: '/views/roles-info.html',
        controller: 'RoleCtrl'
      })
      .when('/my_roles',  {
        templateUrl: '/views/user-role.html',
        controller: 'WarriorCtrl',
        controllerAs: 'warrior'
      })
      .when( '/warrior', {
        templateUrl: 'warrior.html',
        controller: 'snapshot-ctrl.js'
      })
      .when('/create_tribe', {
        templateUrl: '/views/createTribe.html',
        controller: 'TribeCtrl'
      })
      .otherwise('/login')

    }
]);
