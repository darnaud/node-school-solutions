var five = require('johnny-five')
	board = new five.Board()
	server = require('dgram').createSocket('udp4')

board.on('ready', function(){
	var piezo = new five.Piezo({
		pin: 8
	})

	server.on('message', function(msg, rinfo){

		piezo.play({
			song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
    		beats: 1 / 4,
    		tempo: 100})
	})

server.bind(1337, function(){
	console.log('Magic is happening on port 1337 ...')
})

})

