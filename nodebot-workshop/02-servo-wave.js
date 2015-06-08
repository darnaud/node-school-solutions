var five = require('johnny-five')

var myBoard = new five.Board()
myBoard.on('ready', function(){
	var servo = new five.Servo(9)

	servo.sweep()

	myBoard.wait('ready', function(){
		
	})

})