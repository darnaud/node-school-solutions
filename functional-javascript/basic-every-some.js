//Solution from superdweebie on github

module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
      return !submittedUsers.some(function(submittedUser){
          return !goodUsers.some(function(goodUser){
              return goodUser.id == submittedUser.id
          })
      })
  };
}

/*
Official Solution 

 module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }

*/