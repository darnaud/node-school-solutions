module.exports = function (str) {
    return str.match(/("(\s?[a-z]*)*")/g)
  }