function math(arg1, arg2, arg3){
	return parseInt(arg2)*parseInt(arg3)+parseInt(arg1);
}

if (process.argv[2] && process.argv[3] && process.argv[4])
	console.log(math(process.argv[2], process.argv[3], process.argv[4]));
else
	console.log(math(53,61,67));
