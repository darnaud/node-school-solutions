var str = process.argv[2]

module.exports = function(str){
	return /^[^0-9][^A-Z]/.test(str)
}

