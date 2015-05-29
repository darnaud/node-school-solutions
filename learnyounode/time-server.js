var net = require('net');
var portNo = process.argv[2];
var date = new Date()



var server = net.createServer(function(socket){
	
	socket.end(String(date.getFullYear() +'-'))
})

server.listen(portNo)

 //ls"YYYY-MM-DD hh:mm"

 date.getFullYear()
    date.getMonth()     // starts at 0
    date.getDate()      // returns the day of month
    date.getHours()
    date.getMinutes()
