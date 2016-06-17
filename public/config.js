// home - roles view - user role - warrior

angular.module('app')
  .config(['$routeProvider',
   function($routeProvider) {
    $routeProvider.
      when( '/roles',  {
        templateUrl: 'roles-info.html',
        controller: 'role-ctrl.js'
      })
      .when('/my_roles',  {
        templateUrl: '/views/user-role.html',
        controller: 'RoleActionCtrl'
      })
      .when( '/warrior', {
        templateUrl: 'warrior.html',
        controller: 'snapshot-ctrl.js'
      })
    }
]);
