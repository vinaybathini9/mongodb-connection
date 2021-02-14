var events = require('events');
var eventEmitter = new events.EventEmitter();
///create a event handler
var myEventHandler = function(){
    console.log(" i hear a scream!");
}
//assign the event handler
eventEmitter.on('scream',myEventHandler);
eventEmitter.emit('scream');