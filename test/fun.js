var ascii = require('ascii-fun')
var callback = function (error, s) { console.log(s) }

ascii.lowercase(6, callback)
ascii.uppercase(6, callback)
ascii.digits(6, callback)

ascii.generate({
  length: 12,
  range: 3,
  offset: 123,
  callback: callback
})
