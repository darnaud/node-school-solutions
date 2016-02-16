var filepath = process.argv[2] ; 
var fs = require('fs') ; // filesystem operation module


fs.readFile(filepath, function(err, contents){
	if (err)
		console.log('*** Error ****');
	else
		console.log(contents.toString().split('\n').length - 1);
})
