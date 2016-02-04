

// Official Solution

var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) 
        result = parsetime(time)			 
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))


// My Solution
/*
var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'})
	var path = url.parse(req.url, true)
	 if(req.method === 'GET' && path.pathname == '/api/parsetime'){
	 	var date = new Date()
	 	var hour = date.getHours()
	 	var minute = date.getMinutes()
	 	var second = date.getSeconds()
	 	var unixtime = date.getTime()
	 	var firstTime = JSON.stringify({hour:hour, minute:minute, second:second})
	 	res.write(firstTime + '\n')
	 	res.write(JSON.stringify({unixtime:unixtime}))
	 	res.end() 
	 }

	res.end()
})

server.listen(process.argv[2], function(){
	console.log('listening ...')
})