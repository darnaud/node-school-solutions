var express = require('express'),
	app = express()


app.put('/message/:id', function(req, res){
	var hash = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')

     res.end(hash)
})

app.listen(process.argv[2] || 3000 )