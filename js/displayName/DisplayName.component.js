(function() {
  angular.module('myApp').component('displayName', {
    templateUrl: '/js/displayName/DisplayName.template.html',
    bindings: {
      name: '='
    }
  })
})()
