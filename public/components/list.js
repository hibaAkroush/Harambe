angular.module('myapp')
.component('list',{
  bindings:{
  	movie:  '<',
  	trailer:'<'
  },
  templateUrl: 'public/templates/list.html'
})