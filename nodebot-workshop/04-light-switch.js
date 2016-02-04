var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function(){
	var button = new five.Button({
		pin: 5
	})

	var led = new five.Led({
		pin: 9
	})

	button.on('press', function(){
		led.toggle()
	})
})