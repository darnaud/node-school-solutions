var filepath = process.argv[2] ;
var fs = require('fs') ;

var buffer = fs.readFileSync(filepath).toString() ;

console.log(buffer);