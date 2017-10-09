var util= require("../../lib/utility.js");


angular.module('myapp')
.component('Theatres',{
  util.getTheatres(req,res,function(data){
  console.log(data)
  })
	bindings:{
		Theatres:'<'
	},
	templateUrl:'public/templates/Theatres.html'
})