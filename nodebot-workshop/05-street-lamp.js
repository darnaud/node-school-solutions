var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function(){
	var photoResistor = new five.Sensor({
			pin: 'A0',
			type: 'analog',
			freq: 250
		})

	var led = new five.Led({
		pin: 9
	})

	photoResistor.on('data', function(){
		if(this.value > 600)
			led.on()
		else
			led.off()

	})
/*
	this.repl.inject({
		led: led,
		photoResistor: photoResistor
	})
*/
})