var http = require('http');
var url = process.argv[2];

http.get(url, function (response){
	response.on("data", function(data){
		return console.log(data.toString());
	})

	response.on("error", function(){
		return console.error("There is an error");
	})

	
})
