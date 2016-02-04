var filepath = process.argv[2] ; 
var fs = require('fs') ; // filesystem operation module


console.log(fs.readFileSync(filepath).toString().split('\n').length - 1);


//Note//

//this is the code equivalent of a run-on sentence :D
//the file given by "filepath" :
//is read, 
//converted to string,
//split into array of substrings with '\n' delimiter,
//then 1 is substracted from form the arrray length and Voila
//We got the number of newlines in the input file
