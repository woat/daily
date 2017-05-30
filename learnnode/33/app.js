const EventEmitter = require('events');
const util = require('util');

function Greetr() {
  this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
  console.log(this.greeting + ': ' + data);
  // Pass down data to emitter
  this.emit('greet', data);
};

const greeter1 = new Greetr();

greeter1.on('greet', function (data) {
  // Recieves data from prototype method
  console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
