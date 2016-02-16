var express = require('express'),
	app = express()
	path = require('path')

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(process.argv[2])