var filepath = process.argv[3]
var portNo = process.argv[2]
var express = require('express')
var app = express()
var path = require('path')

app.set('view engine', 'jade')

app.set('views', filepath)

app.get('/home', function(req,res){

	res.render('index.jade', {date: new Date().toDateString()})

})

app.listen(portNo)

