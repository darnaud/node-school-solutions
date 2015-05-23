var express = require('require');
var app = express();
var filepath = process.argv[3];

app.get('/home', function(req, res){

	app.set('views', path.join(__dirname, 'filepath'))
})




//toDateString