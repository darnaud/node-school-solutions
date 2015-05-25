var http = require('http');
var bl = require('bl');
var url = process.argv[2];
var results;

http.get(url, function(response){
	response.setEncoding('utf-8');

	response.pipe(bl(function(err, data){
		return data.toString();
	}))

})