 angular.module('favorite')
.component('favoriteentry',{
  controller: function() {
    this.shown = true;
    this.removeFromFavorite = function() {
      $.ajax({
        async: false,
        type: 'delete',
        url: "http://127.0.0.1:8080/favorite?" + this.movie._id,
        cache: false,
        dataType: 'json',
        success: function(data) {
          console.log(data)
        }
      })
      this.shown = false;
    }
  },
  bindings:{
    movie:'<'
  },
	templateUrl:'public/templates/favoriteentry.html'
});
