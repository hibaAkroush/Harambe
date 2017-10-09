var request = require('request');


exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};


exports.getTheatres = function (req,res,callback){
  var url =  "https://api.themoviedb.org/3/movie/now_playing?api_key=8081cb4893843ff570504c531dd99fe9&language=en-US&page=1"
  var options = {
    url:url ,
    headers: {
      'User-Agent': 'request'
    },
    method : 'get'
  }
  request(url, function (error, response, body) {
  	body=JSON.parse(body)
  	var array = [];
  	//"http://image.tmdb.org/t/p/w185/"+body.results.
    for (var i = 0; i < 6; i++) {
    	var object = {};
    	object.poster = "http://image.tmdb.org/t/p/w185/"+ body.results[i].poster_path
    	object.title = body.results[i].original_title
    	object.date = body.results[i].release_date
    	array.push(object)
    }
        callback(array);
    })
  }
