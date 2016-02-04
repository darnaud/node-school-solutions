var five = require('johnny-five')

var myBoard = new five.Board()

myBoard.on('ready', function(){
	var led = new Led(13)
	led.strobe(1000)
})