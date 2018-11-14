const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit('TEST_EVENT');
});

myEmitter.on('TEST_EVENT',()=> {
  console.log("Test event emitted 1");
});

myEmitter.on('TEST_EVENT',()=> {
  console.log("Test event emitted 2");
});
