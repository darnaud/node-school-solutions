function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    return submittedUsers.every(submittedUser=> goodUsers.some(goodUser =>goodUser.id === submittedUser.id))
  };
};


module.exports = checkUsersValid;