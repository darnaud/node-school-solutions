var net = require('net');

var portNo = process.argv[2];

function pad(num) {
    return (num < 10 ? '0' : '') + num;
}

var server = net.createServer( function(socket){

    var date = new Date()
    socket.end(

          pad(date.getFullYear()) + '-'
        + pad((date.getMonth()+1)) +'-'
        + pad(date.getDate()) + ' '
        + pad(date.getHours()) + ':'
        + pad(date.getMinutes())+ '\n');
})


server.listen(portNo);


/* Official Solution

var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

*/