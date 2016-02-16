function eat (food){
	return food + ' tasted really good.';
}
if (process.argv[2])
	console.log(eat(process.argv[2]));
else
	console.log(eat('bananas'));