module.exports = function getShortMessages(messages){

	var k = 0;

	var arr = {}

	arr = messages.filter(function(obj){

		return (obj.message.length < 50)

	})

	return arr.map(function(obj){
		 
		 return obj.message 
		 
	})

}

/* Official Solution

module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }
*/