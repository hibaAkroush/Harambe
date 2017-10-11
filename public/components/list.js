angular.module('myapp')
.component('list',{
  bindings:{
  	movie:  '<',
  	trailer:'<',
  	recomendedMovie: '<'
  },
  templateUrl: 'public/templates/list.html'

})