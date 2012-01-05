var fs = require('fs');

var Log = (function() {
  var lg = {};
  var ws = fs.createWriteStream('./output.txt', {
    flags: 'w',
    encoding : null,
    mode: 0666
  });
  lg.write = function(str) {
    ws.write(str + "\n");
    console.log(str);
  }
  return lg;
})();

exports.Log = Log;