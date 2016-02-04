var http = require('http')
var map = require('through2-map')

var server = http.createServer(function(req, res){
	if (req.method === 'POST'){
		req.pipe(map(function(piece){
			return piece.toString().toUpperCase()
		})).pipe(res)

	}


})

server.listen(process.argv[2], function(){
	console.log('now listening on port ' + process.argv[2] + ' ...')
})