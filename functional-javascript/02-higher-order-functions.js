function repeat(operation, num){
	operation();
	num--;
	if(num > 0){
		repeat(operation,num)
	}
}

module.exports = repeat;
