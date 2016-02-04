var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Error');
});

app.listen(3000);