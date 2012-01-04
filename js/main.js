var LoggerHead = require('./logger_head').LoggerHead;
var kainani = new LoggerHead('kainani');

kainani.on('message', kainani.write_to_log);

setInterval(function() {
    kainani.emit('message', 'this is a message');
}, 300);
  
setTimeout(function(){
  kainani.removeListener('message', kainani.write_to_log);
}, 1000);
