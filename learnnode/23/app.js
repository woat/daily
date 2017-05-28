const greet1 = require('./greet1');
greet1();

const greet2 = require('./greet2').greet;
greet2();

const greet3 = require('./greet3');
greet3.greet();

const Greet4 = require('./greet4');
const grtr = new Greet4();
grtr.greet();

const greet5 = require('./greet5');
greet5();
