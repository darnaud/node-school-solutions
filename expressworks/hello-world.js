var express = require('express')
var app = express()

app.get('/home', function(req,res){
	//res.writeHead(200, {'Content-Type':'text/plain'})
	res.end('Hello World!')
})

app.listen(process.argv[2])