const jwt = require('jsonwebtoken')
var obj = {
    id: "1000",
    name: "fares"
}

console.log(obj)
var token = jwt.sign(obj, 'webtestfares', { expiresIn: 10 })
var data = jwt.verify(token, 'webtestfares')
console.log(token)
console.log(data)
