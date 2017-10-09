angular.module('favorite',[])
.component('favoritelist',{
	controller:function(){
		this.data=[];
		var x=this;
		$.ajax({
			async: false,
			url: "http://127.0.0.1:8080/favorite",
			cache: false,
			dataType: 'json',
			success: function(data){
				console.log(data)
				x.data=data
            }
        })
	},
	templateUrl:'public/templates/favoritelist.html'
});





