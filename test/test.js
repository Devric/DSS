var dss = require('../dss.js')
var fs = require('fs')
var util = require('util')

describe('check parser is working', function(){
    var lines = fs.readFileSync('./test.styl')
    dss.parse(lines, {}, function(parsed) {
        console.log(util.inspect(parsed, false,null))
    })
})

