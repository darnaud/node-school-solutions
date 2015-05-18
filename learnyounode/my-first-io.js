var filepath = process.argv[2] ; 
var fs = require('fs') ; // filesystem operation module


//File given by "filepath" is read, converted 
//to string and stored into "buffer" variable
var buffer = fs.readFileSync(filepath).toString() ;


// buffer string is split into array of 
//substrings with "\n" as delimiter
// then length of said array is returned
//we add " - 1" because there is no newline 
//character at then of testfile
console.log(buffer.split('\n').length + 1);