//888888888888888888888888888888888888888888888888888888888888888888888

angular.module('watched')
.component('watchentry',{
	bindings:{
		movie:'<'
	},
	templateUrl: 'public/templates/watchentry.html'
})