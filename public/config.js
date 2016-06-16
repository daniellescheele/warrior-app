// home - roles view - user role - warrior

angular.module('app')
  app.config(['$routeProvider',
   function($routeProvider) {
    $routeProvider.
      when( '/roles'  {
        templateUrl: 'roles-info.html.',
        controller: 'role-ctrl.js'
      })
      .when( '/my_roles'  {
        templateUrl: 'roles-action.html.',
        controller: 'role-action-ctrl.js'
      })
      .when( '/warrior'  {
        templateUrl: 'warrior.html.',
        controller: 'snapshot-ctrl.js'
      })
    }
]);
