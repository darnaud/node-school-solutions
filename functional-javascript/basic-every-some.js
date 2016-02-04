 function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        
        return submittedUsers.every(function(item){
        	return goodUsers.some(function(elem){
        		return item.id == elem.id
        	})
        })
      };
    }
    
    module.exports = checkUsersValid