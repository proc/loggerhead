var fs = require('fs');

var Log = function(filename) {
  var ws = fs.createWriteStream(filename, {
    flags: 'w',
    encoding : null,
    mode: 0666
  });
  this.ws = ws;
  return this; // just to be explicit
}

Log.prototype.write = function(str) {
  this.ws.write(str + "\n");
  console.log(str);
}
exports.Log = Log;