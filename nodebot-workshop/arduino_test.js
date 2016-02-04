var five = require('johnny-five')
var board = new five.Board({
	port: '/dev/cu.usbmodemFA131'
})

board.on('ready', function(){
	var motor = new five.Motor({
		pin: 6
	})


	this.repl.inject({
		motor : motor
	})
})
