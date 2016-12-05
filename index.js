var express = require('express')
var app = express()
var test = require(__dirname + '/test');
var cmd = require('node-cmd');

app.get('/', function (req, res) {
  cmd.get(`node --expose-debug-as=Debug jslogger.js --jsondump=true --code="${test}"`,
  function(ret) {
    res.send(ret);
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
