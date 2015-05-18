// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
var sum = 0;

for ( var i = 2; i < process.argv.length; i++ ){
	if( !isNaN(process.argv[i])){
		sum += +process.argv[i];
	}
}

console.log(sum);