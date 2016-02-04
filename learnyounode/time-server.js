var portNo = process.argv[2]
var net = require('net')

function zeroFill(number){
	if(number < 10)
		return '0' + number.toString()
	else 
		return number
}

var server = net.createServer(function(socket){

	var date = new Date()
	socket.end(
				date.getFullYear()  
     			+ '-' + zeroFill(date.getMonth() + 1)     // starts at 0  
     			+ '-' + zeroFill(date.getDate())      // returns the day of month  
     			+ ' ' + zeroFill(date.getHours())  
    			+ ':' + zeroFill(date.getMinutes())
    			+ '\n'
				)

})

server.listen(portNo, function(){
	console.log('listening...')
})