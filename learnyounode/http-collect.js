var http = require('http'),
	bl = require('bl')

	http.get(process.argv[2], function(res){
		res.setEncoding('utf-8')

		res.pipe(bl(function (err, data) {
			if (err)
				console.error('Sorry Bro')
			console.log(data.length)
			console.log(data.toString())

		})) 


	})   