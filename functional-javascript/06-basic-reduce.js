
function countWords(inputWords){

	return inputWords.reduce(function(a,b){

	a[b] = ++a[b] || 1
	return a

}, {})
}

module.exports = countWords


