var express = require('express'),
	app = express(),
	fs = require('fs')

app.get('/books', function(req,res){
	fs.readFile(process.argv[3], 'utf-8', function(err, data){
		if (err)
			console.error('Sorry, file could not be read!')
		res.send(JSON.parse(data))
	})

	
})

app.listen(process.argv[2] || 3232)

/*

	Official Solution

 var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])

    */