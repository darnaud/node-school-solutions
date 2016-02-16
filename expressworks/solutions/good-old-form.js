var path = require('path')
var express = require('express')
var app = express()
app.use(require('body-parser').urlencoded());

app.post('/form', function(req, res){
    res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
