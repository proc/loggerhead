var events = require('events');
var Log = new require('./log').Log;
var EventEmitter = events.EventEmitter;

function LoggerHead(name) {
  this.name = name;
  this.log = new Log(this.name + "_log.txt");
  return this;
};

LoggerHead.prototype.write_to_log = function(str) {
  var write_str = this.name + " : " + str
  this.log.write(write_str);
}

LoggerHead.prototype.__proto__ = EventEmitter.prototype;

exports.LoggerHead = LoggerHead;