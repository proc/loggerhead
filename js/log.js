var fs = require('fs');

var Log = function(filename) {
  var ws = fs.createWriteStream(filename, {
    flags: 'w',
    encoding : null,
    mode: 0666
  });
  
  this.write = function(str) {
    ws.write(str + "\n");
    console.log(str);
  }
}

exports.Log = Log;