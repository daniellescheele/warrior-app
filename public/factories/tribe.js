angular.module('app')

  .factory('TribeFactory', function($timeout){

    return {
      create(emails)  {
        console.log(emails)
       return $timeout().then(() => (
        console.log("")
        ))
      },
    }
  })
// make a put for the objs
