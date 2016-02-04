var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, list){
	list = list.filter(function(item){
		if(path.extname(item) === '.' + process.argv[3]){
			console.log(item)
			return item
		}
		else
			return false

	})


})








/*

function(item){
	return path.extname(item) === '.' + process.argv[3]
}

*/