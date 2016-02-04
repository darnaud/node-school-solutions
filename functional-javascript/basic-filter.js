function getShortMessages(messages){

	 messages = messages.filter(function(obj){
		return (obj.message.length < 50);
	})

	 var shortMessages = messages.map(function(obj){
	 	return obj.message;
	 })

	 return shortMessages
}

module.exports = getShortMessages