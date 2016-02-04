
module.exports = function (str) {
     var m = /\W*\D*\bx=(\d+)\b/.exec(str)
     return m? m[1] : null
  }


