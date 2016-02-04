function duckCount() {
	if (!arguments.length)
		return 0
	return Array.prototype.slice.call(arguments).filter( function(arg){
		return Object.prototype.hasOwnProperty.call(arg, 'quack')
	}).length
}
    
    module.exports = duckCount

   