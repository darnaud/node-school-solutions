var express = require('express')
var app = express()
var portNo = process.argv[2]
var file = process.argv[3]

app.use(express.static(file || path.join(__dirname, 'public')))

app.listen(portNo);
