var Log = (function() {
  var lg = {};
  lg.write = function(str) {
    console.log(str);
  }
  return lg;
})();

exports.Log = Log;