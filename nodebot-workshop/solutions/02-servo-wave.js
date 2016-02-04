var five = require('johnny-five')

var myBoard = new five.Board()
myBoard.on('ready', function(){
	var servo = new five.Servo(9)

	servo.sweep()

	this.wait(3000, function(){
		servo.stop()
		servo.center()
	})

})
