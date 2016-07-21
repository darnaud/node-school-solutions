function getShortMessages(messages) {
      var array = []
      var filtered = messages.filter(m => m.message.length < 50)
      filtered.map(function(m){
		array.push(m.message)
	})
	return array
    }
    
    module.exports = getShortMessages
