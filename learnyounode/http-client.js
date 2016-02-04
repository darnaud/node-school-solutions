var http = require('http')

http.get(process.argv[2], function(res){
	res.setEncoding('utf-8')

	res.on("data", function (data) { 
		console.log(data)
	 })

	res.on("error", function (data) { 
		console.error('Sorry bro')
 	})

	res.on("end", function (data) { 
		console.log('')
	})
})
