var str = process.argv[2]

module.exports = function(str){
	return /LITERALLY/.test(str)
}