const Emitter = require('events');
const eventConfig = require('./config').events;

const emtr = new Emitter();

emtr.on(eventConfig.GREET, function () {
  console.log('Somewhere, someone said hello mate.');
});

emtr.on(eventConfig.GREET, function () {
  console.log('A greeting has occured');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);
