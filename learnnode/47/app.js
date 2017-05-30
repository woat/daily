const fs = require('fs');
const path = require('path');

const greet = fs.readFileSync(path.join(__dirname, '/greet.txt'), 'utf8');

const greet2 = fs.readFile(path.join(__dirname, '/greet.txt'), 'utf8', function (err, data) {
  console.log('greet2' + data);
});
greet2()
